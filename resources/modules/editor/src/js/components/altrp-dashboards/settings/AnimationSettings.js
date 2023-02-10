import React, { Component } from "react";
import { connect } from "react-redux";
import {
  LINE,
  POINT,
  BAR
} from "../../../../../../admin/src/components/dashboard/widgetTypes";
import Checkbox from '@material-ui/core/Checkbox';
import Slider from '@material-ui/core/Slider';

const mapStateToProps = state => {
  return { editElement: _.cloneDeep(state.editElement) };
};

function mapDispatchToProps(dispatch) {
  return {
    editElementDispatch: data => dispatch(editElement(data))
  };
}

class AnimationSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editElement: props.editElement,
      animationMotionStiffness: 90,
      animationMotionDamping: 15,
      animationEnabled: true
    };
    this.setAnimationEnable = this.setAnimationEnable.bind(this);
  }

  setAnimationEnable(e) {
    this.props.setProperty(e.target.checked, "enableAnimation");
  }
  setProperty(value, property) {
    this.props.setProperty(value, property);
    this.setState(s => ({ ...s, [property]: value }));
  }

  render() {
    return (
      <>
        <div className="col">
          {(this.state.editElement?.settings?.type === LINE ||
            this.state.editElement?.settings?.type === POINT ||
            this.state.editElement?.settings?.type === BAR) && (
            <div className="mb-3">
              <div
                className={`${this.props.widgetID} altrp-dashboard__drawer--label-font-size`}
              >
                Включить анимацию
              </div>
              <Checkbox
              disableRipple={true}
              className={`${this.props.widgetID} altrp-dashboard__checkboxcolor`}
              defaultChecked={
                  this.props.editElement?.settings?.enableAnimation
                }
              checked={this.props.editElement?.settings?.enableAnimation}
              onChange={this.setAnimationEnable}
              />
            </div>
          )}
          {(this.state.editElement?.settings?.type === POINT ||
            this.state.editElement?.settings?.type === BAR) && (
            <>
              <div className="mb-3">
                <div
                  className={`${this.props.widgetID} altrp-dashboard__drawer--label-font-size`}
                >
                  Жесткость движения
                </div>
                <Slider
                  className={`${this.props.widgetID} altrp-dashboard__drawer--range-drawer-color`}
                  defaultValue={
                    this.state.editElement?.settings
                      ?.animationMotionStiffness ||
                    this.state.animationMotionStiffness
                  }
                  onChange={(e, newValue) =>
                    this.setProperty(Number(newValue), "animationMotionStiffness")
                  }
                  min={0}
                  max={90}
                  step={1}
                />
                (
                {this.state.editElement?.settings?.animationMotionStiffness ||
                  this.state.animationMotionStiffness}
                )
              </div>
              <div className="mb-3">
                <div
                  className={`${this.props.widgetID} altrp-dashboard__drawer--label-font-size`}
                >
                  Затухаение движения
                </div>
                <Slider
                  className={`${this.props.widgetID} altrp-dashboard__drawer--range-drawer-color`}
                  defaultValue={
                    this.state.editElement?.settings?.animationMotionDamping ||
                    this.state.animationMotionDamping
                  }
                  onChange={(e, newValue) =>
                    this.setProperty(Number(newValue), "animationMotionDamping")
                  }
                  min={0}
                  max={40}
                  step={1}
                />
                (
                {this.state.editElement?.settings?.animationMotionDamping ||
                  this.state.animationMotionDamping}
                )
              </div>
            </>
          )}
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimationSettings);
