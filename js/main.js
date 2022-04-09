/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/_functions.js":
/*!******************************!*\
  !*** ./src/js/_functions.js ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/_vars.js":
/*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body
});

/***/ }),

/***/ "./src/js/_vendor.js":
/*!***************************!*\
  !*** ./src/js/_vendor.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/focus-visible.js */ "./src/js/vendor/focus-visible.js");
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendor_video_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor/video.js */ "./src/js/vendor/video.js");
/* harmony import */ var _vendor_video_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_video_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vendor_theme_switcher_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vendor/theme-switcher.js */ "./src/js/vendor/theme-switcher.js");
/* harmony import */ var _vendor_theme_switcher_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vendor_theme_switcher_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vendor_basket_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendor/basket.js */ "./src/js/vendor/basket.js");
/* harmony import */ var _vendor_basket_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vendor_basket_js__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "./src/js/vendor/basket.js":
/*!*********************************!*\
  !*** ./src/js/vendor/basket.js ***!
  \*********************************/
/***/ (() => {

var productsBtn = document.querySelectorAll('.product-card__btn');
var productsItemBtn = document.querySelector('.product-item__btn');
var cartProductsList = document.querySelector('.basket__list');
var cartOrderList = document.querySelector('.side-block__list');
var cart = document.querySelector('.cart');
var cartQuantity = cart.querySelector('.cart__quantity');
var orderModalOpenProd = document.querySelector('.order-modal__btn');
var orderModalList = document.querySelector('.order-modal__list');
var fullPrice = document.querySelector('.fullprice');
var itemPrice = document.querySelectorAll('.item-price');
var price = 0;
var productArray = [];

var priceWithoutSpaces = function priceWithoutSpaces(str) {
  return str.replace(/\s/g, '');
};

var normalPrice = function normalPrice(str) {
  return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};

var printQuantity = function printQuantity() {
  var countQuantity = 0;

  if (productArray.length > 0) {
    productArray.forEach(function (el) {
      countQuantity += el.quantity;
    });
  }

  if (countQuantity > 0) {
    cartQuantity.textContent = countQuantity;
    cartQuantity.classList.remove('cart__quantity--empty');
  } else {
    cartQuantity.classList.add('cart__quantity--empty');
  }
};

function generateCartProduct(id, quantity, img, title, price) {
  return "\n  <li class=\"basket-item\" data-id=\"".concat(id, "\">\n    <div class=\"basket-item__img\">\n      <img src=\"").concat(img, "\" alt=\"\">\n    </div>\n    <a href=\"product.html\" class=\"basket-item__title\">").concat(title, "</a>\n    <div class=\"basket-item__number\">\n      <button class=\"btn-reset basket-item__btn basket-item__btn--subtract\">-</button>\n      <input class=\"basket-item__value input-reset\" type=\"text\" name=\"name\" value=\"").concat(quantity, " \">\n      <button class=\"btn-reset basket-item__btn basket-item__btn--add\">+</button>\n    </div>\n    <div class=\"basket-item__price\"><span class=\"item-price\">").concat(normalPrice(price * quantity), "</span> \u20BD</div>\n    <button class=\"btn-reset basket-item__btn basket-item__btn--del\"></button>\n  </li>\n  ");
}

;

function generateOrderProduct(id, quantity, img, title, price) {
  return "\n  <li class=\"side-block__item side-item\" data-id=\"".concat(id, "\">\n    <div class=\"side-item__title\">").concat(title, " \u2014 x").concat(quantity, "</div>\n    <div class=\"side-item__info\">").concat(normalPrice(price * quantity), " \u20BD</div>\n  </li>\n  ");
}

;
productsBtn.forEach(function (el) {
  el.addEventListener('click', function (el) {
    var self = el.currentTarget;
    var parent = self.closest('.product-card');
    var id = parent.dataset.id;
    var img = parent.querySelector('.product-card__img img').getAttribute('src');
    var title = parent.querySelector('.product-card__title').textContent;
    var priceString = priceWithoutSpaces(parent.querySelector('.product-card__price span').textContent);
    var priceNum = priceWithoutSpaces(parent.querySelector('.product-card__price span').textContent);
    addProduct(id, img, title, priceString);
    parent.classList.add('notification--active');
    setTimeout(function () {
      parent.classList.remove('notification--active');
    }, 600);
    self.innerHTML = 'Добавить еще';
  });
});

if (productsItemBtn) {
  productsItemBtn.addEventListener('click', function (el) {
    var self = el.currentTarget;
    var parent = self.closest('.product-item');
    var id = parent.dataset.id;
    var img = parent.querySelector('.product-item__img img').getAttribute('src');
    var title = document.querySelector('.product__title').textContent;
    var priceString = priceWithoutSpaces(parent.querySelector('.product-item__price').textContent);
    var priceNum = priceWithoutSpaces(parent.querySelector('.product-item__price').textContent);
    addProduct(id, img, title, priceString);
    parent.classList.add('notification--active');
    setTimeout(function () {
      parent.classList.remove('notification--active');
    }, 600);
    self.innerHTML = 'Добавить еще';
  });
}

function addProduct(id, img, title, price) {
  var obj = {};
  obj.title = title;
  obj.price = price;
  obj.id = id;
  obj.img = img;
  obj.quantity = 1;

  if (productArray.find(function (item) {
    return item.id == id;
  })) {
    productArray.find(function (item) {
      return item.id === id;
    }).quantity += 1;
  } else {
    productArray.push(obj);
  }

  updateStorage();
  printQuantity();

  if (fullPrice) {
    updatePrice();
  }
}

var countSumm = function countSumm() {
  document.querySelectorAll('.cart-content__item').forEach(function (el) {
    price += parseInt(priceWithoutSpaces(el.querySelector('.cart-product__price').textContent));
  });
};

var initialState = function initialState() {
  if (localStorage.getItem('basket') !== null) {
    if (cartProductsList) {
      cartProductsList.innerHTML;
    }

    ;
    updateBasket();
    printQuantity();

    if (cartProductsList) {
      productArray.forEach(function (el) {
        updatePrice();

        if (el.quantity > 0) {
          cartProductsList.insertAdjacentHTML('afterbegin', generateCartProduct(el.id, el.quantity, el.img, el.title, el.price));
        }
      });
    }

    if (cartOrderList) {
      productArray.forEach(function (el) {
        updatePrice();

        if (el.quantity > 0) {
          cartOrderList.insertAdjacentHTML('afterbegin', generateOrderProduct(el.id, el.quantity, el.img, el.title, el.price));
          printFullPrice();
        }
      });
    }
  }
};

initialState();
var plusBtn = document.querySelectorAll('.basket-item__btn--add');
var minusBtn = document.querySelectorAll('.basket-item__btn--subtract');
var cartProduct = document.querySelectorAll('.basket-item');
var delBtn = document.querySelectorAll('.basket-item__btn--del');
fullPrice = document.querySelector('.fullprice');
itemPrice = document.querySelectorAll('.item-price');
plusBtn.forEach(function (el) {
  el.addEventListener('click', function (el) {
    var self = el.currentTarget;
    var parent = self.closest('.basket-item');
    var id = parent.dataset.id;
    value = parent.querySelector('.basket-item__value');
    plusBasketValue(id);
    updateBasketValue(id, value);
    updateStorage();
    printQuantity();
    updatePrice();
  });
});
minusBtn.forEach(function (el) {
  el.addEventListener('click', function (el) {
    var self = el.currentTarget;
    var parent = self.closest('.basket-item');
    var id = parent.dataset.id;
    value = parent.querySelector('.basket-item__value');
    minusBasketValue(id);
    updateBasketValue(id, value);
    updateStorage();
    printQuantity();
    updatePrice();
  });
});
delBtn.forEach(function (el) {
  el.addEventListener('click', function (el) {
    var self = el.currentTarget;
    var parent = self.closest('.basket-item');
    var id = parent.dataset.id;
    deleteBasketProduct(id);
    updateStorage();
    printQuantity();
    updatePrice();
  });
});

function plusBasketValue(id) {
  productArray.find(function (item) {
    return item.id === id;
  }).quantity += 1;
}

function minusBasketValue(id) {
  quantity = productArray.find(function (item) {
    return item.id === id;
  }).quantity;

  if (quantity > 1) {
    productArray.find(function (item) {
      return item.id === id;
    }).quantity -= 1;
  } else if (quantity === 1) {
    deleteBasketProduct(id);
  }
}

function updateBasketValue(id, value) {
  value.setAttribute("value", productArray.find(function (item) {
    return item.id === id;
  }).quantity);
}

function deleteBasketProduct(id) {
  productArray.find(function (item) {
    return item.id === id;
  }).quantity = 0;
  cartProduct.forEach(function (el) {
    if (el.getAttribute('data-id') === id) {
      el.remove();
    }
  });
}

;

function updateStorage() {
  if (productArray.length) {
    localStorage.setItem('basket', JSON.stringify(productArray));
  } else {
    localStorage.removeItem('basket');
  }
}

;

function updateBasket() {
  productArray = readBasket();
}

;

function updatePrice() {
  result = 0;
  productArray.forEach(function (el) {
    result += Number(el.price) * Number(el.quantity);
  });
  price = result;
  printItemPrice();
  printFullPrice();
}

function printFullPrice() {
  if (price) {
    fullPrice.textContent = "\u0418\u0442\u043E\u0433\u043E: ".concat(normalPrice(price), " \u20BD");
  } else if (document.querySelector('.basket__wrapper')) {
    document.querySelector('.basket__wrapper').textContent = "";
    document.querySelector('.basket__wrapper').insertAdjacentHTML('afterbegin', printBasketEmpty());
  }
}

;

function printItemPrice() {
  itemPrice.forEach(function (el) {
    var parent = el.closest('.basket-item');
    var id = parent.dataset.id;

    if (parent.getAttribute('data-id') === id) {
      var itemQuantity = productArray.find(function (item) {
        return item.id === id;
      }).quantity;
      var _itemPrice = productArray.find(function (item) {
        return item.id === id;
      }).price;
      el.textContent = normalPrice(itemQuantity * _itemPrice);
    }
  });
}

function printBasketEmpty() {
  return "\n  <div class=\"basket-empty\">\n  <h2 class=\"basket-empty__title\">\u041A\u043E\u0440\u0437\u0438\u043D\u0430 \u043F\u0443\u0441\u0442\u0430</h2>\n  <div class=\"basket-empty__message\">\u0414\u043B\u044F \u0437\u0430\u043A\u0430\u0437\u0430 \u0434\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0442\u043E\u0432\u0430\u0440\u044B \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443</div>\n  <a href=\"#catalog-section\" class=\"btn btn-reset basket-empty__btn\">\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u0442\u043E\u0432\u0430\u0440\u0430\u043C</a>\n  </div>\n  ";
}

function readBasket() {
  var basketJSON = localStorage.getItem("basket");

  if (basketJSON === null) {
    return undefined;
  }

  try {
    return JSON.parse(basketJSON);
  } catch (e) {
    localStorage.removeItem("basket");
    return undefined;
  }
}

/***/ }),

