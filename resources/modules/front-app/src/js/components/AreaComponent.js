import React, { Component } from "react";
import FrontPopup from "./FrontPopup";
import { connect } from "react-redux";

class AreaComponent extends Component {
  constructor(props) {
    super(props);
    // console.log("AreaComponent: ", performance.now());
    props.area.component = this;
  }
  componentWillUnmount() {
    /**
     * Перенесем все секции для ленивой подгрузки в хранилище страниц (текущая стрнаца)
     */
    // if( _.isArray(window.lazySections)){
    //   if(window.pageStorage.hasOwnProperty(page_id) ){
    //     let page = window.pageStorage[page_id];
    //
    //     window.lazySections.forEach(section => {
    //       let area = page.areas.find(area => area.id === section.area_name);
    //       if(area){
    //         section.element.lazySection = true;
    //         area.template.data.children.push(section.element)
    //       }
    //     });
    //   }
    //   window.lazySections = null;
    // }

    if (window.pageUpdater) {
      window.pageUpdater.startUpdating();
    }
    window.stylesModule.removeStyleById(this.rootElement?.id);
  }

  render() {
    let classes = [`app-area`, `app-area_${this.props.id}`];
    /**
     * Если это попап
     */
    if (
      typeof this.props.area.getTemplates !== "undefined" &&
      this.props.area.getTemplates().length
    ) {
      if(window.SSR){
        return null
      }
      let popups = (
        <div className={classes.join(" ")}>
          {this.props.area.getTemplates().map(template => {
            return <FrontPopup key={template.id} template={template} />;
          })}
        </div>
      );
      return popups;
    }
    /**
     * Если шаблон привязанный к странице удалили, то ничего не отрисовываем
     */
    if (! this.props?.template?.data) {
      return <div className={classes.join(" ")} />;
    }
    if(this.props.id === 'footer'){
      this.props.template.data.lastElement = true;
    }
    let rootElement = this.rootElement
      ? this.rootElement
      : window.frontElementsFabric.parseData(
          this.props.template.data,
          null,
          this.props.page,
          this.props.models
        );
    this.rootElement = rootElement;
    window[`${this.props.id}_root_element`] = this.rootElement;
    if (this.props.scrollPosition.top > 0) {
      this.rootElement.children.forEach(section => {
        section.lazySection = false;
      });
    }
    let { children } = this.rootElement;
    children = children.filter(child => ! child.lazySection);

    if(this.props.area.isCustomArea()){
      classes = classes.concat(this.props.area.getAreaClasses())
    }

    return React.createElement('div', {
      className:classes.join(" "),
    }, React.createElement(this.rootElement.componentClass, {
      element: this.rootElement,
      children
    }));
  }
}

function mapStateToProps(state) {
  return {
    scrollPosition: state.scrollPosition
  };
}

export default connect(mapStateToProps)(AreaComponent);
