"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _database() {
  const data = require("@nocobase/database");
  _database = function _database() {
    return data;
  };
  return data;
}
var _default = (0, _database().extend)({
  name: 'users',
  fields: [{
    type: 'string',
    name: 'account',
    unique: true,
    uiSchema: {
      type: 'string',
      title: '{{t("Account",{ns:"account-auth"})}}',
      'x-component': 'Input'
    }
  }]
});
exports.default = _default;