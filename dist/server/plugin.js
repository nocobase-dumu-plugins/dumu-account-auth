'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var server = require('@nocobase/server');
var path = require('path');
var accountAuth = require('./account-auth');
var constants = require('../constants');
var zhCN = require('./locale/zh-CN');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var zhCN__default = /*#__PURE__*/_interopDefault(zhCN);

class AccountAuthPlugin extends server.Plugin {
  afterAdd() {
  }
  beforeLoad() {
    this.app.i18n.addResources("zh-CN", constants.namespace, zhCN__default.default);
  }
  async load() {
    await this.db.import({
      directory: path.resolve(__dirname, "collections")
    });
    this.app.authManager.registerTypes(constants.authType, {
      auth: accountAuth.AccountAuth
    });
  }
  async install(options) {
  }
  async afterEnable() {
  }
  async afterDisable() {
  }
  async remove() {
  }
}
var plugin_default = AccountAuthPlugin;

exports.AccountAuthPlugin = AccountAuthPlugin;
exports.default = plugin_default;
