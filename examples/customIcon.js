webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(181);


/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	__webpack_require__(3);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(37);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcSteps = __webpack_require__(175);
	
	var _rcSteps2 = _interopRequireDefault(_rcSteps);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Icon = function Icon(_ref) {
	  var type = _ref.type;
	  return _react2.default.createElement('i', { className: 'rcicon rcicon-' + type });
	};
	
	_reactDom2.default.render(_react2.default.createElement(
	  _rcSteps2.default,
	  { current: 1 },
	  _react2.default.createElement(_rcSteps.Step, { title: '步骤1', icon: _react2.default.createElement(Icon, { type: 'cloud' }) }),
	  _react2.default.createElement(_rcSteps.Step, { title: '步骤2', icon: 'apple' }),
	  _react2.default.createElement(_rcSteps.Step, { title: '步骤3', icon: 'github' })
	), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=customIcon.js.map