import { AuthConfig, BaseAuth } from '@nocobase/auth';
import { Op, PasswordField } from '@nocobase/database';
import { namespace } from './constants';
export class AccountAuth extends BaseAuth {
  constructor(config: AuthConfig) {
    const { ctx } = config;
    super({
      ...config,
      userCollection: ctx.db.getCollection('users'),
    });
  }

  async validate() {
    const ctx = this.ctx;
    const { values } = ctx.action.params;
    const account = values?.account || values?.email || values?.phone;
    if (!account) {
      return ctx.throw(400, {
        code: 'InvalidUserData',
        message: ctx.t('Please fill in your account', { ns: namespace }),
      });
    }
    const { mobile, email } = this.authenticator.options?.public || {};
    const User = ctx.db.getCollection('users');
    const where = {
      account: account,
    };
    if (mobile) {
      where['phone'] = account;
    }
    if (email) {
      where['email'] = account;
    }
    const user = await User.model.findOne<any>({
      where: {
        [Op.or]: where,
      },
    });
    if (!user) {
      return ctx.throw(404, ctx.t('The account is incorrect, please re-enter', { ns: namespace }));
    }
    const field = this.userCollection.getField<PasswordField>('password');
    const valid = await field.verify(values.password, user.password);
    if (!valid) {
      ctx.throw(401, ctx.t('The password is incorrect, please re-enter', { ns: namespace }));
    }
    return user;
  }
}
