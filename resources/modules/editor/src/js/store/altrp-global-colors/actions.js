export const SET_GLOBAL_COLORS = "SET_GLOBAL_COLORS";
export const EDIT_GLOBAL_COLOR = "EDIT_GLOBAL_COLOR";
export const ADD_GLOBAL_COLOR = "ADD_GLOBAL_COLOR";
export const SET_GLOBAL_EFFECTS = "SET_GLOBAL_EFFECTS";
export const ADD_GLOBAL_EFFECT = "ADD_GLOBAL_EFFECT";
export const EDIT_GLOBAL_EFFECT = "EDIT_GLOBAL_EFFECT";
export const DELETE_GLOBAL_EFFECT = "DELETE_GLOBAL_EFFECT";
export const SET_GLOBAL_FONTS = "SET_GLOBAL_FONTS";
export const ADD_GLOBAL_FONT = "ADD_GLOBAL_FONT";
export const EDIT_GLOBAL_FONT = "EDIT_GLOBAL_FONT";
export const DELETE_GLOBAL_FONT = "DELETE_GLOBAL_FONT";

export function setGlobalColors(colors) {
  return {
    type: SET_GLOBAL_COLORS,
    colors
  };
}
export function editGlobalColor(color) {
  return {
    type: EDIT_GLOBAL_COLOR,
    color
  };
}

export function addGlobalColor(colors) {
  return {
    type: ADD_GLOBAL_COLOR,
    colors
  };
}

export function setGlobalEffects(effects) {
  return {
    type: SET_GLOBAL_EFFECTS,
    effects
  };
}

export function addGlobalEffect(effect) {
  return {
    type: ADD_GLOBAL_EFFECT,
    effect
  };
}

export function editGlobalEffect(effect) {
  return {
    type: EDIT_GLOBAL_EFFECT,
    effect
  };
}
export function deleteGlobalEffect(effect) {
  return {
    type: DELETE_GLOBAL_EFFECT,
    effect
  };
}

export function setGlobalFonts(fonts) {
  return {
    type: SET_GLOBAL_FONTS,
    fonts
  };
}

export function addGlobalFont(font) {
  return {
    type: ADD_GLOBAL_FONT,
    font
  };
}

export function editGlobalFont(font) {
  return {
    type: EDIT_GLOBAL_FONT,
    font
  };
}
export function deleteGlobalFont(font) {
  return {
    type: DELETE_GLOBAL_FONT,
    font
  };
}
