/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

var app = new Vue({
  el: "#app",
  data: {
    nav_bar: {
      img: "./dist/img/logo.svg",
      link: ["Solutions", "Pricing", "Blog", "Sign in"],
      button: {
        img: "./dist/img/google-logo.svg",
        text: "Sign Up"
      }
    },
    section1: {
      text: {
        h1: "Understand, recognize and develop your people",
        h4: "Teambit helps teams create a high performing culture with regular feedback",
        button1: {
          img: "./dist/img/google-logo.svg",
          text: "Sign up with Google"
        },
        button2: {
          img: "./dist/img/slack-logo.svg",
          text: "Sign up with Slack"
        },
        p: "or use your email address <i class='fas fa-arrow-right'></i>"
      },
      jumbotron: "./dist/img/illustration-main.jpg"
    },
    section2_1: {
      text: "Traditional people processes lead to disengagement and turnover.",
      images3: {
        1: {
          img: "./dist/img/hardcore.png",
          text: "They hardcore, formal and disconetted"
        },
        2: {
          img: "./dist/img/nofeedback.png",
          text: "They don't encourage regular feedback"
        },
        3: {
          img: "./dist/img/notsafe.png",
          text: "They don't make it safe to speak up"
        }
      },
      image1: {
        img: "./dist/img/before.png"
      }
    },
    section2_2: {
      text: "It doesn't to be like that. Teambit is a modern soution that teammates love",
      images3: {
        1: {
          img: "./dist/img/lightweight.png",
          text: "It's lightwigth fun and interconnnetted"
        },
        2: {
          img: "./dist/img/feedbacksuggestions.png",
          text: "If encourages regular feedback with contextual requests"
        },
        3: {
          img: "./dist/img/safe.png",
          text: "It create a safe environment to dialog"
        }
      },
      image1: {
        img: "./dist/img/after.png",
        h4: "Here is how it works"
      }
    },
    section3_1: {
      img: "./dist/img/employee-feedback.jpg",
      text: {
        h4: "Feedback to help teammates improve",
        p: "Empower your teammates to know in real time what they are doing well and what they need to improve.",
        link: "<a href='#'></i>Learn More <i class='fas fa-arrow-right'</a>",
        img: "./dist/img/communication.jpg"
      }
    },
    section3_2: {
      img: "./dist/img/employee-survey.jpg",
      text: {
        h4: "Survey to help the team be better",
        p: "Empower your teammates to know in real time what they are doing well and what they need to improve.",
        link: "<a href='#'></i>Learn More <i class='fas fa-arrow-right'</a>",
        img: "./dist/img/insights.jpg"
      }
    },
    section3_3: {
      img: "./dist/img/performance-review.jpg",
      text: {
        h4: "Reviews to help teammates get a fair evaluation",
        p: "Empower your teammates to know in real time what they are doing well and what they need to improve.",
        link: "<a href='#'></i>Learn More <i class='fas fa-arrow-right'</a>",
        img: "./dist/img/review.jpg"
      }
    },
    section3_4: {
      img: "./dist/img/employee-survey.jpg",
      text: {
        h4: "Praise to help teammates feel valued",
        p: "Empower your teammates to know in real time what they are doing well and what they need to improve.",
        link: "<a href='#'></i>Learn More <i class='fas fa-arrow-right'</a>",
        img: "./dist/img/recognition.jpg"
      }
    },
    section4: {
      h2: "See Tambit for yourself. Get started in seconds",
      mission: {
        p: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id rerum architecto esse fugiat consequatur voluptatum vero, perferendis veritatis dolore, pariatur eligendi quidem saepe nostrum possimus et neque. Quia inventore consequuntur pariatur ex doloribus dignissimos repellat. Accusamus, consequatur? Ratione iste dolor doloribus quam aspernatur dignissimos consequatur iure, exercitationem dolores veritatis, itaque placeat, dolorem nihil harum sint libero quisquam corporis officiis cumque illo autem cupiditate! Libero impedit alias minima perspiciatis dolore sint porro doloremque. Non quasi, numquam vero perferendis accusamus explicabo nemo iusto nesciunt. Nulla, voluptatem. Provident, veritatis. Ipsum pariatur repudiandae cum quam quisquam. Quisquam, nostrum. Libero omnis ex veritatis nisi vel."
      },
      img: ["./dist/img/alex.png", "./dist/img/bohdan.png"]
    }
  }
});

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {}
/************************************************************************/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./src/app.js"],
/******/ 			["./src/style.scss"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunknode_sass_teambit"] = self["webpackChunknode_sass_teambit"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	__webpack_require__.x();
/******/ })()
;