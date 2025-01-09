/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 813:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 315:
/***/ ((module) => {

module.exports = eval("require")("node-telegram-bot-api");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
const TelegramBot = __nccwpck_require__(315);
const core = __nccwpck_require__(813);

const token = core.getInput("telegram_token");
const chatID = core.getInput("telegram_id_user");

const bot = new TelegramBot(token, { polling: true });

try {
  const message = `Workflow ejecutado correctamente tras el último commit. Saludos ${core.getInput(
    "user_name"
  )}`;

  bot.sendMessage(chatID, message);
  core.setOutput("msg", "Mensaje enviado correctamente");
} catch (e) {
  core.setFailed(e.message);
}

module.exports = __webpack_exports__;
/******/ })()
;