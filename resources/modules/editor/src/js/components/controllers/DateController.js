import { controllerMapStateToProps } from "../../decorators/controller";
import React, { Component } from "react";
import { connect } from "react-redux";
import DynamicIcon from "../../../svgs/dynamic.svg";
import controllerDecorate from "../../decorators/controller";
import ResponsiveDdMenu from "../ResponsiveDdMenu";
import moment from "moment";

class DateController extends Component {
  constructor(props) {
    super(props);
    controllerDecorate(this);
    this.changeValue = this.changeValue.bind(this);
    let value = this.getSettings(this.props.controlId);
    if (value === null && this.props.default) {
      value = this.props.default;
    }
    value = value || "";
    this.state = {
      value,
      show: true
    };
  }
  /**
   * Потеря фокуса обновляет элемент
   * @param e
   */
  onBlur = e => {
    this._changeValue(moment(e.target.value).format("YYYY-MM-DD"));
  };
  /**
   * Изменение больше не обновляет элемент
   * @param e
   */
  changeValue(e) {
    this._changeValue(moment(e.target.value).format("YYYY-MM-DD"));
  }
  getDefaultValue() {
    return moment(new Date()).format("YYYY-MM-DD");
  }
  render() {
    if (this.state.show === false) {
      return "";
    }
    // let value = this.getSettings(this.props.controlId) || this.getDefaultValue(); todo: удалить если будет работать
    let value = this.state.value || this.getDefaultValue();
    return (
      <div className="controller-container controller-container_date">
        <div className="controller-container__label">
          {this.props.label}
          <ResponsiveDdMenu />
        </div>
        <div className="control-group">
          <input
            className="control-field"
            onBlur={this.onBlur}
            onChange={this.changeValue}
            value={value}
            type="date"
          />
        </div>
      </div>
    );
  }
}

export default connect(controllerMapStateToProps)(DateController);
