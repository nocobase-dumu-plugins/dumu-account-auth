"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AccountAuthPlugin = void 0;
function _server() {
  const data = require("@nocobase/server");
  _server = function _server() {
    return data;
  };
  return data;
}
function _path() {
  const data = require("path");
  _path = function _path() {
    return data;
  };
  return data;
}
var _accountAuth = require("../account-auth");
var _constants = require("../constants");
var _locale = require("../locale");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
class AccountAuthPlugin extends _server().Plugin {
  afterAdd() {}
  beforeLoad() {
    this.app.i18n.addResources('zh-CN', _constants.namespace, _locale.zhCN);
  }
  load() {
    var _this = this;
    return _asyncToGenerator(function* () {
      yield _this.db.import({
        directory: (0, _path().resolve)(__dirname, 'collections')
      });
      _this.app.authManager.registerTypes(_constants.authType, {
        auth: _accountAuth.AccountAuth
      });
    })();
  }
  install(options) {
    return _asyncToGenerator(function* () {})();
  }
  afterEnable() {
    return _asyncToGenerator(function* () {})();
  }
  afterDisable() {
    return _asyncToGenerator(function* () {})();
  }
  remove() {
    return _asyncToGenerator(function* () {})();
  }
}
exports.AccountAuthPlugin = AccountAuthPlugin;
var _default = AccountAuthPlugin;
exports.default = _default;