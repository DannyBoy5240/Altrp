import {
  SET_CUSTOMIZER_SETTINGS,
  SET_UPDATED_NODE
} from "./actions";

export function customizerSettingsDataReducer(state, action) {
  state = state || [];

  switch (action.type) {
    case SET_UPDATED_NODE:
      const index = state.findIndex(node => node.id == action.value.id);
      state[index] = action.value;
      state = _.cloneDeep(state)
      break;
    case SET_CUSTOMIZER_SETTINGS:
      state = action.data;
      break;
  }

  return state;
}
