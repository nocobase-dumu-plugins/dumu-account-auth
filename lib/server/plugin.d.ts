import { InstallOptions, Plugin } from '@nocobase/server';
export declare class AccountAuthPlugin extends Plugin {
    afterAdd(): void;
    beforeLoad(): void;
    load(): Promise<void>;
    install(options?: InstallOptions): Promise<void>;
    afterEnable(): Promise<void>;
    afterDisable(): Promise<void>;
    remove(): Promise<void>;
}
export default AccountAuthPlugin;
