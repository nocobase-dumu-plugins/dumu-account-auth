"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _client() {
  const data = require("@nocobase/client");
  _client = function _client() {
    return data;
  };
  return data;
}
function _react() {
  const data = _interopRequireDefault(require("react"));
  _react = function _react() {
    return data;
  };
  return data;
}
var _SigninPage = require("./SigninPage");
var _locale = require("./locale");
var _constants = require("../constants");
var _Options = require("./Options");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = props => {
  const _useAuthTranslation = (0, _locale.useAuthTranslation)(),
    t = _useAuthTranslation.t;
  return _react().default.createElement(_client().OptionsComponentProvider, {
    authType: _constants.authType,
    component: _Options.Options
  }, _react().default.createElement(_client().SigninPageProvider, {
    authType: _constants.authType,
    tabTitle: t('Account'),
    component: _SigninPage.SigninPage
  }, props.children));
};
exports.default = _default;