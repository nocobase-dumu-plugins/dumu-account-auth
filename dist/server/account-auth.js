'use strict';

var auth = require('@nocobase/auth');
var database = require('@nocobase/database');
var constants = require('../constants');

class AccountAuth extends auth.BaseAuth {
  constructor(config) {
    const { ctx } = config;
    super({
      ...config,
      userCollection: ctx.db.getCollection("users")
    });
  }
  async validate() {
    var _a;
    const ctx = this.ctx;
    const { values } = ctx.action.params;
    const account = (values == null ? void 0 : values.account) || (values == null ? void 0 : values.email) || (values == null ? void 0 : values.phone);
    if (!account) {
      return ctx.throw(400, {
        code: "InvalidUserData",
        message: ctx.t("Please fill in your account", { ns: constants.namespace })
      });
    }
    const { mobile, email } = ((_a = this.authenticator.options) == null ? void 0 : _a.public) || {};
    const User = ctx.db.getCollection("users");
    const where = {
      account
    };
    if (mobile) {
      where["phone"] = account;
    }
    if (email) {
      where["email"] = account;
    }
    const user = await User.model.findOne({
      where: {
        [database.Op.or]: where
      }
    });
    if (!user) {
      return ctx.throw(404, ctx.t("The account is incorrect, please re-enter", { ns: constants.namespace }));
    }
    const field = this.userCollection.getField("password");
    const valid = await field.verify(values.password, user.password);
    if (!valid) {
      ctx.throw(401, ctx.t("The password is incorrect, please re-enter", { ns: constants.namespace }));
    }
    return user;
  }
}

exports.AccountAuth = AccountAuth;
