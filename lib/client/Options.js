"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Options = void 0;
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
var _locale = require("./locale");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Options = () => {
  const _useAuthTranslation = (0, _locale.useAuthTranslation)(),
    t = _useAuthTranslation.t;
  return _react().default.createElement(_client().SchemaComponent, {
    scope: {
      t
    },
    schema: {
      type: 'object',
      properties: {
        account: {
          type: 'void',
          properties: {
            public: {
              type: 'object',
              properties: {
                allowSignUp: {
                  'x-decorator': 'FormItem',
                  type: 'boolean',
                  title: '{{t("Allow sign up",{ns:"account-auth"})}}',
                  'x-component': 'Checkbox'
                },
                mobile: {
                  'x-decorator': 'FormItem',
                  type: 'boolean',
                  title: '{{t("Support Mobile Login",{ns:"account-auth"})}}',
                  'x-component': 'Checkbox'
                },
                email: {
                  'x-decorator': 'FormItem',
                  type: 'boolean',
                  title: '{{t("Support Email Login",{ns:"account-auth"})}}',
                  'x-component': 'Checkbox'
                }
              }
            }
          }
        }
      }
    }
  });
};
exports.Options = Options;