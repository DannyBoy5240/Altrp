import loadFontsManager from "./js/functions/load-fonts";

console.log('FIRST SCRIPT: ', performance.now());
import {Link} from 'react-router-dom';
window.Link = Link;
import './sass/front-style.scss';
import './js/libs/react-lodash';
import loadDepends from "./js/functions/load-depends";

window.sSr = false;

/**
 * Параллельно загружаем все необходимые модули
 */
// import (/* webpackChunkName: 'React_ReactDom_Lodash' */'./js/libs/react-lodash').then(module => {
//   console.log('LOAD React_ReactDom_Lodash: ', performance.now());

import(/* webpackChunkName: 'altrp' */'./js/libs/altrp').then(module => {
  import (/* webpackChunkName: 'ElementWrapper' */'./js/components/ElementWrapper').then(module => {
    window.ElementWrapper = module.default;
    console.log('LOAD ElementWrapper: ', performance.now());
    loadingCallback();
  });

  import (/* webpackChunkName: 'appStore' */'./js/store/store').then(module => {
    console.log('LOAD appStore: ', performance.now());
    loadingCallback();
    loadDepends()
  });
  import (/* webpackChunkName: 'elementDecorator' */'./js/decorators/front-element-component').then(module => {
    window.elementDecorator = module.default;
    console.log('LOAD elementDecorator: ', performance.now());
    loadingCallback();
  });
  if (process.env.NODE_ENV === 'production') {
    window.__hot = () => C => C;
    import (/* webpackChunkName: 'FrontApp' */'./FrontApp').then(module => {
      window.FrontApp = module.default;
      console.log('LOAD FrontApp: ', performance.now());
      loadingCallback();
    });

  } else {
    import(/* webpackChunkName: 'react-hot-loader' */'react-hot-loader').then(({hot}) => {
      window.__hot = hot;
      return import (/* webpackChunkName: 'FrontApp' */'./FrontApp')
    }).then(module => {
      window.FrontApp = module.default;
      console.log('LOAD FrontApp: ', performance.now());
      loadingCallback();
    });
  }
})


import (/* webpackChunkName: 'FormsManager' */'../../editor/src/js/classes/modules/FormsManager.js').then(module => {
  console.log('LOAD FormsManager: ', performance.now());
  loadingCallback();
});

/**
 * Рендерим главный компонент после загрузки основных модулей
 */
window.loadingCallback = function loadingCallback() {
  if (window.React
    && window.Component
    && window.ReactDOM
    && window.frontElementsFabric
    && window.frontElementsManager
    && window.frontElementsManager.componentsIsLoaded()
    && window.FrontApp
    && window.elementDecorator
    && window.ElementWrapper
    && window.formsManager
    && window.altrpHelpers
    && window._
    /**
     * Проверим подгрузку необходимых библиотек
     */
    && (window.altrpElementsLists && (libsToLoad.length === libsLoaded.length))
  ) {
    function renderAltrp() {
      ReactDOM.render(<FrontApp/>, document.getElementById('front-app'), function () {
        window.removeEventListener('touchstart', renderAltrp);
        window.removeEventListener('mouseover', renderAltrp);
        window.removeEventListener('mousemove', renderAltrp);
        window.removeEventListener('click', renderAltrp);
        window.removeEventListener('scroll', renderAltrp);
      });
    }

    if (window.ALTRP_LOAD_BY_USER) {
      window.addEventListener('touchstart', renderAltrp);
      window.addEventListener('mouseover', renderAltrp);
      window.addEventListener('mousemove', renderAltrp);
      window.addEventListener('click', renderAltrp);
      window.addEventListener('scroll', renderAltrp);
    } else {
      renderAltrp();
    }
  }
}

window.stylesModulePromise = new Promise(function (resolve) {
  window.stylesModuleResolve = resolve;
});

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
} else {
  console.log(
    '%cWelcome to Altrp Front App',
    'color: blue; font-size: 24px; font-weight: 900;'
  );
}

(async function () {

  import(/* webpackChunkName: 'IconsManager' */'../../editor/src/js/classes/modules/IconsManager').then(
    IconsManager => {
      window.iconsManager = new IconsManager.default();
    }
  );
  let _token = await fetch('/ajax/_token', {
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    if (res.ok === false) {
      return Promise.reject({res: res.text(), status: res.status});
    }
    return res.json();
  });
  if (_token.success) {
    window._token = _token._token;
  }
})();

/**
 * Регистрируем сервис-воркеры
 */

let filename = '/front-app.sw.js';

if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  navigator.serviceWorker.register(filename, {scope: '/'});
}

document.body.addEventListener('click', e =>{
  import(/* webpackChunkName: 'click-actions' */'./js/functions/actions/click-actions').then((module)=>{
    module?.default(e);
  })
})
