/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Projects/Projects.style.ts":
/*!***********************************************!*\
  !*** ./components/Projects/Projects.style.ts ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProjectsContainer\": function() { return /* binding */ ProjectsContainer; },\n/* harmony export */   \"ProjectsGrid\": function() { return /* binding */ ProjectsGrid; },\n/* harmony export */   \"ProjectsHeader\": function() { return /* binding */ ProjectsHeader; },\n/* harmony export */   \"ProjectBox\": function() { return /* binding */ ProjectBox; },\n/* harmony export */   \"ProjectHeader\": function() { return /* binding */ ProjectHeader; },\n/* harmony export */   \"ProjectLinks\": function() { return /* binding */ ProjectLinks; },\n/* harmony export */   \"ProjectLink\": function() { return /* binding */ ProjectLink; },\n/* harmony export */   \"ProjectTopContainer\": function() { return /* binding */ ProjectTopContainer; },\n/* harmony export */   \"ProjectTitle\": function() { return /* binding */ ProjectTitle; },\n/* harmony export */   \"ProjectDescription\": function() { return /* binding */ ProjectDescription; }\n/* harmony export */ });\n/* harmony import */ var _styles_theme_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/theme.config */ \"./styles/theme.config.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar ProjectsContainer = (0,_styles_theme_config__WEBPACK_IMPORTED_MODULE_0__.styled)('div', {\n  display: 'flex',\n  margin: '100px 100px',\n  justifyContent: 'center',\n  flexDirection: 'column',\n  '@media only screen and (max-width: 600px)': {\n    margin: '100px 10px'\n  },\n  '@media only screen and (max-width: 414px)': {\n    alignItems: 'center'\n  }\n});\nvar ProjectsGrid = (0,_styles_theme_config__WEBPACK_IMPORTED_MODULE_0__.styled)('div', {\n  width: '95vw',\n  display: 'grid',\n  gap: '2rem',\n  gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 0fr))',\n  overflow: 'hidden',\n  '@media only screen and (max-width: 414px)': {\n    display: 'flex',\n    flexDirection: 'column',\n    alignItems: 'center',\n    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 0fr))'\n  },\n  '@media only screen and (max-width: 768px)': {\n    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 0fr))'\n  }\n});\nvar ProjectsHeader = (0,_styles_theme_config__WEBPACK_IMPORTED_MODULE_0__.styled)('h1', {\n  display: 'flex',\n  background: '$gradient',\n  width: 'fit-content',\n  WebkitBackgroundClip: 'text',\n  WebkitTextFillColor: 'transparent',\n  fontSize: '$5',\n  margin: '150px 0',\n  textAlign: 'center'\n});\nvar ProjectBox = (0,_styles_theme_config__WEBPACK_IMPORTED_MODULE_0__.styled)('div', {\n  display: 'flex',\n  userSelect: 'none',\n  flexDirection: 'column',\n  background: '#232222',\n  width: 350,\n  height: 300,\n  padding: 30,\n  color: '$main2',\n  fontFamily: '$mono',\n  justifyContent: 'space-between',\n  transition: '0.1s linear',\n  borderRadius: 5,\n  '&:hover': {\n    transform: 'translateY(-5px)'\n  },\n  '@media only screen and (max-width: 768px)': {\n    width: 300\n  },\n  '@media only screen and (max-width: 320px)': {\n    width: 280\n  }\n});\nvar ProjectHeader = (0,_styles_theme_config__WEBPACK_IMPORTED_MODULE_0__.styled)('div', {\n  display: 'flex',\n  justifyContent: 'space-between',\n  alignItems: 'center'\n});\nvar ProjectLinks = (0,_styles_theme_config__WEBPACK_IMPORTED_MODULE_0__.styled)('div', {\n  display: 'flex'\n});\nvar ProjectLink = (0,_styles_theme_config__WEBPACK_IMPORTED_MODULE_0__.styled)('a', {\n  marginLeft: 20,\n  color: '$white',\n  transition: '0.1s linear',\n  '&:hover': {\n    transform: 'scale(1.1, 1.1)'\n  }\n});\nvar ProjectTopContainer = (0,_styles_theme_config__WEBPACK_IMPORTED_MODULE_0__.styled)('div', {\n  display: 'flex',\n  flexDirection: 'column'\n});\nvar ProjectTitle = (0,_styles_theme_config__WEBPACK_IMPORTED_MODULE_0__.styled)('h3', {\n  fontFamily: '$primary',\n  fontSize: '$4',\n  margin: '10px 0',\n  color: '$white'\n});\nvar ProjectDescription = (0,_styles_theme_config__WEBPACK_IMPORTED_MODULE_0__.styled)('p', {\n  color: '$main2',\n  fontFamily: '$primary',\n  fontSize: '$2'\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0cy9Qcm9qZWN0cy5zdHlsZS50cz84NTkxIl0sIm5hbWVzIjpbIlByb2plY3RzQ29udGFpbmVyIiwic3R5bGVkIiwiZGlzcGxheSIsIm1hcmdpbiIsImp1c3RpZnlDb250ZW50IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJQcm9qZWN0c0dyaWQiLCJ3aWR0aCIsImdhcCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJvdmVyZmxvdyIsIlByb2plY3RzSGVhZGVyIiwiYmFja2dyb3VuZCIsIldlYmtpdEJhY2tncm91bmRDbGlwIiwiV2Via2l0VGV4dEZpbGxDb2xvciIsImZvbnRTaXplIiwidGV4dEFsaWduIiwiUHJvamVjdEJveCIsInVzZXJTZWxlY3QiLCJoZWlnaHQiLCJwYWRkaW5nIiwiY29sb3IiLCJmb250RmFtaWx5IiwidHJhbnNpdGlvbiIsImJvcmRlclJhZGl1cyIsInRyYW5zZm9ybSIsIlByb2plY3RIZWFkZXIiLCJQcm9qZWN0TGlua3MiLCJQcm9qZWN0TGluayIsIm1hcmdpbkxlZnQiLCJQcm9qZWN0VG9wQ29udGFpbmVyIiwiUHJvamVjdFRpdGxlIiwiUHJvamVjdERlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLGlCQUFpQixHQUFHQyw0REFBTSxDQUFDLEtBQUQsRUFBUTtBQUM3Q0MsU0FBTyxFQUFFLE1BRG9DO0FBRTdDQyxRQUFNLEVBQUUsYUFGcUM7QUFHN0NDLGdCQUFjLEVBQUUsUUFINkI7QUFJN0NDLGVBQWEsRUFBRSxRQUo4QjtBQUs3QywrQ0FBNkM7QUFDM0NGLFVBQU0sRUFBRTtBQURtQyxHQUxBO0FBUTdDLCtDQUE2QztBQUMzQ0csY0FBVSxFQUFFO0FBRCtCO0FBUkEsQ0FBUixDQUFoQztBQWFBLElBQU1DLFlBQVksR0FBR04sNERBQU0sQ0FBQyxLQUFELEVBQVE7QUFDeENPLE9BQUssRUFBRSxNQURpQztBQUV4Q04sU0FBTyxFQUFFLE1BRitCO0FBR3hDTyxLQUFHLEVBQUUsTUFIbUM7QUFJeENDLHFCQUFtQixFQUFFLHVDQUptQjtBQUt4Q0MsVUFBUSxFQUFFLFFBTDhCO0FBTXhDLCtDQUE2QztBQUMzQ1QsV0FBTyxFQUFFLE1BRGtDO0FBRTNDRyxpQkFBYSxFQUFFLFFBRjRCO0FBRzNDQyxjQUFVLEVBQUUsUUFIK0I7QUFJM0NJLHVCQUFtQixFQUFFO0FBSnNCLEdBTkw7QUFZeEMsK0NBQTZDO0FBQzNDQSx1QkFBbUIsRUFBRTtBQURzQjtBQVpMLENBQVIsQ0FBM0I7QUFpQkEsSUFBTUUsY0FBYyxHQUFHWCw0REFBTSxDQUFDLElBQUQsRUFBTztBQUN6Q0MsU0FBTyxFQUFFLE1BRGdDO0FBRXpDVyxZQUFVLEVBQUUsV0FGNkI7QUFHekNMLE9BQUssRUFBRSxhQUhrQztBQUl6Q00sc0JBQW9CLEVBQUUsTUFKbUI7QUFLekNDLHFCQUFtQixFQUFFLGFBTG9CO0FBTXpDQyxVQUFRLEVBQUUsSUFOK0I7QUFPekNiLFFBQU0sRUFBRSxTQVBpQztBQVF6Q2MsV0FBUyxFQUFFO0FBUjhCLENBQVAsQ0FBN0I7QUFXQSxJQUFNQyxVQUFVLEdBQUdqQiw0REFBTSxDQUFDLEtBQUQsRUFBUTtBQUN0Q0MsU0FBTyxFQUFFLE1BRDZCO0FBRXRDaUIsWUFBVSxFQUFFLE1BRjBCO0FBR3RDZCxlQUFhLEVBQUUsUUFIdUI7QUFJdENRLFlBQVUsRUFBRSxTQUowQjtBQUt0Q0wsT0FBSyxFQUFFLEdBTCtCO0FBTXRDWSxRQUFNLEVBQUUsR0FOOEI7QUFPdENDLFNBQU8sRUFBRSxFQVA2QjtBQVF0Q0MsT0FBSyxFQUFFLFFBUitCO0FBU3RDQyxZQUFVLEVBQUUsT0FUMEI7QUFVdENuQixnQkFBYyxFQUFFLGVBVnNCO0FBV3RDb0IsWUFBVSxFQUFFLGFBWDBCO0FBWXRDQyxjQUFZLEVBQUUsQ0Fad0I7QUFhdEMsYUFBVztBQUNUQyxhQUFTLEVBQUU7QUFERixHQWIyQjtBQWdCdEMsK0NBQTZDO0FBQzNDbEIsU0FBSyxFQUFFO0FBRG9DLEdBaEJQO0FBbUJ0QywrQ0FBNkM7QUFDM0NBLFNBQUssRUFBRTtBQURvQztBQW5CUCxDQUFSLENBQXpCO0FBd0JBLElBQU1tQixhQUFhLEdBQUcxQiw0REFBTSxDQUFDLEtBQUQsRUFBUTtBQUN6Q0MsU0FBTyxFQUFFLE1BRGdDO0FBRXpDRSxnQkFBYyxFQUFFLGVBRnlCO0FBR3pDRSxZQUFVLEVBQUU7QUFINkIsQ0FBUixDQUE1QjtBQU1BLElBQU1zQixZQUFZLEdBQUczQiw0REFBTSxDQUFDLEtBQUQsRUFBUTtBQUN4Q0MsU0FBTyxFQUFFO0FBRCtCLENBQVIsQ0FBM0I7QUFJQSxJQUFNMkIsV0FBVyxHQUFHNUIsNERBQU0sQ0FBQyxHQUFELEVBQU07QUFDckM2QixZQUFVLEVBQUUsRUFEeUI7QUFFckNSLE9BQUssRUFBRSxRQUY4QjtBQUdyQ0UsWUFBVSxFQUFFLGFBSHlCO0FBSXJDLGFBQVc7QUFDVEUsYUFBUyxFQUFFO0FBREY7QUFKMEIsQ0FBTixDQUExQjtBQVNBLElBQU1LLG1CQUFtQixHQUFHOUIsNERBQU0sQ0FBQyxLQUFELEVBQVE7QUFDL0NDLFNBQU8sRUFBRSxNQURzQztBQUUvQ0csZUFBYSxFQUFFO0FBRmdDLENBQVIsQ0FBbEM7QUFLQSxJQUFNMkIsWUFBWSxHQUFHL0IsNERBQU0sQ0FBQyxJQUFELEVBQU87QUFDdkNzQixZQUFVLEVBQUUsVUFEMkI7QUFFdkNQLFVBQVEsRUFBRSxJQUY2QjtBQUd2Q2IsUUFBTSxFQUFFLFFBSCtCO0FBSXZDbUIsT0FBSyxFQUFFO0FBSmdDLENBQVAsQ0FBM0I7QUFPQSxJQUFNVyxrQkFBa0IsR0FBR2hDLDREQUFNLENBQUMsR0FBRCxFQUFNO0FBQzVDcUIsT0FBSyxFQUFFLFFBRHFDO0FBRTVDQyxZQUFVLEVBQUUsVUFGZ0M7QUFHNUNQLFVBQVEsRUFBRTtBQUhrQyxDQUFOLENBQWpDIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9qZWN0cy9Qcm9qZWN0cy5zdHlsZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0eWxlZCB9IGZyb20gJy4uLy4uL3N0eWxlcy90aGVtZS5jb25maWcnXG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0c0NvbnRhaW5lciA9IHN0eWxlZCgnZGl2Jywge1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIG1hcmdpbjogJzEwMHB4IDEwMHB4JyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgJ0BtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpJzoge1xuICAgIG1hcmdpbjogJzEwMHB4IDEwcHgnLFxuICB9LFxuICAnQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCknOiB7XG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIH0sXG59KVxuXG5leHBvcnQgY29uc3QgUHJvamVjdHNHcmlkID0gc3R5bGVkKCdkaXYnLCB7XG4gIHdpZHRoOiAnOTV2dycsXG4gIGRpc3BsYXk6ICdncmlkJyxcbiAgZ2FwOiAnMnJlbScsXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdyZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzUwcHgsIDBmcikpJyxcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAnQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCknOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdyZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDBmcikpJyxcbiAgfSxcbiAgJ0BtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpJzoge1xuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdyZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDBmcikpJyxcbiAgfSxcbn0pXG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0c0hlYWRlciA9IHN0eWxlZCgnaDEnLCB7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgYmFja2dyb3VuZDogJyRncmFkaWVudCcsXG4gIHdpZHRoOiAnZml0LWNvbnRlbnQnLFxuICBXZWJraXRCYWNrZ3JvdW5kQ2xpcDogJ3RleHQnLFxuICBXZWJraXRUZXh0RmlsbENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICBmb250U2l6ZTogJyQ1JyxcbiAgbWFyZ2luOiAnMTUwcHggMCcsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG59KVxuXG5leHBvcnQgY29uc3QgUHJvamVjdEJveCA9IHN0eWxlZCgnZGl2Jywge1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIGJhY2tncm91bmQ6ICcjMjMyMjIyJyxcbiAgd2lkdGg6IDM1MCxcbiAgaGVpZ2h0OiAzMDAsXG4gIHBhZGRpbmc6IDMwLFxuICBjb2xvcjogJyRtYWluMicsXG4gIGZvbnRGYW1pbHk6ICckbW9ubycsXG4gIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIHRyYW5zaXRpb246ICcwLjFzIGxpbmVhcicsXG4gIGJvcmRlclJhZGl1czogNSxcbiAgJyY6aG92ZXInOiB7XG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNXB4KScsXG4gIH0sXG4gICdAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSc6IHtcbiAgICB3aWR0aDogMzAwLFxuICB9LFxuICAnQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCknOiB7XG4gICAgd2lkdGg6IDI4MCxcbiAgfSxcbn0pXG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0SGVhZGVyID0gc3R5bGVkKCdkaXYnLCB7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG59KVxuXG5leHBvcnQgY29uc3QgUHJvamVjdExpbmtzID0gc3R5bGVkKCdkaXYnLCB7XG4gIGRpc3BsYXk6ICdmbGV4Jyxcbn0pXG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0TGluayA9IHN0eWxlZCgnYScsIHtcbiAgbWFyZ2luTGVmdDogMjAsXG4gIGNvbG9yOiAnJHdoaXRlJyxcbiAgdHJhbnNpdGlvbjogJzAuMXMgbGluZWFyJyxcbiAgJyY6aG92ZXInOiB7XG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMS4xLCAxLjEpJyxcbiAgfSxcbn0pXG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0VG9wQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnLCB7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG59KVxuXG5leHBvcnQgY29uc3QgUHJvamVjdFRpdGxlID0gc3R5bGVkKCdoMycsIHtcbiAgZm9udEZhbWlseTogJyRwcmltYXJ5JyxcbiAgZm9udFNpemU6ICckNCcsXG4gIG1hcmdpbjogJzEwcHggMCcsXG4gIGNvbG9yOiAnJHdoaXRlJyxcbn0pXG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0RGVzY3JpcHRpb24gPSBzdHlsZWQoJ3AnLCB7XG4gIGNvbG9yOiAnJG1haW4yJyxcbiAgZm9udEZhbWlseTogJyRwcmltYXJ5JyxcbiAgZm9udFNpemU6ICckMicsXG59KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Projects/Projects.style.ts\n");

/***/ })

});