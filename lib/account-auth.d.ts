import { AuthConfig, BaseAuth } from '@nocobase/auth';
export declare class AccountAuth extends BaseAuth {
    constructor(config: AuthConfig);
    validate(): Promise<any>;
}
