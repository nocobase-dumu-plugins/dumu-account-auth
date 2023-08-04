import { InstallOptions, Plugin } from '@nocobase/server';
import { resolve } from 'path';
import { AccountAuth } from './account-auth';
import { authType, namespace } from '../constants';
import zhCN from './locale/zh-CN';

export class AccountAuthPlugin extends Plugin {
  afterAdd() {}

  beforeLoad() {
    this.app.i18n.addResources('zh-CN', namespace, zhCN);
  }

  async load() {
    await this.db.import({
      directory: resolve(__dirname, 'collections'),
    });
    this.app.authManager.registerTypes(authType, {
      auth: AccountAuth,
    });
  }

  async install(options?: InstallOptions) {}

  async afterEnable() {}

  async afterDisable() {}

  async remove() {}
}

export default AccountAuthPlugin;
