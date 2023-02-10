import React, { Component } from "react";
import Resource from "../../../../editor/src/js/classes/Resource";

const tablesOptions = tableId => new Resource({ route: `/admin/ajax/tables/${tableId}/columns` });
class JoinComponent extends Component {
  state = {
    targetColumnOptions: []
  }

  componentDidUpdate(prevProps) {
    const { target_table } = this.props.item;
    if (prevProps.item.target_table !== target_table) {
      tablesOptions(target_table).getAll()
        .then(targetColumnOptions => this.setState({ targetColumnOptions }));
    }
  }

  componentDidMount() {
    const { target_table } = this.props.item;
    if (target_table) {
      tablesOptions(target_table).getAll()
        .then(targetColumnOptions => this.setState({ targetColumnOptions }));
    }
  }

  render() {
    const { type, target_table, source_column, operator, target_column } = this.props.item;
    const { changeHandler, tablesOptions, sourceColumnOptions } = this.props;
    const { targetColumnOptions } = this.state;
    return <div className="form-segment">
      <div className="form-group__inline-wrapper">
        <div className="form-group form-group_width47">
          <label>Type
            <select required name="type"
              value={type}
              onChange={changeHandler}
              className="form-control"
            >
              <option disabled value="" />
              <option value="inner_join">Inner Join</option>
              <option value="left_join">Left Join</option>
              <option value="right_join">Right Join</option>
            </select>
          </label>
        </div>

        <div className="form-group form-group_width47">
          <label>Target Table
          <select required name="target_table"
              value={target_table}
              onChange={changeHandler}
              className="form-control"
            >
              <option disabled value="" />
              {tablesOptions.map(({ value, label }) =>
                <option disabled={value === target_table} value={value} key={value}>
                  {label}
                </option>)}
            </select>
          </label>
        </div>
      </div>

      <div className="form-group__inline-wrapper">
        <div className="form-group form-group_width30">
          <label>Source Column
          <select required name="source_column"
              value={source_column}
              onChange={changeHandler}
              className="form-control"
            >
              <option disabled value="" />
              {sourceColumnOptions.map(({ label, value }) => <option value={value} key={value}>{label}</option>)}
            </select>
          </label>
        </div>

        <div className="form-group form-group_width30">
          <label>Operator
            <select required name="operator"
              value={operator}
              onChange={changeHandler}
              className="form-control"
            >
              <option value="" disabled />
              <option value="=">Equals</option>
              <option value="!=">Not Equals</option>
              <option value="like">Like</option>
              <option value=">">&gt;</option>
              <option value=">=">&gt;=</option>
              <option value="<">&lt;</option>
              <option value="<=">&lt;=</option>
            </select>
          </label>
        </div>

        <div className="form-group form-group_width30">
          <label>Target Column
            <select required name="target_column"
              value={target_column}
              onChange={changeHandler}
              className="form-control"
            >
              <option disabled value="">{!target_table ? 'Choose Table First' : ''}</option>
              {targetColumnOptions.map(({ id, title }) => <option value={id} key={id}>{title}</option>)}
            </select>
          </label>
        </div>
      </div>
    </div>
  }
}

export default JoinComponent;