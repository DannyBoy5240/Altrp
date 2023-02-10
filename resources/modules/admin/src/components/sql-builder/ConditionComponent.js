import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import { getDatePickerFormat, getMomentFormat } from "./helpers";

const conditionTypeOptions = ['where', 'or_where', 'where_between', 'where_in', 'where_date', 'where_column'];
const dateTypesOptions = [
  { value: 'datetime', label: 'Date - Time' },
  { value: 'date', label: 'Date' },
  { value: 'time', label: 'Time' },
  { value: 'day', label: 'Day' },
  { value: 'month', label: 'Month' },
  { value: 'year', label: 'Year' }
];

class ConditionComponent extends Component {
  state = { isDateVar: false }

  dateValueFormatChange = () => {
    const { isDateVar } = this.state;

    this.props.changeHandler({
      target: {
        value: isDateVar ? moment(new Date()).format(getMomentFormat(this.props.item.type)) : '',
        name: "value"
      }
    });
    this.setState({ isDateVar: !isDateVar });
  }

  render() {
    const { columnsOptions, changeHandler, isFirst } = this.props;
    const { condition_type, column, operator, value, or, not, values, type,
      first_column, second_column } = this.props.item;
    const { isDateVar } = this.state;

    return <div className="form-segment">
      <div className="form-group__inline-wrapper">
        <div className="form-group form-group_width30">
          <label>Condition Type
            <select required name="condition_type"
              value={condition_type}
              onChange={changeHandler}
              className="form-control"
            >
              <option disabled value="" />
              {conditionTypeOptions.map(type =>
                <option key={type} value={type} disabled={isFirst && type === 'or_where'}>
                  {type}
                </option>)}
            </select>
          </label>
        </div>

        {condition_type && condition_type !== "where_column" && <div className="form-group form-group_width30">
          <label>Field
            <select required name="column"
              value={column}
              onChange={changeHandler}
              className="form-control"
            >
              <option disabled value="" />
              {columnsOptions.map(({ value, label }) =>
                <option key={value} value={value}>
                  {label}
                </option>)}
            </select>
          </label>
        </div>}

        {['where', 'or_where', 'where_column'].includes(condition_type) &&
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
          </div>}

        {['where_between', 'where_in', 'where_column'].includes(condition_type) && <>
          {!isFirst && <div className="form-group form-group_checkbox form-group_width15">
            <label className="label_checkbox">
              <input type="checkbox" name="or"
                className="form-check-input"
                checked={or}
                onChange={changeHandler}
              /> Or
            </label>
          </div>}

          {condition_type !== 'where_column' && <div className="form-group form-group_checkbox form-group_width15">
            <label className="label_checkbox">
              <input type="checkbox" name="not"
                className="form-check-input"
                checked={not}
                onChange={changeHandler}
              /> Not
            </label>
          </div>}
        </>}

        {condition_type === "where_date" && <div className="form-group form-group_width30">
          <label>Type
            <select id="type" required name="type"
              value={type}
              onChange={changeHandler}
              className="form-control"
            >
              <option disabled value="" />
              {dateTypesOptions.map(({ value, label }) =>
                <option key={value} value={value}>{label}</option>)}
            </select>
          </label>
        </div>}
      </div>

      {['where', 'or_where'].includes(condition_type) &&
        <div className="form-group">
          <label>Value
            <input type="text" required name="value"
              value={value}
              onChange={changeHandler}
              className="form-control" />
          </label>
        </div>}

      {['where_between'].includes(condition_type) &&
        <div className="form-group__inline-wrapper">
          <div className="form-group form-group_width47">
            <label>Value 1
              <input type="text" required name="value1"
                value={values[0] || ''}
                onChange={changeHandler}
                className="form-control" />
            </label>
          </div>

          <div className="form-group form-group_width47">
            <label>Value 2
              <input type="text" required name="value2"
                value={values[1] || ''}
                onChange={changeHandler}
                className="form-control" />
            </label>
          </div>
        </div>}

      {condition_type === "where_in" && <>
        <div className="form-group">
          <label>Values
            <textarea required name="values"
              value={values.join(", ")}
              onChange={changeHandler}
              className="form-control" />
          </label>
        </div>
        <p>Comma Separated</p>
      </>}

      {condition_type === "where_date" && <div className="row">
        <div className="form-group col-6">
          <label>Operator
              <select required name="operator"
              value={operator}
              onChange={changeHandler}
              className="form-control"
            >
              <option value="" disabled />
              <option value="=">Equals</option>
              <option value="!=">Not Equals</option>
              <option value=">">&gt;</option>
              <option value=">=">&gt;=</option>
              <option value="<">&lt;</option>
              <option value="<=">&lt;=</option>
            </select>
          </label>
        </div>

        <div className={`form-group col-6 ${["day", "month"].includes(type) ? "hide-blocks" : ""}`}>
          <label className="w-auto mb-0">Value</label>
          <label className="label_checkbox float-right w-auto">
            <input type="checkbox"
              className="form-check-input"
              checked={isDateVar}
              onChange={this.dateValueFormatChange}
            /> Set Variable
            </label>
          {isDateVar ?
            <input type="text" required name="value"
              value={value}
              onChange={changeHandler}
              className="form-control"
            /> :
            <DatePicker selected={moment(value, getMomentFormat(type))._d}
              showTimeSelect={["datetime", "time"].includes(type)}
              showYearPicker={type === "year"}
              showTimeSelectOnly={type === "time"}
              showMonthYearPicker={type === "month"}
              dateFormat={getDatePickerFormat(type)}
              className="form-control"
              onChange={value => changeHandler({
                target: {
                  value: moment(value).format(getMomentFormat(type)),
                  name: "value"
                }
              })}
            />}
        </div>
      </div>}

      {condition_type === "where_column" && <div className="form-group__inline-wrapper">
        <div className="form-group form-group_width47">
          <label>First Field
            <select required name="first_column"

              value={first_column}
              onChange={changeHandler}
              className="form-control"
            >
              <option disabled value="" />
              {columnsOptions.map(({ value, label }) =>
                <option key={value} value={value}>
                  {label}
                </option>)}
            </select>
          </label>
        </div>

        <div className="form-group form-group_width47">
          <label>Second Field
            <select required name="second_column"
              value={second_column}
              onChange={changeHandler}
              className="form-control"
            >
              <option disabled value="" />
              {columnsOptions.map(({ value, label }) =>
                <option key={value} value={value}>
                  {label}
                </option>)}
            </select>
          </label>
        </div>
      </div>}
    </div>
  }
}

export default ConditionComponent;