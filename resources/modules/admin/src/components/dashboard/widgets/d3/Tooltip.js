import { PureComponent } from "react";
// import { Component } from "react";

/**
 * Tooltip для Line и Scatter
 */
class Tooltip extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      enablebar: props.datum.enable,
      enable: props.enable,
      point: props.datum.point,
      data: props.datum.point.data,
      settings: props?.settings,
      keyIsDate: props?.keyIsDate
    };

    this.containerSettings = this.containerSettings.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (!_.isEqual(prevProps.datum.point, this.props.datum.point)) {
      this.setState(s => ({
        ...s,
        point: this.props.datum.point,
        data: this.props.datum.point.data
      }));
    }
    if (!_.isEqual(prevProps.settings, this.props.settings)) {
      this.setState(s => ({
        ...s,
        settings: this.props?.settings
      }));
    }
    if (!_.isEqual(prevProps.enable, this.props.enable)) {
      this.setState(s => ({
        ...s,
        settenableings: this.props?.enable
      }));
    }
  }

  containerSettings() {
    const settings = this.state?.settings || {};

    const result = {
      padding: `${settings?.padding?.top || 5}px ${settings?.padding?.right ||
        5}px ${settings?.padding?.bottom || 5}px ${settings?.padding?.left ||
        5}px`,
      borderStyle: `${settings?.borderStyle || "solid"}`,
      borderRadius: `${settings?.borderRadius || "4px"}`,
      borderColor: `${settings?.borderColor || "black"}`,
      borderWidth: `${settings?.borderWidth || "1px"}`,
      backgroundColor: `${settings?.backgroundColor || "red"}`,
      color: "white",
      width: "fit-content",
      flexDirection: "column-reverse"
    };
    return result;
  }

  render() {
    const { xFormatted, yFormatted } = this.state.data;
    return (
      <div 
        className={`${this.props.widgetID} altrp-dashboard__tooltip--font altrp-dashboard__tooltip--label-background altrp-dashboard__tooltip--width altrp-dashboard__tooltip--label-background-shadow altrp-dashboard__tooltip--border-type altrp-dashboard__tooltip--border-width altrp-dashboard__tooltip--border-color col-12`}
        style={{ padding: "5px 9px" }}
      >
        <div
          style={{
            background: "white",
            color: "inherit",
            fontSize: "{{SIZE}}px",
            borderRadius: "2px",
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 1px 2px",
            padding: "5px 9px"
          }}
        >
          <div
            style={{
              whiteSpace: "pre",
              display: "flex",
              alignItems: "center"
            }}
          >
            <span
              style={{
                display: "block",
                width: "12px",
                height: "12px",
                background: this.state.point.color,
                marginRight: "7px"
              }}
            ></span>
            <span>
              {xFormatted}: <strong>{yFormatted}</strong>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Tooltip;
