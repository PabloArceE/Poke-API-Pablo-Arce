/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://poke-api/./src/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _js_http_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/http-provider */ \"./src/js/http-provider.js\");\n\r\n\r\n\r\n(0,_js_http_provider__WEBPACK_IMPORTED_MODULE_1__.init)();\n\n//# sourceURL=webpack://poke-api/./src/index.js?");

/***/ }),

/***/ "./src/js/http-provider.js":
/*!*********************************!*\
  !*** ./src/js/http-provider.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init\": () => (/* binding */ init)\n/* harmony export */ });\n\r\nconst init = () => {\r\n    fetchPokemon( pokemonId());\r\n    eventos();\r\n}\r\n\r\nconst pokemonId = () => {\r\n    const getRandomInt = (min, max) => {\r\n    return Math.floor(Math.random() * (max - min)) + min;\r\n  }\r\n\r\n    const randomId = getRandomInt(1, 151)\r\n\r\n    return randomId\r\n}\r\n\r\nconst fetchPokemon = async(id) => {\r\n\r\n    try {\r\n        \r\n        const res  = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);\r\n        const data = await res.json();\r\n\r\n        console.log(data);\r\n\r\n        const obtenerTipo = (data) => {\r\n            \r\n            const tipos = []\r\n            \r\n            for(let tipo of data.types){\r\n                tipos.push(tipo.type.name);\r\n            }\r\n                        \r\n            return tipos;                \r\n        }\r\n\r\n        const obtenerHabilidades = (data) => {\r\n            \r\n            const habilidades = []\r\n            \r\n            for(let habilidad of data.abilities){\r\n                habilidades.push(habilidad.ability.name);\r\n            }\r\n                        \r\n            return habilidades;               \r\n        }\r\n\r\n        const obtenerMovimientos = (data) => {\r\n            \r\n            const movimientos = []\r\n            \r\n            for(let movimiento of data.moves){\r\n                movimientos.push(movimiento.move.name);\r\n            }\r\n                        \r\n            return movimientos;               \r\n        }  \r\n        \r\n        const descId = () =>{\r\n            const getRandomInt = (min, max) => {\r\n                return Math.floor(Math.random() * (max - min)) + min;\r\n              }\r\n            \r\n              return getRandomInt(1, 31);            \r\n        }\r\n\r\n        console.log(descId())\r\n\r\n        const num = descId();\r\n\r\n        const res1  = await fetch(`https://pokeapi.co/api/v2/characteristic/${num}/`);\r\n        const data1 = await res1.json();\r\n\r\n        console.log(`data1: ${data1.descriptions[5].description}`);\r\n\r\n        \r\n\r\n        let pokemon = {\r\n            id         : data.id,\r\n            foto       : data.sprites.other.dream_world.front_default,\r\n            nombre     : data.name,\r\n            tipo       : obtenerTipo(data),\r\n            peso       : data.weight,\r\n            habilidades: obtenerHabilidades(data),\r\n            descripcion: data1.descriptions[5].description,\r\n            movimientos: obtenerMovimientos(data)\r\n        }\r\n        \r\n\r\n        verPokemon(pokemon);\r\n\r\n    } catch (err) {\r\n        console.log(err);\r\n    }\r\n}\r\n\r\nconst main = document.querySelector('.main');\r\nlet imgPokemon, btnPokemon;\r\n\r\nconst verPokemon = (pokemon) => {\r\n\r\n    console.log(pokemon);\r\n\r\n    const html = `\r\n    \r\n        <div class=\"container\">\r\n            <img id= \"img-${pokemon.id}\" class=\"foto-pokemon btn d-grid gap-2 col-4 mx-auto\" src=\"${pokemon.foto}\" alt=\"Foto Pokemon\">               \r\n            \r\n            <div class=\"alert alert-primary\">\r\n                <ul>\r\n                    <li class=\"pokemon-nombre\">Nombre: ${pokemon.nombre}</li>\r\n                    <li class=\"pokemon-tipo\">Tipo: ${pokemon.tipo}</li>\r\n                    <li class=\"pokemon-peso\">Peso: ${pokemon.peso}</li>\r\n                    <li class=\"pokemon-habilidades\">Habilidades: ${pokemon.habilidades}</li>\r\n                </ul>\r\n            </div>    \r\n        </div>\r\n        \r\n        <div id=\"${pokemon.id}\"></div>\r\n    `;\r\n\r\n    const htmlInfo = `\r\n    <div class=\"alert alert-primary\">\r\n        <ul>\r\n            <li class=\"pokemon-descripcion\">Descripción: ${pokemon.descripcion}</li>\r\n            <li class=\"pokemon-movimientos\">Movimientos: ${pokemon.movimientos}</li>\r\n        </ul>\r\n    </div> \r\n    `\r\n\r\n    const divPokemon = document.createElement('div');\r\n    divPokemon.innerHTML = html;\r\n\r\n    main.append(divPokemon);\r\n\r\n    \r\n    \r\n    imgPokemon = document.getElementById(`img-${pokemon.id}`);\r\n    \r\n    imgPokemon.addEventListener('click', () => {\r\n        const divInfo = document.getElementById(`${pokemon.id}`);\r\n        divInfo.innerHTML = htmlInfo;\r\n       \r\n    })\r\n}\r\n\r\nconst eventos = () => {\r\n\r\n    btnPokemon = document.querySelector('.btn-outline-primary')\r\n    \r\n    btnPokemon.addEventListener('click', () =>{\r\n        fetchPokemon( pokemonId());\r\n    })\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://poke-api/./src/js/http-provider.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;