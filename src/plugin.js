const TableConstructor = require("./tableConstructor").TableConstructor;
const svgIcon = require("./img/toolboxIcon.svg");

const CSS = {
  input: "tc-table__inp",
};

/**
 *  Tool for table's creating
 *  @typedef {object} TableData - object with the data transferred to form a table
 *  @property {string[][]} content - two-dimensional array which contains table content
 */
class Table {
  /**
   * Allow to press Enter inside the CodeTool textarea
   * @returns {boolean}
   * @public
   */
  static get enableLineBreaks() {
    return true;
  }

  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @return {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: svgIcon,
      title: "Table",
    };
  }

  /**
   * Render plugin`s main Element and fill it with saved data
   * @param {TableData} data — previously saved data
   * @param {object} config - user config for Tool
   * @param {object} api - Editor.js API
   */
  constructor({ data, config, api }) {
    this.api = api;

    this._tableConstructor = new TableConstructor(data, config, api);
  }

  /**
   * Return Tool's view
   * @returns {HTMLDivElement}
   * @public
   */
  render() {
    window.dispatchEvent(new CustomEvent('editorJsTableCreated', {
      detail: this._tableConstructor.htmlElement
    }));
    return this._tableConstructor.htmlElement;
  }

  /**
   * Extract Tool's data from the view
   * @returns {TableData} - saved data
   * @public
   */
  save(toolsContent) {
    const table = toolsContent.querySelector("table");
    const data = [];
    const rows = table.rows;

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const cols = Array.from(row.cells);
      const inputs = cols.map((cell) => cell.querySelector("." + CSS.input));
      const isWorthless = inputs.every(this._isEmpty);

      if (isWorthless) {
        continue;
      }
      data.push(inputs.map((input) => encodeURI(input.innerHTML)));
    }

    return {
      content: data,
    };
  }

  /**
   * @private
   *
   * Check input field is empty
   * @param {HTMLElement} input - input field
   * @return {boolean}
   */
  _isEmpty(input) {
    return !input.textContent.trim();
  }

  /**
   * Detect pasted table
   */
  static get pasteConfig() {
    return {
      tags: ["TABLE", "TR", "TD", "TBODY", "THEAD", "TH"],
    };
  }

  /**
   * Handle Pasted Data
   */
  onPaste(event) {
    switch (event.type) {
      case "tag":
        let data = [[]];
        const frags = event.detail.data.innerHTML.split("\n");

        let rowIdx = 0;
        let colIdx = 0;

        frags.forEach((frag, idx) => {
          if (frag.match(/[a-z0-9]+/i)) {
            data[rowIdx][colIdx] = frag.trim();
            colIdx++;
            return;
          }

          if (frag === "") {
            return;
          }

          if (frag.match(/\s+/)) {
            colIdx = 0;
            rowIdx++;

            if (!data[rowIdx]) {
              data[rowIdx] = [];
            }
          }
        });

        data = data.filter((row) => row.length);
        const size = {
          cols: data[0].length,
          rows: data.length,
        };

        this._tableConstructor._fillTable({ content: data }, size);

        break;
    }
  }
}

module.exports = Table;
