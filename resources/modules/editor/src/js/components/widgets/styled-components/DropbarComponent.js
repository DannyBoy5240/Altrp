import {defaultStyled, sliderStyled, styledString} from "../../../../../../front-app/src/js/helpers/styles";



export default styled.div`
  ${({settings}) => {
  const styles = [
    "&.altrp-dropbar-btn-containter",
      ["width", "width_dropbar_options", "slider"],

      ["padding", "padding_dropbar_content_style", "dimensions"],
      ["background-color", "background_dropbar_content_style", "color"],
      ["border-style", "border_style_dropbar_content_style"],
      ["border-width", "border_width_dropbar_content_style", "dimensions"],
      ["border-color", "border_color_dropbar_content_style", "color"],
      ["border-radius", "border_radius_dropbar_content_style", "dimensions"],
      ["box-shadow", "box_shadow_dropbar_content_style", "shadow"],
    "}",

    "altrp-dropbar-btn-content",
      ["color", "text_color_dropbar_content_style", "color"],
      ["", "typographic_text_dropbar_content_style", "typographic"],
    "}",

    //state disabled
    "&.altrp-dropbar-btn-containter",
    ["width", "width_dropbar_options", "slider", ".state-disabled"],

    ["padding", "padding_dropbar_content_style", "dimensions", ".state-disabled"],
    ["background-color", "background_dropbar_content_style", "color", ".state-disabled"],
    ["border-style", "border_style_dropbar_content_style", "", ".state-disabled"],
    ["border-width", "border_width_dropbar_content_style", "dimensions", ".state-disabled"],
    ["border-color", "border_color_dropbar_content_style", "color", ".state-disabled"],
    ["border-radius", "border_radius_dropbar_content_style", "dimensions", ".state-disabled"],
    ["box-shadow", "box_shadow_dropbar_content_style", "shadow", ".state-disabled"],
    "}",

    "altrp-dropbar-btn-content",
    ["color", "text_color_dropbar_content_style", "color", ".state-disabled"],
    ["", "typographic_text_dropbar_content_style", "typographic", ".state-disabled"],
    "}",
    //state active
    "&.altrp-dropbar-btn-containter",
    ["width", "width_dropbar_options", "slider", ".active"],

    ["padding", "padding_dropbar_content_style", "dimensions", ".active"],
    ["background-color", "background_dropbar_content_style", "color", ".active"],
    ["border-style", "border_style_dropbar_content_style", "", ".active"],
    ["border-width", "border_width_dropbar_content_style", "dimensions", ".active"],
    ["border-color", "border_color_dropbar_content_style", "color", ".active"],
    ["border-radius", "border_radius_dropbar_content_style", "dimensions", ".active"],
    ["box-shadow", "box_shadow_dropbar_content_style", "shadow", ".active"],
    "}",

    "altrp-dropbar-btn-content",
    ["color", "text_color_dropbar_content_style", "color", ".active"],
    ["", "typographic_text_dropbar_content_style", "typographic", ".active"],
    "}",

    "&:hover.altrp-dropbar-btn-containter",
      ["background-color", "background_dropbar_content_style", "color", ":hover"],
      ["border-style", "border_style_dropbar_content_style", "", ":hover"],
      ["border-width", "border_width_dropbar_content_style", "dimensions", ":hover"],
      ["border-color", "border_color_dropbar_content_style", "color", ":hover"],
      ["border-radius", "border_radius_dropbar_content_style", "dimensions", ":hover"],
      ["box-shadow", "box_shadow_dropbar_content_style", "shadow", ":hover"],
    "}",

    "&:hover .altrp-dropbar-btn-content",
      ["color", "text_color_dropbar_content_style", "color", ":hover"],
      ["", "typographic_text_dropbar_content_style", "typographic", ":hover"],
    "}"
  ];
  return styledString(styles, settings)
}}
`
