import {getResponsiveSetting} from "../../../../../../front-app/src/js/helpers";
import {
  dimensionsControllerToStyles,
  gradientStyled,
  filtersControllerToStyles,
  simplePropertyStyled,
  colorPropertyStyled,
  sizeStyled,
  opacityStyled,
  borderWidthStyled,
  backgroundImageControllerToStyles,
} from "../../../../../../front-app/src/js/helpers/styles";

export default styled.div`
  && .altrp-image {

    ${props => {

      const { settings } = props;
      let styles = '';

      let objectFit, height, width, margin, padding, zIndex, opacity, borderType, filters;
      let borderWidth, borderColor, borderRadius, transitionDuration, animationDuration, backgroundColor, backgroundColorHover, gradient;

      //Получаем значения object-fit из контроллера, обрабатываем и добавляем в styles

      if (settings !== undefined) {
        objectFit = getResponsiveSetting(settings, 'image_fit_size');
      }

      if (objectFit) {
        styles += simplePropertyStyled(objectFit, 'object-fit');
      }

      //Получаем значения background-color из контроллера, обрабатываем и добавляем в styles

      if (settings !== undefined) {
        backgroundColor = getResponsiveSetting(settings, 'background_color');
      }

      if (backgroundColor) {
        styles += colorPropertyStyled(backgroundColor, 'background-color');
      }

      //Получаем значения gradient из контроллера, обрабатываем и добавляем в styles

      if (settings !== undefined) {
        gradient = getResponsiveSetting(settings, 'gradient');
      }

      if (gradient) {
        styles += gradientStyled(gradient);
      }

      //Получаем значения filters из контроллера, обрабатываем и добавляем в styles

      if (settings !== undefined) {
        filters = getResponsiveSetting(settings, 'image_style_text_shadow');
      }

      if (filters) {
        styles += filtersControllerToStyles(filters);
      }

      //Получаем значения height из контроллера, обрабатываем и добавляем в styles

      if (settings !== undefined) {
        height = getResponsiveSetting(settings, 'height_size');
      }

      if (height) {
        styles += sizeStyled(height, 'height');
      }

      //Получаем значения width из контроллера, обрабатываем и добавляем в styles

      if (settings !== undefined) {
        width = getResponsiveSetting(settings, 'width_size');
      }

      if (width) {
        styles += sizeStyled(width, 'width');
      }

      //Получаем значения margin из контроллера, обрабатываем и добавляем в styles
      //Свойство margin было убрано из Контроллера у виджета Image. Перенес сюда на всякий случай, так как были активные rules в Image.js

      if (settings !== undefined) {
        margin = getResponsiveSetting(settings, 'position_margin');
      }

      if (margin) {
        styles += dimensionsControllerToStyles(margin, 'margin');
      }

      //Получаем значения padding из контроллера, обрабатываем и добавляем в styles

      if (settings !== undefined) {
        padding = getResponsiveSetting(settings, 'position_padding');
      }

      if (padding) {
        styles += dimensionsControllerToStyles(padding);
      }

      //Получаем значения z-index из контроллера, обрабатываем и добавляем в styles

      if (settings !== undefined) {
        zIndex = getResponsiveSetting(settings, 'position_z_index');
      }

      if (zIndex) {
        styles += simplePropertyStyled(zIndex, 'z-index');
      }

      //Получаем значения opacity из контроллера, обрабатываем и добавляем в styles

      if (settings !== undefined) {
        opacity = getResponsiveSetting(settings, 'opacity_overlay');
      }

      if (opacity) {
        styles += opacityStyled(opacity);
      }

      //Получаем значения border-type из контроллера, обрабатываем и добавляем в styles

      if (settings !== undefined) {
        borderType = getResponsiveSetting(settings, 'border_type');
      }

      if (borderType) {
        styles += simplePropertyStyled(borderType, 'border-style');
      }

      //Получаем значения border-width из контроллера, обрабатываем и добавляем в styles

      if (settings !== undefined) {
        borderWidth = getResponsiveSetting(settings, 'border_width');
      }

      if (borderWidth) {
        styles += borderWidthStyled(borderWidth);
      }

      //Получаем значения border-color из контроллера, обрабатываем и добавляем в styles

      if (settings !== undefined) {
        borderColor = getResponsiveSetting(settings, 'border_color');
      }

      if (borderColor) {
        styles += colorPropertyStyled(borderColor, 'border-color');
      }

      //Получаем значения border-radius из контроллера, обрабатываем и добавляем в styles

      if (settings !== undefined) {
        borderRadius = getResponsiveSetting(settings, 'border_radius');
      }

      if (borderRadius) {
        styles += sizeStyled(borderRadius, 'border-radius');
      }

      //Получаем значения transition-duration в точных юнитах из контроллера, обрабатываем и добавляем в styles

      if (settings !== undefined) {
        transitionDuration = getResponsiveSetting(settings, 'creative_hover_controller');
      }

      if (transitionDuration) {
        styles += sizeStyled(transitionDuration, 'transition-duration');
      }

      //Получаем значения animation-duration в точных юнитах из контроллера, обрабатываем и добавляем в styles

      if (settings !== undefined) {
        animationDuration = getResponsiveSetting(settings, 'creative_hover_controller');
      }

      if (animationDuration) {
        styles += sizeStyled(animationDuration, 'animation-duration');
      }

      return styles;

    }
    }
  }

  && .altrp-image:hover {

    ${props => {

      const { settings } = props;
      let styles = '';

      let objectFit, height, width, margin, padding, zIndex, opacity, borderType, filters;
      let borderWidth, borderColor, borderRadius, transitionDuration, animationDuration, backgroundColor, backgroundColorHover, gradient;

      //Получаем значения object-fit из контроллера, обрабатываем и добавляем в styles

      if (settings !== undefined) {
        objectFit = getResponsiveSetting(settings, 'image_fit_size', ':hover');
      }

      if (objectFit) {
        styles += simplePropertyStyled(objectFit, 'object-fit');
      }

      //Получаем значения background-color из контроллера, обрабатываем и добавляем в styles

      if (settings !== undefined) {
        backgroundColor = getResponsiveSetting(settings, 'background_color', ':hover');
      }

      if (backgroundColor) {
        styles += colorPropertyStyled(backgroundColor, 'background-color');
      }

      //Получаем значения gradient из контроллера, обрабатываем и добавляем в styles

      if (settings !== undefined) {
        gradient = getResponsiveSetting(settings, 'gradient', ':hover');
      }

      if (gradient) {
        styles += gradientStyled(gradient);
      }

      //Получаем значения filters из контроллера, обрабатываем и добавляем в styles

      if (settings !== undefined) {
        filters = getResponsiveSetting(settings, 'image_style_text_shadow', ':hover');
      }

      if (filters) {
        styles += filtersControllerToStyles(filters);
      }

      //Получаем значения height из контроллера, обрабатываем и добавляем в styles

      if (settings !== undefined) {
        height = getResponsiveSetting(settings, 'height_size', ':hover');
      }

      if (height) {
        styles += sizeStyled(height, 'height');
      }

      //Получаем значения width из контроллера, обрабатываем и добавляем в styles

      if (settings !== undefined) {
        width = getResponsiveSetting(settings, 'width_size', ':hover');
      }

      if (width) {
        styles += sizeStyled(width, 'width');
      }

      //Получаем значения margin из контроллера, обрабатываем и добавляем в styles
      //Свойство margin было убрано из Контроллера у виджета Image. Перенес сюда на всякий случай, так как были активные rules в Image.js

      if (settings !== undefined) {
        margin = getResponsiveSetting(settings, 'position_margin', ':hover');
      }

      if (margin) {
        styles += dimensionsControllerToStyles(margin, 'margin');
      }

      //Получаем значения padding из контроллера, обрабатываем и добавляем в styles

      if (settings !== undefined) {
        padding = getResponsiveSetting(settings, 'position_padding', ':hover');
      }

      if (padding) {
        styles += dimensionsControllerToStyles(padding);
      }

      //Получаем значения z-index из контроллера, обрабатываем и добавляем в styles

      if (settings !== undefined) {
        zIndex = getResponsiveSetting(settings, 'position_z_index', ':hover');
      }

      if (zIndex) {
        styles += simplePropertyStyled(zIndex, 'z-index');
      }

      //Получаем значения opacity из контроллера, обрабатываем и добавляем в styles

      if (settings !== undefined) {
        opacity = getResponsiveSetting(settings, 'opacity_overlay', ':hover');
      }

      if (opacity) {
        styles += opacityStyled(opacity);
      }

      //Получаем значения border-type из контроллера, обрабатываем и добавляем в styles

      if (settings !== undefined) {
        borderType = getResponsiveSetting(settings, 'border_type', ':hover');
      }

      if (borderType) {
        styles += simplePropertyStyled(borderType, 'border-style');
      }

      //Получаем значения border-width из контроллера, обрабатываем и добавляем в styles

      if (settings !== undefined) {
        borderWidth = getResponsiveSetting(settings, 'border_width', ':hover');
      }

      if (borderWidth) {
        styles += borderWidthStyled(borderWidth);
      }

      //Получаем значения border-color из контроллера, обрабатываем и добавляем в styles

      if (settings !== undefined) {
        borderColor = getResponsiveSetting(settings, 'border_color', ':hover');
      }

      if (borderColor) {
        styles += colorPropertyStyled(borderColor, 'border-color');
      }

      //Получаем значения border-radius из контроллера, обрабатываем и добавляем в styles

      if (settings !== undefined) {
        borderRadius = getResponsiveSetting(settings, 'border_radius', ':hover');
      }

      if (borderRadius) {
        styles += sizeStyled(borderRadius, 'border-radius');
      }

      //Получаем значения transition-duration в точных юнитах из контроллера, обрабатываем и добавляем в styles

      if (settings !== undefined) {
        transitionDuration = getResponsiveSetting(settings, 'creative_hover_controller', ':hover');
      }

      if (transitionDuration) {
        styles += sizeStyled(transitionDuration, 'transition-duration');
      }

      //Получаем значения animation-duration в точных юнитах из контроллера, обрабатываем и добавляем в styles

      if (settings !== undefined) {
        animationDuration = getResponsiveSetting(settings, 'creative_hover_controller', ':hover');
      }

      if (animationDuration) {
        styles += sizeStyled(animationDuration, 'animation-duration');
      }

      return styles;

    }
    }
  }

  && .altrp-image-container {

    ${props => {

      const { settings } = props;
      let styles = '';

      let justifyContent;

      //Получаем значения justify-content из контроллера, обрабатываем и добавляем в styles
  console.log(settings);

      if (settings !== undefined) {
        justifyContent = getResponsiveSetting(settings, 'image_style_alignment');
        console.log(justifyContent);
      }

      if (justifyContent) {
        styles += simplePropertyStyled(justifyContent, 'justify-content');
      }

      return styles;

    }
    }
  }

  && .altrp-background-image {

    ${props => {

      const { settings } = props;
      let styles = '';

      let backgroundImage, backgroundPosition, backgroundAttachment, backgroundRepeat,backgroundSizeInUnit, backgroundSize;

      //Получаем значения background-image из контроллера, обрабатываем и добавляем в styles

      if (settings !== undefined) {
        backgroundImage = getResponsiveSetting(settings, 'background_image');
      }

      if (backgroundImage) {
        styles += backgroundImageControllerToStyles(backgroundImage);
      }

      //Получаем значения background-position из контроллера, обрабатываем и добавляем в styles

      if (settings !== undefined) {
        backgroundPosition = getResponsiveSetting(settings, 'background_position');
      }

      if (backgroundPosition) {
        styles += simplePropertyStyled(backgroundPosition, 'background-position');
      }

      //Получаем значения background-attachment из контроллера, обрабатываем и добавляем в styles

      if (settings !== undefined) {
        backgroundAttachment = getResponsiveSetting(settings, 'background_attachment');
      }

      if (backgroundAttachment) {
        styles += simplePropertyStyled(backgroundAttachment, 'background-attachment');
      }

      //Получаем значения background-repeat из контроллера, обрабатываем и добавляем в styles

      if (settings !== undefined) {
        backgroundRepeat = getResponsiveSetting(settings, 'background_repeat');
      }

      if (backgroundRepeat) {
        styles += simplePropertyStyled(backgroundRepeat, 'background-repeat');
      }

      //Получаем значения background-size в конкретных юнитах из контроллера, обрабатываем и добавляем в styles

      if (settings !== undefined) {
        backgroundSizeInUnit = getResponsiveSetting(settings, 'background_image_width');
      }

      if (backgroundSizeInUnit) {
        styles += sizeStyled(backgroundSizeInUnit, 'background-size');
      }

      //Получаем значения background-size из контроллера, обрабатываем и добавляем в styles

      if (settings !== undefined) {
        backgroundSize = getResponsiveSetting(settings, 'background_size');
      }

      if (backgroundSize) {
        styles += simplePropertyStyled(backgroundSize, 'background-size');
      }

      return styles;

    }
    }
  }

  && .altrp-background-image:hover {

    ${props => {

      const { settings } = props;
      let styles = '';

      let backgroundImage, backgroundPosition, backgroundAttachment, backgroundRepeat,backgroundSizeInUnit, backgroundSize;

      //Получаем значения background-image из контроллера, обрабатываем и добавляем в styles

      if (settings !== undefined) {
        backgroundImage = getResponsiveSetting(settings, 'background_image', ':hover');
      }

      if (backgroundImage) {
        styles += backgroundImageControllerToStyles(backgroundImage);
      }

      //Получаем значения background-position из контроллера, обрабатываем и добавляем в styles

      if (settings !== undefined) {
        backgroundPosition = getResponsiveSetting(settings, 'background_position', ':hover');
      }

      if (backgroundPosition) {
        styles += simplePropertyStyled(backgroundPosition, 'background-position');
      }

      //Получаем значения background-attachment из контроллера, обрабатываем и добавляем в styles

      if (settings !== undefined) {
        backgroundAttachment = getResponsiveSetting(settings, 'background_attachment', ':hover');
      }

      if (backgroundAttachment) {
        styles += simplePropertyStyled(backgroundAttachment, 'background-attachment');
      }

      //Получаем значения background-repeat из контроллера, обрабатываем и добавляем в styles

      if (settings !== undefined) {
        backgroundRepeat = getResponsiveSetting(settings, 'background_repeat', ':hover');
      }

      if (backgroundRepeat) {
        styles += simplePropertyStyled(backgroundRepeat, 'background-repeat');
      }

      //Получаем значения background-size в конкретных юнитах из контроллера, обрабатываем и добавляем в styles

      if (settings !== undefined) {
        backgroundSizeInUnit = getResponsiveSetting(settings, 'background_image_width', ':hover');
      }

      if (backgroundSizeInUnit) {
        styles += sizeStyled(backgroundSizeInUnit, 'background-size');
      }

      //Получаем значения background-size из контроллера, обрабатываем и добавляем в styles

      if (settings !== undefined) {
        backgroundSize = getResponsiveSetting(settings, 'background_size', ':hover');
      }

      if (backgroundSize) {
        styles += simplePropertyStyled(backgroundSize, 'background-size');
      }

      return styles;

    }
    }
  }

    ${props=>{

      const {settings} = props;
      let styles = '';
      const aspect_ratio_size = getResponsiveSetting(settings, 'aspect_ratio_size');

      let padding;

      if(Number(aspect_ratio_size) !== 0) {
        return 'padding:0;'
      }

      //Получаем значения padding из контроллера, обрабатываем и добавляем в styles

      if (settings !== undefined) {
        padding = getResponsiveSetting(settings, 'position_padding');
      }

      if(padding){
        styles +=dimensionsControllerToStyles(padding);
      }

      return styles;
    }
    }
`;

