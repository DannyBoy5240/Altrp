import '../../front-app/src/js/libs/react-lodash'
import '../../front-app/src/js/libs/ckeditor'
import '../../front-app/src/js/libs/altrp'
import '../../front-app/src/js/libs/moment'
import React, { Component } from "react";
import ReactDOM from "react-dom";
import RobotsEditor from "./RobotsEditor";
import store from "./js/store/store";
import _ from "lodash";
import IconsManager from "../../editor/src/js/classes/modules/IconsManager";
import "./sass/styles.scss";
import {Provider} from 'react-redux';


window.React = React;
window.ReactDOM = ReactDOM;
window.Component = Component;

window._ = _;
window.iconsManager = new IconsManager();

window.robotStore = store;

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
} else {
  console.log(
    "%cWelcome to Altrp Robots",
    "color: red; font-size: 24px; font-weight: 900;"
  );
}

let robotsTarget = document.getElementById("robots-editor");

if (robotsTarget) window.ReactDOM.render(<Provider store={store}><RobotsEditor /></Provider>, robotsTarget);