/***/ "./src/js/vendor/focus-visible.js":
/*!****************************************!*\
  !*** ./src/js/vendor/focus-visible.js ***!
  \****************************************/
/***/ (() => {

function applyFocusVisiblePolyfill(scope) {
  var hadKeyboardEvent = true;
  var hadFocusVisibleRecently = false;
  var hadFocusVisibleRecentlyTimeout = null;
  var inputTypesAllowlist = {
    text: true,
    search: true,
    url: true,
    tel: true,
    email: true,
    password: true,
    number: true,
    date: true,
    month: true,
    week: true,
    time: true,
    datetime: true,
    'datetime-local': true
  };

  function isValidFocusTarget(el) {
    if (el && el !== document && el.nodeName !== 'HTML' && el.nodeName !== 'BODY' && 'classList' in el && 'contains' in el.classList) {
      return true;
    }

    return false;
  }

  function focusTriggersKeyboardModality(el) {
    var type = el.type;
    var tagName = el.tagName;

    if (tagName === 'INPUT' && inputTypesAllowlist[type] && !el.readOnly) {
      return true;
    }

    if (tagName === 'TEXTAREA' && !el.readOnly) {
      return true;
    }

    if (el.isContentEditable) {
      return true;
    }

    return false;
  }

  function addFocusVisibleClass(el) {
    if (el.classList.contains('focus-visible')) {
      return;
    }

    el.classList.add('focus-visible');
    el.setAttribute('data-focus-visible-added', '');
  }

  function removeFocusVisibleClass(el) {
    if (!el.hasAttribute('data-focus-visible-added')) {
      return;
    }

    el.classList.remove('focus-visible');
    el.removeAttribute('data-focus-visible-added');
  }

  function onKeyDown(e) {
    if (e.metaKey || e.altKey || e.ctrlKey) {
      return;
    }

    if (isValidFocusTarget(scope.activeElement)) {
      addFocusVisibleClass(scope.activeElement);
    }

    hadKeyboardEvent = true;
  }

  function onPointerDown(e) {
    hadKeyboardEvent = false;
  }

  function onFocus(e) {
    if (!isValidFocusTarget(e.target)) {
      return;
    }

    if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
      addFocusVisibleClass(e.target);
    }
  }

  function onBlur(e) {
    if (!isValidFocusTarget(e.target)) {
      return;
    }

    if (e.target.classList.contains('focus-visible') || e.target.hasAttribute('data-focus-visible-added')) {
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
        hadFocusVisibleRecently = false;
      }, 100);
      removeFocusVisibleClass(e.target);
    }
  }

  function onVisibilityChange(e) {
    if (document.visibilityState === 'hidden') {
      if (hadFocusVisibleRecently) {
        hadKeyboardEvent = true;
      }

      addInitialPointerMoveListeners();
    }
  }

  function addInitialPointerMoveListeners() {
    document.addEventListener('mousemove', onInitialPointerMove);
    document.addEventListener('mousedown', onInitialPointerMove);
    document.addEventListener('mouseup', onInitialPointerMove);
    document.addEventListener('pointermove', onInitialPointerMove);
    document.addEventListener('pointerdown', onInitialPointerMove);
    document.addEventListener('pointerup', onInitialPointerMove);
    document.addEventListener('touchmove', onInitialPointerMove);
    document.addEventListener('touchstart', onInitialPointerMove);
    document.addEventListener('touchend', onInitialPointerMove);
  }

  function removeInitialPointerMoveListeners() {
    document.removeEventListener('mousemove', onInitialPointerMove);
    document.removeEventListener('mousedown', onInitialPointerMove);
    document.removeEventListener('mouseup', onInitialPointerMove);
    document.removeEventListener('pointermove', onInitialPointerMove);
    document.removeEventListener('pointerdown', onInitialPointerMove);
    document.removeEventListener('pointerup', onInitialPointerMove);
    document.removeEventListener('touchmove', onInitialPointerMove);
    document.removeEventListener('touchstart', onInitialPointerMove);
    document.removeEventListener('touchend', onInitialPointerMove);
  }

  function onInitialPointerMove(e) {
    if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {
      return;
    }

    hadKeyboardEvent = false;
    removeInitialPointerMoveListeners();
  }

  document.addEventListener('keydown', onKeyDown, true);
  document.addEventListener('mousedown', onPointerDown, true);
  document.addEventListener('pointerdown', onPointerDown, true);
  document.addEventListener('touchstart', onPointerDown, true);
  document.addEventListener('visibilitychange', onVisibilityChange, true);
  addInitialPointerMoveListeners();
  scope.addEventListener('focus', onFocus, true);
  scope.addEventListener('blur', onBlur, true);

  if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {
    scope.host.setAttribute('data-js-focus-visible', '');
  } else if (scope.nodeType === Node.DOCUMENT_NODE) {
    document.documentElement.classList.add('js-focus-visible');
    document.documentElement.setAttribute('data-js-focus-visible', '');
  }
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill;
  var event;

  try {
    event = new CustomEvent('focus-visible-polyfill-ready');
  } catch (error) {
    event = document.createEvent('CustomEvent');
    event.initCustomEvent('focus-visible-polyfill-ready', false, false, {});
  }

  window.dispatchEvent(event);
}

