import getResponsiveSetting from "../getResponsiveSetting";

export default function renderSection(settings, device,  columns_count, link_class, children_content){
  let layout_html_tag = getResponsiveSetting(settings, 'layout_html_tag', device) || 'div'
  return `<${layout_html_tag} class="altrp-section altrp-section_columns-${columns_count} ${link_class}">${children_content}</${layout_html_tag}>`
}
