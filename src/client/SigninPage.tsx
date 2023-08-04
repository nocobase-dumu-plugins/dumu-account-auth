import { Authenticator, SchemaComponent, useSignIn } from '@nocobase/client';
import { ISchema } from '@formily/react';
import React from 'react';

const accountForm: ISchema = {
  type: 'object',
  name: 'accountForm',
  'x-component': 'Form',
  properties: {
    account: {
      type: 'string',
      required: true,
      'x-component': 'Input',
      'x-decorator': 'FormItem',
      'x-component-props': { placeholder: '{{t("Account")}}', style: {} },
    },
    password: {
      type: 'string',
      'x-component': 'Password',
      required: true,
      'x-decorator': 'FormItem',
      'x-component-props': { placeholder: '{{t("Password")}}', style: {} },
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
        style: { width: '100%' },
      },
    },
    signup: {
      type: 'void',
      'x-component': 'Link',
      'x-component-props': {
        to: '{{ signupLink }}',
      },
      'x-content': '{{t("Create an account")}}',
      'x-visible': '{{ allowSignUp }}',
    },
  },
};

export const SigninPage = (props: { authenticator: Authenticator }) => {
  const authenticator = props.authenticator;
  const { name, options } = authenticator;
  const allowSignUp = !!options?.allowSignUp;
  const signupLink = `/signup?authType=Email/Password&name=${name}`;

  const useAccountSignIn = () => {
    return useSignIn(name);
  };
  return <SchemaComponent schema={accountForm} scope={{ useAccountSignIn, allowSignUp, signupLink }} />;
};
