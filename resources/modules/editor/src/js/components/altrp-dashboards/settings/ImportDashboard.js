import React, { Component } from "react";

class ImportDashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={this.props.className}
        style={{
          display: "inline-block"
        }}
      >
        <button
          className={`altrp-btn-draw`}
          style={{
            margin: "5px 5px 5px 5px"
          }}
          onClick={this.props.onImport}
        >
          Импорт диаграмм
        </button>
        <input
          type="file"
          onChange={e => this.props.getFile(e)}
          accept="application/json"
        />
      </div>
    );
  }
}

export default ImportDashboard;