if (typeof document !== 'undefined') {
  applyFocusVisiblePolyfill(document);
}

/***/ }),

/***/ "./src/js/vendor/theme-switcher.js":
/*!*****************************************!*\
  !*** ./src/js/vendor/theme-switcher.js ***!
  \*****************************************/
/***/ (() => {

var activeTheme = localStorage.getItem('theme');
var body = document.querySelector('body');

if (activeTheme === null || activeTheme === 'light') {
  if (body.classList.contains('dark')) {
    applyTheme('light');
  }
} else if (activeTheme === 'dark') {
  if (!body.classList.contains('dark')) {
    applyTheme('dark');
  }
}

document.getElementById('theme-light').onclick = function themeLight() {
  applyTheme('light');
};

document.getElementById('theme-dark').onclick = function themeDark() {
  applyTheme('dark');
};

function applyTheme(themeName) {
  if (themeName === 'dark') {
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  }
}

/***/ }),

/***/ "./src/js/vendor/video.js":
/*!********************************!*\
  !*** ./src/js/vendor/video.js ***!
  \********************************/
/***/ (() => {

function findVideos() {
  var videos = document.querySelectorAll('.video');

  for (var i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  var link = video.querySelector('.video__link');
  var media = video.querySelector('.video__media');
  var button = video.querySelector('.video__button');
  var id = parseMediaURL(media);
  video.addEventListener('click', function () {
    var iframe = createIframe(id);
    link.remove();
    button.remove();
    video.appendChild(iframe);
  });
  link.removeAttribute('href');
  video.classList.add('video--enabled');
}

function parseMediaURL(media) {
  var regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
  var url = media.src;
  var match = url.match(regexp);
  return match[1];
}

function createIframe(id) {
  var iframe = document.createElement('iframe');
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('video__media');
  return iframe;
}

function generateURL(id) {
  var query = '?rel=0&showinfo=0&autoplay=1';
  return 'https://www.youtube.com/embed/' + id + query;
}

findVideos();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vendor */ "./src/js/_vendor.js");
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_vars */ "./src/js/_vars.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_functions */ "./src/js/_functions.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_functions__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components__WEBPACK_IMPORTED_MODULE_3__);




})();

/******/ })()
;
//# sourceMappingURL=main.js.map