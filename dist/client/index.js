(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("@nocobase/client"), require("react"), require("react-i18next")) : typeof define === "function" && define.amd ? define(["exports", "@nocobase/client", "react", "react-i18next"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global["@nocobase/plugin-dumu-account-auth"] = {}, global["@nocobase/client"], global.react, global["react-i18next"]));
})(this, function(exports2, client, require$$0, reactI18next) {
  "use strict";
  var jsxRuntime = { exports: {} };
  var reactJsxRuntime_production_min = {};
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var f = require$$0, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
  function q(c, a, g) {
    var b, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for (b in a)
      m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps)
      for (b in a = c.defaultProps, a)
        void 0 === d[b] && (d[b] = a[b]);
    return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
  }
  reactJsxRuntime_production_min.Fragment = l;
  reactJsxRuntime_production_min.jsx = q;
  reactJsxRuntime_production_min.jsxs = q;
  {
    jsxRuntime.exports = reactJsxRuntime_production_min;
  }
  var jsxRuntimeExports = jsxRuntime.exports;
  const authType = "ACCOUNT";
  const NAMESPACE = "dumu-account-auth";
  function useAuthTranslation() {
    return reactI18next.useTranslation(NAMESPACE);
  }
  const Options = () => {
    const { t } = useAuthTranslation();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      client.SchemaComponent,
      {
        scope: { t },
        schema: {
          type: "object",
          properties: {
            account: {
              type: "void",
              properties: {
                public: {
                  type: "object",
                  properties: {
                    allowSignUp: {
                      "x-decorator": "FormItem",
                      type: "boolean",
                      title: '{{t("Allow sign up")}}',
                      "x-component": "Checkbox"
                    },
                    mobile: {
                      "x-decorator": "FormItem",
                      type: "boolean",
                      title: '{{t("Support Mobile Login")}}',
                      "x-component": "Checkbox"
                    },
                    email: {
                      "x-decorator": "FormItem",
                      type: "boolean",
                      title: '{{t("Support Email Login")}}',
                      "x-component": "Checkbox"
                    }
                  }
                }
              }
            }
          }
        }
      }
    );
  };
  const accountForm = {
    type: "object",
    name: "accountForm",
    "x-component": "Form",
    properties: {
      account: {
        type: "string",
        required: true,
        "x-component": "Input",
        "x-decorator": "FormItem",
        "x-component-props": { placeholder: '{{t("Account")}}', style: {} }
      },
      password: {
        type: "string",
        "x-component": "Password",
        required: true,
        "x-decorator": "FormItem",
        "x-component-props": { placeholder: '{{t("Password")}}', style: {} }
      },
      actions: {
        title: '{{t("Sign in")}}',
        type: "void",
        "x-component": "Action",
        "x-component-props": {
          htmlType: "submit",
          block: true,
          type: "primary",
          useAction: "{{ useAccountSignIn }}",
          style: { width: "100%" }
        }
      },
      signup: {
        type: "void",
        "x-component": "Link",
        "x-component-props": {
          to: "{{ signupLink }}"
        },
        "x-content": '{{t("Create an account")}}',
        "x-visible": "{{ allowSignUp }}"
      }
    }
  };
  const SigninPage = (props) => {
    const authenticator = props.authenticator;
    const { name, options } = authenticator;
    const allowSignUp = !!(options == null ? void 0 : options.allowSignUp);
    const signupLink = `/signup?authType=Email/Password&name=${name}`;
    const useAccountSignIn = () => {
      return client.useSignIn(name);
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(client.SchemaComponent, { schema: accountForm, scope: { useAccountSignIn, allowSignUp, signupLink } });
  };
  const dumuAccountAuthProvider = (props) => {
    const { t } = useAuthTranslation();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(client.OptionsComponentProvider, { authType, component: Options, children: /* @__PURE__ */ jsxRuntimeExports.jsx(client.SigninPageProvider, { authType, tabTitle: t("Account"), component: SigninPage, children: props.children }) });
  };
  class DumuAccountAuthPlugin extends client.Plugin {
    async load() {
      this.app.addProvider(dumuAccountAuthProvider);
    }
  }
  exports2.DumuAccountAuthPlugin = DumuAccountAuthPlugin;
  exports2.default = DumuAccountAuthPlugin;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
