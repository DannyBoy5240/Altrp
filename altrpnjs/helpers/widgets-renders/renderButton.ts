import parseURLTemplate from "../parseURLTemplate"
import * as _ from 'lodash'
import getResponsiveSetting from "../getResponsiveSetting"
import getContent from "../getContent"
import renderAsset from "../renderAsset";

export default function renderButton(settings, device, context) {
  const { link_link = {}, advanced_tooltip: tooltip } = settings
  const background_image = getResponsiveSetting(
    settings,
    "background_image",
    device,
    {}
  )

  let classes = 'altrp-btn ' + (settings.position_css_classes || "")
  if (background_image?.url) {
    classes += " altrp-background-image_btn"
  }

  let buttonText = getContent(settings, context,"button_text", device)
  let buttonMediaRight = { ...settings.button_icon_right }
  let buttonMediaLeft = { ...settings.button_icon_left }
  let buttonMediaTop = { ...settings.button_icon_top }
  let buttonMediaBottom = { ...settings.button_icon_bottom }

  const showIcon = buttonMediaRight?.url || buttonMediaLeft?.url || buttonMediaTop?.url || buttonMediaBottom?.url

  let existingIconsString = ''

  if (showIcon) {
    if (buttonMediaRight?.url) {
      existingIconsString += 'r'
    }

    if (buttonMediaLeft?.url) {
      existingIconsString += 'l'
    }

    if (buttonMediaTop?.url) {
      existingIconsString += 't'
    }

    if (buttonMediaBottom?.url) {
      existingIconsString += 'b'
    }
  }

  existingIconsString = existingIconsString.split('').sort().join('')

  // @ts-ignore
  let buttonInner = buttonText || ""

  if (existingIconsString === 'r') {
    buttonInner = (
      `<div class="btn-container-row">
        <span></span>
    ${buttonText}
    <span class="altrp-btn-icon-right ">
      ${renderAsset(buttonMediaRight)}
    </span>
    </div>`
  )
  }


  if (existingIconsString === 'l') {
    buttonInner = (
      `<div class="btn-container-row">
      <span class="altrp-btn-icon-left ">
        ${renderAsset(buttonMediaLeft)}
    </span>
    ${buttonText}
    <span></span>
    </div>`
  )
  }

  if (existingIconsString === 't') {
    buttonInner = (
      `<div class="btn-container-column">
      <span class="altrp-btn-icon-top ">
        ${renderAsset(buttonMediaTop)}
    </span>
    ${buttonText}
    <span></span>
    </div>`
  )
  }

  if (existingIconsString === 'b') {
    buttonInner = (
      `<div class="btn-container-column">
        <span></span>
    ${buttonText}
    <span class="altrp-btn-icon-bottom ">
      ${renderAsset(buttonMediaBottom)}
    </span>
    </div>`
  )
  }

  if (existingIconsString === 'blrt') {
    buttonInner = (
      `<div class="btn-container-column">
      <span class="altrp-btn-icon-top ">
        ${renderAsset(buttonMediaTop)}
    </span>
    <div class="btn-container-row">
    <span class="altrp-btn-icon-left ">
      ${renderAsset(buttonMediaLeft)}
    </span>
    {buttonText}
    <span class={"altrp-btn-icon-right "}>
      ${renderAsset(buttonMediaRight)}
    </span>
    </div>
    <span class="altrp-btn-icon-bottom ">
      ${renderAsset(buttonMediaBottom)}
    </span>
    </div>`
  )
  }

  if (existingIconsString === 'brt') {
    buttonInner = (
      `<div class="btn-container-column">
      <span class="altrp-btn-icon-top ">
        ${renderAsset(buttonMediaTop)}
    </span>
    <div class="btn-container-row">
      <span></span>
    ${buttonText}
    <span class="altrp-btn-icon-right ">
      ${renderAsset(buttonMediaRight)}
    </span>
    </div>
    <span class="altrp-btn-icon-bottom ">
      ${renderAsset(buttonMediaBottom)}
    </span>
    </div>`
  )
  }

  if (existingIconsString === 'blt') {
    buttonInner = (
      `<div class="btn-container-column">
      <span class="altrp-btn-icon-top ">
        ${renderAsset(buttonMediaTop)}
    </span>
    <div class="btn-container-row">
    <span class="altrp-btn-icon-left ">
      ${renderAsset(buttonMediaLeft)}
    </span>
    ${buttonText}
    <span></span>
    </div>
    <span class="altrp-btn-icon-bottom ">
      ${renderAsset(buttonMediaBottom)}
    </span>
    </div>`
  )
  }

  if (existingIconsString === 'lrt') {
    buttonInner = (
      `<div class="btn-container-column">
      <span class="altrp-btn-icon-top ">
        ${renderAsset(buttonMediaTop)}
    </span>
    <div class="btn-container-row">
    <span class="altrp-btn-icon-left ">
      ${renderAsset(buttonMediaLeft)}
    </span>
    ${buttonText}
    <span class="altrp-btn-icon-right ">
      ${renderAsset(buttonMediaRight)}
    </span>
    </div>
    <span></span>
    </div>`
  )
  }

  if (existingIconsString === 'blr') {
    buttonInner = (
      `<div class="btn-container-column">
        <span></span>
        <div class="btn-container-row">
    <span class="altrp-btn-icon-left ">
      ${renderAsset(buttonMediaLeft)}
    </span>
    ${buttonText}
    <span class="altrp-btn-icon-right ">
      ${renderAsset(buttonMediaRight)}
    </span>
    </div>
    <span class="altrp-btn-icon-bottom ">
      ${renderAsset(buttonMediaBottom)}
    </span>
    </div>`
  )
  }

  if (existingIconsString === 'rt') {
    buttonInner = (
      `<div class="btn-container-column">
      <span class="altrp-btn-icon-top ">
        ${renderAsset(buttonMediaTop)}
    </span>
    <div class="btn-container-row">
      <span></span>
    ${buttonText}
    <span class=$"altrp-btn-icon-right ">
      ${renderAsset(buttonMediaRight)}
    </span>
    </div>
    <span></span>
    </div>`
  )
  }

  if (existingIconsString === 'lt') {
    buttonInner = (
      `<div class="btn-container-column">
      <span class={"altrp-btn-icon-top "}>
        ${renderAsset(buttonMediaTop)}
    </span>
    <div class="btn-container-row">
    <span class="altrp-btn-icon-left ">
      ${renderAsset(buttonMediaLeft)}
    </span>
    ${buttonText}
    <span></span>
    </div>
    <span></span>
    </div>`
  )
  }

  if (existingIconsString === 'bt') {
    buttonInner = (
      `<div class="btn-container-column">
      <span class="altrp-btn-icon-top ">
        ${renderAsset(buttonMediaTop)}
    </span>
    <div class="btn-container-row">
      <span></span>
    ${buttonText}
    <span></span>
    </div>
    <span class="altrp-btn-icon-bottom ">
      ${renderAsset(buttonMediaBottom)}
    </span>
    </div>`
  )
  }

  if (existingIconsString === 'br') {
    buttonInner = (
      `<div class="btn-container-column">
        <span></span>
        <div class="btn-container-row">
      <span></span>
    ${buttonText}
    <span class="altrp-btn-icon-right ">
      ${renderAsset(buttonMediaRight)}
    </span>
    </div>
    <span class="altrp-btn-icon-bottom ">
      ${renderAsset(buttonMediaBottom)}
    </span>
    </div>`
  )
  }

  if (existingIconsString === 'lr') {
    buttonInner = (
      `<div class="btn-container-column">
        <span></span>
        <div class="btn-container-row">
    <span class="altrp-btn-icon-left ">
      ${renderAsset(buttonMediaLeft)}
    </span>
    ${buttonText}
    <span class="altrp-btn-icon-right ">
      ${renderAsset(buttonMediaRight)}
    </span>
    </div>
    <span></span>
    </div>`
  )
  }

  if (existingIconsString === 'bl') {
    buttonInner = (
      `<div class="btn-container-column">
        <span></span>
        <div class="btn-container-row">
    <span class="altrp-btn-icon-left">
      ${renderAsset(buttonMediaLeft)}
    </span>
    ${buttonText}
    <span></span>
    </div>
    <span class="altrp-btn-icon-bottom ">
      ${renderAsset(buttonMediaBottom)}
    </span>
    </div>`
  )
  }



  let url = link_link?.url
    ? link_link?.url.replace(":id", context.id || "")
    : ""
  if (_.isObject(context)) {
    url = parseURLTemplate(link_link.url || "", context)
  }

  // @ts-ignore
  let button = `<button
  class="${classes}"
  id="${settings.position_css_id || ""}"
  title="${tooltip || ''}"
>
  ${buttonInner}
  </button>`

  let link:string = ''
  if (
    settings.link_link?.url &&
    !settings.link_link.toPrevPage
  ) {

      let target = _.get(settings, "link_link.openInNew")
        ? "blank"
        : ""
      link = (`<a
          href="${url}"
      class="${classes}"
      target="${target}"
      title="${tooltip || null}"
    >
      ${buttonInner}
      </a>`
    )

  }

  if (_.get(settings, "link_link.toPrevPage")) {
    link = (
      `<button
    class="${classes}"
    id="${settings.position_css_id || ""}"
    title="${tooltip || null}"
  >
    ${buttonInner}
    </button>`
  )
  }
  // @ts-ignore
  return `<div class="altrp-btn-wrapper">
    ${link || button || buttonMediaRight || buttonMediaLeft || buttonMediaTop || buttonMediaBottom}
  </div>`
}
