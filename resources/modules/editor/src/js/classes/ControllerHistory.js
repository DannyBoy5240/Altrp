import AltrpModel from "./AltrpModel";
import { undoHistoryStore, redoHistoryStore } from "../store/history-store/actions";
import { getTemplateDataStorage } from "../helpers";

class ControllerHistory extends AltrpModel {

  undo() {
    let current = window.parent.appStore.getState().historyStore.current;
    let history = window.parent.appStore.getState().historyStore.history;
    if(current >= 0) {
      let restoreElement = history[current];

      switch(restoreElement.type) {
        case 'ADD':
          this.restoreAdd(restoreElement.data.element);
          break;
        case 'DELETE':
          this.restoreDelete(restoreElement.data.element, restoreElement.data.parent, restoreElement.data.index);
          break;
        case 'EDIT':
          this.restoreEdit(restoreElement.data.element, restoreElement.data.settingName, restoreElement.data.oldValue); 
          break;
        case 'REVISION': 
          this.restoreRevision(restoreElement.data.old);
      }
      window.parent.appStore.dispatch(undoHistoryStore(1));
    }
  }

  redo() {
    let current = window.parent.appStore.getState().historyStore.current;
    let history = window.parent.appStore.getState().historyStore.history;
    if(history.length - 1 > current) {
      let restoreElement = history[current + 1];
      switch(restoreElement.type) {
        case 'ADD':
          this.restoreDelete(restoreElement.data.element, restoreElement.data.parent, restoreElement.data.index);
          break;
        case 'DELETE':
          this.restoreAdd(restoreElement.data.element);
          break;
        case 'EDIT':
          this.restoreEdit(restoreElement.data.element, restoreElement.data.settingName, restoreElement.data.newValue); 
          break;
        case 'REVISION': 
          this.restoreRevision(restoreElement.data.new);  
      }
      window.parent.appStore.dispatch(redoHistoryStore(1));
    }
  }

  restoreDelete(element, parent, index) {
    parent.restoreChild(index, element);
  }

  restoreEdit(element, settingName, value) {
    element.setSettingValue(settingName, value, false);
  }

  restoreAdd(element) {
    element.parent.deleteChild(element, false);
  }

  restoreRevision(rootElement) {
    getTemplateDataStorage().replaceAll(rootElement);
  }
}

if(! window.parent.controllerHistory){
  window.controllerHistory = new ControllerHistory;
}

export default window.parent.controllerHistory;