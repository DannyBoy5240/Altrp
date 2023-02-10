import React, { Component } from "react";

class OrderByComponent extends Component {
  render() {
    const { type, column } = this.props.item;
    const { columnsOptions, changeHandler } = this.props;

    return <div className="form-segment form-group__inline-wrapper">
      <div className="form-group form-group_width47">
        <label>Field</label>
        <select required name="column"
                value={column}
                onChange={changeHandler}
                className="form-control"
        >
          <option disabled value="" />
          {columnsOptions.map(({ value, label }) =>
            <option key={value} value={label}>
              {label}
            </option>)}
        </select>
      </div>

      <div className="form-group form-group_width47">
        <label>Type</label>
        <select required name="type"
                value={type}
                onChange={changeHandler}
                className="form-control"
        >
          {/*<option disabled value="" />*/}
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>
      </div>
    </div>
  }
}

export default OrderByComponent;
