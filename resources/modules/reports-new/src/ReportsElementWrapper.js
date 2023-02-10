import React, { Component } from "react";
import { connect } from "react-redux";
import appStore from "../../front-app/src/js/store/store";
import {
  altrpCompare,
  conditionsChecker
} from "../../front-app/src/js/helpers";
import { addElement } from "../../front-app/src/js/store/elements-storage/actions";

class ReportsElementWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elementDisplay: !this.props.element.getSettings("default_hidden")
    };
    this.elementWrapperRef = React.createRef();
    appStore.dispatch(addElement(this));
  }

  /**
   * Отлавливаем ошибки
   * @param error
   * @param errorInfo
   */
  componentDidCatch(error, errorInfo) {
    this.setState(state => ({
      ...state,
      error: error,
      errorInfo: errorInfo
    }));
  }

  /**
   * Подписываемся на обновление store редакса
   */
  updateStore = () => {
    if (this.state.currentModel !== appStore.getState().currentModel) {
      this.setState(state => ({
        ...state,
        currentModel: appStore.getState().currentModel
      }));
    }
    /**
     * Обновляем пользователя
     */
    if (this.state.currentUser !== appStore.getState().currentUser) {
      this.setState(state => ({
        ...state,
        currentModel: appStore.getState().currentUser
      }));
    }

    /**
     * Обновляем currentDataStorage
     */
    if (
      this.state.currentDataStorage !== appStore.getState().currentDataStorage
    ) {
      this.setState(state => ({
        ...state,
        currentDataStorage: appStore.getState().currentDataStorage
      }));
    }
  };

  /**
   * Вернет HTMLElement, в котором записаны css стили текущего компонента
   * @return {null | HTMLElement}
   */
  getStylesHTMLElement() {
    if (!_.get(window, "stylesModule.stylesContainer.current")) {
      return null;
    }

    return (
      window.stylesModule.stylesContainer.current.getElementsByClassName(
        `altrp-styles${this.props.element.getId()}`
      )[0] || null
    );
  }

  /**
   * Нужно ли обновить отображение обертки элементов
   * @param {{}} prevProps
   * @param {{}} prevState
   */
  componentDidUpdate(prevProps, prevState) {
    this.checkElementDisplay();
  }

  /**
   * Проверка видимости элемента
   * @param {{}} prevProps
   * @param {{}} prevState
   */
  checkElementDisplay(prevProps, prevState) {
    /**
     * @member {FrontElement} element
     */
    const { element } = this.props;
    if (!element.getSettings("conditional_other")) {
      return;
    }
    let conditions = element.getSettings("conditions", []);
    conditions = conditions.map(c => {
      const {
        conditional_model_field: modelField,
        conditional_other_operator: operator,
        conditional_other_condition_value: value
      } = c;
      return {
        modelField,
        operator,
        value
      };
    });
    let elementDisplay = conditionsChecker(
      conditions,
      element.getSettings("conditional_other_display") === "AND",
      this.props.element.getCurrentModel(),
      true
    );

    if (this.state.elementDisplay === elementDisplay) {
      return;
    }

    this.setState({
      elementDisplay
    });
  }

  /**
   * Переключает видимость элемента
   */
  toggleElementDisplay() {
    this.setState(state => ({
      ...state,
      elementDisplay: !state.elementDisplay
    }));
  }
  /**
   * Метод для проверки видимости поля формы
   * @return {boolean}
   */
  inputIsDisplay() {
    const { formsStore } = this.state;
    const formId = this.props.element.getSettings("form_id", "");
    const logic = this.props.element.getSettings(
      "form_condition_display_on",
      "AND"
    );
    const formConditions = this.props.element.getSettings(
      "form_conditions",
      []
    );
    let display = true;
    formConditions.forEach(c => {
      if (logic === "AND") {
        display *= altrpCompare(
          _.get(formsStore, `${formId}.${c.field_id}`),
          c.value,
          c.operator
        );
      } else {
        display += altrpCompare(
          _.get(formsStore, `${formId}.${c.field_id}`),
          c.value,
          c.operator
        );
      }
    });
    return display;
  }

  render() {
    const {
      hide_on_wide_screen,
      hide_on_desktop,
      hide_on_laptop,
      hide_on_tablet,
      hide_on_big_phone,
      hide_on_small_phone,
      hide_on_trigger,
      isFixed
    } = this.props.element.settings;
    let classes = `altrp-element altrp-element${this.props.element.getId()} altrp-element_${this.props.element.getType()}`;
    classes += this.props.element.getPrefixClasses() + " ";
    if (this.props.element.getType() === "widget") {
      classes += ` altrp-widget_${this.props.element.getName()}`;
    }
    if (hide_on_wide_screen) {
      classes += " hide_on_wide_screen";
    }
    if (hide_on_desktop) {
      classes += " hide_on_desktop";
    }
    if (hide_on_laptop) {
      classes += " hide_on_laptop";
    }
    if (hide_on_tablet) {
      classes += " hide_on_tablet";
    }
    if (hide_on_big_phone) {
      classes += " hide_on_big_phone";
    }
    if (hide_on_small_phone) {
      classes += " hide_on_small_phone";
    }
    if (isFixed) {
      classes += " fixed-section";
    }
    if (this.state.errorInfo) {
      return (
        <div className="altrp-error">
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    const styles = {};
    if (!this.state.elementDisplay) {
      styles.display = "none";
    }
    const CSSId = this.props.element.getSettings("advanced_element_id", "");
    return hide_on_trigger &&
      this.props.hideTriggers.includes(hide_on_trigger) ? null : (
      <div
        className={classes}
        ref={this.elementWrapperRef}
        style={styles}
        id={CSSId}
      >
        {React.createElement(this.props.component, {
          ElementWrapper: this.props.ElementWrapper,
          element: this.props.element,
          children: this.props.element.getChildren(),
          match: this.props.match,
          currentModel: this.props.currentModel,
          currentUser: this.props.currentUser,
          currentDataStorage: this.props.currentDataStorage,
          altrpresponses: this.props.altrpresponses,
          formsStore: this.props.formsStore,
          elementDisplay: this.state.elementDisplay,
          appStore
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    hideTriggers: state.hideTriggers,
    altrpresponses: state.altrpresponses,
    formsStore: state.formsStore,
    currentDataStorage: state.currentDataStorage,
    currentModel: state.currentModel,
    currentUser: state.currentUser,
    altrpMeta: state.altrpMeta,
    altrpPageState: state.altrpPageState
  };
}

export default connect(mapStateToProps)(ReportsElementWrapper);
