"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NAMESPACE = void 0;
exports.useAuthTranslation = useAuthTranslation;
function _client() {
  const data = require("@nocobase/client");
  _client = function _client() {
    return data;
  };
  return data;
}
function _reactI18next() {
  const data = require("react-i18next");
  _reactI18next = function _reactI18next() {
    return data;
  };
  return data;
}
var _zhCN = _interopRequireDefault(require("./zh-CN"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const NAMESPACE = 'account-auth';
exports.NAMESPACE = NAMESPACE;
_client().i18n.addResources('zh-CN', NAMESPACE, _zhCN.default);
function useAuthTranslation() {
  return (0, _reactI18next().useTranslation)(NAMESPACE);
}