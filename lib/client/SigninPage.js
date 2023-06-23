"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SigninPage = void 0;
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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const accountForm = {
  type: 'object',
  name: 'accountForm',
  'x-component': 'Form',
  properties: {
    account: {
      type: 'string',
      required: true,
      'x-component': 'Input',
      'x-decorator': 'FormItem',
      'x-component-props': {
        placeholder: '{{t("Account",{ns:"account-auth"})}}',
        style: {}
      }
    },
    password: {
      type: 'string',
      'x-component': 'Password',
      required: true,
      'x-decorator': 'FormItem',
      'x-component-props': {
        placeholder: '{{t("Password")}}',
        style: {}
      }
    },
    actions: {
      title: '{{t("Sign in")}}',
      type: 'void',
      'x-component': 'Action',
      'x-component-props': {
        htmlType: 'submit',
        block: true,
        type: 'primary',
        useAction: '{{ useAccountSignIn }}',
        style: {
          width: '100%'
        }
      }
    },
    signup: {
      type: 'void',
      'x-component': 'Link',
      'x-component-props': {
        to: '{{ signupLink }}'
      },
      'x-content': '{{t("Create an account")}}',
      'x-visible': '{{ allowSignUp }}'
    }
  }
};
const SigninPage = props => {
  const authenticator = props.authenticator;
  const name = authenticator.name,
    options = authenticator.options;
  const allowSignUp = !!(options === null || options === void 0 ? void 0 : options.allowSignUp);
  const signupLink = `/signup?authType=Email/Password&name=${name}`;
  const useAccountSignIn = () => {
    return (0, _client().useSignIn)(name);
  };
  return _react().default.createElement(_client().SchemaComponent, {
    schema: accountForm,
    scope: {
      useAccountSignIn,
      allowSignUp,
      signupLink
    }
  });
};
exports.SigninPage = SigninPage;