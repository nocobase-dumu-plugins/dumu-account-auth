"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccountAuth = void 0;
function _auth() {
  const data = require("@nocobase/auth");
  _auth = function _auth() {
    return data;
  };
  return data;
}
function _database() {
  const data = require("@nocobase/database");
  _database = function _database() {
    return data;
  };
  return data;
}
var _constants = require("./constants");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class AccountAuth extends _auth().BaseAuth {
  constructor(config) {
    const ctx = config.ctx;
    super(_objectSpread(_objectSpread({}, config), {}, {
      userCollection: ctx.db.getCollection('users')
    }));
  }
  validate() {
    var _this = this;
    return _asyncToGenerator(function* () {
      var _this$authenticator$o;
      const ctx = _this.ctx;
      const values = ctx.action.params.values;
      const account = (values === null || values === void 0 ? void 0 : values.account) || (values === null || values === void 0 ? void 0 : values.email) || (values === null || values === void 0 ? void 0 : values.phone);
      if (!account) {
        return ctx.throw(400, {
          code: 'InvalidUserData',
          message: ctx.t('Please fill in your account', {
            ns: _constants.namespace
          })
        });
      }
      const _ref = ((_this$authenticator$o = _this.authenticator.options) === null || _this$authenticator$o === void 0 ? void 0 : _this$authenticator$o.public) || {},
        mobile = _ref.mobile,
        email = _ref.email;
      const User = ctx.db.getCollection('users');
      const where = {
        account: account
      };
      if (mobile) {
        where['phone'] = account;
      }
      if (email) {
        where['email'] = account;
      }
      const user = yield User.model.findOne({
        where: {
          [_database().Op.or]: where
        }
      });
      if (!user) {
        return ctx.throw(404, ctx.t('The account is incorrect, please re-enter', {
          ns: _constants.namespace
        }));
      }
      const field = _this.userCollection.getField('password');
      const valid = yield field.verify(values.password, user.password);
      if (!valid) {
        ctx.throw(401, ctx.t('The password is incorrect, please re-enter', {
          ns: _constants.namespace
        }));
      }
      return user;
    })();
  }
}
exports.AccountAuth = AccountAuth;