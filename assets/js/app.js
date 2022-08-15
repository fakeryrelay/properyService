/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("const $burger = document.getElementById('burger')\r\nconst $mobileNav = document.getElementById('mobileNav')\r\nconst $body = document.body\r\n\r\n$burger.addEventListener('click', event => {\r\n  if ($burger.classList.contains('active')) {\r\n    hideNav()\r\n  } else {\r\n    showNav()\r\n  }\r\n})\r\n\r\naddEventListener('scroll', event => {\r\n  if ($burger.classList.contains('active')) {\r\n    hideNav()\r\n  }\r\n})\r\n\r\nfunction showNav() {\r\n  $burger.classList.add('active')\r\n  $mobileNav.classList.add('active')\r\n}\r\n\r\nfunction hideNav() {\r\n  $burger.classList.remove('active')\r\n  $mobileNav.classList.remove('active')\r\n}\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/form-modal.js":
/*!*************************************!*\
  !*** ./src/assets/js/form-modal.js ***!
  \*************************************/
/***/ (function() {

eval("const $formButton = document.querySelectorAll('[data-modal]')\r\nconst $formModal = document. querySelector('.form__modal')\r\nconst $modalInner = document.querySelector('modal')\r\nconst $body = document.body\r\nconst $sendBtn = document.getElementById('sendBtn')\r\n\r\n$formButton.forEach(item => {\r\n  item.addEventListener('click' ,event => {\r\n    let modalContent = $formModal.querySelector('.modal__content')\r\n\r\n    modalContent.addEventListener('click', event => {\r\n      event.stopPropagation()\r\n    })\r\n    \r\n    showFormModal()\r\n  })\r\n})\r\n\r\n$formModal.addEventListener('click', event => {\r\n  hideFormModal()\r\n})\r\n\r\n$sendBtn.addEventListener('click', event => {\r\n  hideFormModal()\r\n})\r\n\r\nfunction showFormModal() {\r\n  let modalContent = $formModal.querySelector('.modal__content')\r\n\r\n  setTimeout(() => {\r\n    modalContent.style.transform = 'translate(-50%, -50%)'\r\n    modalContent.style.opacity = '1'\r\n  }, 1)\r\n\r\n  $formModal.classList.add('active')\r\n  $body.classList.add('no-scroll')\r\n}\r\n\r\nfunction hideFormModal() {\r\n  let modalContent = $formModal.querySelector('.modal__content')\r\n  \r\n  modalContent.style.transform = 'translate(-50%, -60%)'\r\n  modalContent.style.opacity = '0'\r\n  \r\n  setTimeout(() => {\r\n    $formModal.classList.remove('active')\r\n    $body.classList.remove('no-scroll')\r\n  }, 200)\r\n}\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/form-modal.js?");

/***/ }),

/***/ "./src/assets/js/image-modal.js":
/*!**************************************!*\
  !*** ./src/assets/js/image-modal.js ***!
  \**************************************/
/***/ (function() {

eval("const $imageItems = document.querySelectorAll('.gallery__img')\r\nconst $imageModal = document.querySelector('.image__modal')\r\nconst $modalInner = document.querySelector('modal')\r\nconst $modalImg = document.querySelector('.modal__img')\r\nconst $body = document.body\r\n\r\n$imageItems.forEach(item => {\r\n  item.addEventListener('click', event => {\r\n    let $this = event.currentTarget\r\n    let link = $this.getAttribute('src')\r\n    let modalContent = $imageModal.querySelector('.modal__content')\r\n\r\n    modalContent.addEventListener('click', event => {\r\n      event.stopPropagation()\r\n    })\r\n\r\n    showImageModal(link)\r\n  })\r\n})\r\n\r\n$imageModal.addEventListener('click', event => {\r\n  hideImageModal()\r\n})\r\n\r\nfunction showImageModal(link) {\r\n  let modalContent = $imageModal.querySelector('.modal__content')\r\n\r\n  setTimeout(() => {\r\n    modalContent.style.transform = 'translate(-50%, -50%)'\r\n    modalContent.style.opacity = '1'\r\n  }, 1)\r\n  \r\n  $modalImg.setAttribute('src', `${link}`)\r\n  $imageModal.classList.add('active')\r\n  $body.classList.add('no-scroll')\r\n\r\n}\r\n\r\nfunction hideImageModal() {\r\n  let modalContent = $imageModal.querySelector('.modal__content')\r\n  \r\n  modalContent.style.transform = 'translate(-50%, -60%)'\r\n  modalContent.style.opacity = '0'\r\n  \r\n  setTimeout(() => {\r\n    $imageModal.classList.remove('active')\r\n    $body.classList.remove('no-scroll')\r\n  }, 200)\r\n}\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/image-modal.js?");

/***/ }),

/***/ "./src/assets/js/video-modal.js":
/*!**************************************!*\
  !*** ./src/assets/js/video-modal.js ***!
  \**************************************/
/***/ (function() {

eval("const $page = document.querySelector('.page')\r\nconst $preview = document.querySelectorAll('.project-preview__video-inner')\r\nconst $videoModal = document.querySelector('.video__modal')\r\nconst $body = document.body\r\n\r\n$preview.forEach(item => {\r\n  item.addEventListener('click', event => {\r\n    let modalContent = $videoModal.querySelector('.modal__content')\r\n  \r\n    modalContent.addEventListener('click', event => {\r\n      event.stopPropagation()\r\n    })\r\n    \r\n    showVideoModal()\r\n  })\r\n})\r\n\r\n\r\n$videoModal.addEventListener('click', event => {\r\n  hideVideoModal()\r\n})\r\n\r\nfunction showVideoModal() {\r\n  let modalContent = $videoModal.querySelector('.modal__content')\r\n\r\n  setTimeout(() => {\r\n    modalContent.style.transform = 'translate(-50%, -50%)'\r\n    modalContent.style.opacity = '1'\r\n  }, 1)\r\n\r\n  $videoModal.classList.add('active')\r\n  $body.classList.add('no-scroll')\r\n}\r\n\r\nfunction hideVideoModal() {\r\n  let modalContent = $videoModal.querySelector('.modal__content')\r\n  \r\n  modalContent.style.transform = 'translate(-50%, -60%)'\r\n  modalContent.style.opacity = '0'\r\n  setTimeout(() => {\r\n    $videoModal.classList.remove('active')\r\n    $body.classList.remove('no-scroll')\r\n  })\r\n  \r\n}\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/video-modal.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	__webpack_modules__["./src/assets/js/image-modal.js"]();
/******/ 	__webpack_modules__["./src/assets/js/video-modal.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/form-modal.js"]();
/******/ 	
/******/ })()
;