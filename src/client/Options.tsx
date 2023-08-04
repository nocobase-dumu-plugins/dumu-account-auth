import { SchemaComponent } from '@nocobase/client';
import React from 'react';
import { useAuthTranslation } from './locale';

export const Options = () => {
  const { t } = useAuthTranslation();
  return (
    <SchemaComponent
      scope={{ t }}
      schema={{
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
                    title: '{{t("Allow sign up")}}',
                    'x-component': 'Checkbox',
                  },
                  mobile: {
                    'x-decorator': 'FormItem',
                    type: 'boolean',
                    title: '{{t("Support Mobile Login")}}',
                    'x-component': 'Checkbox',
                  },
                  email: {
                    'x-decorator': 'FormItem',
                    type: 'boolean',
                    title: '{{t("Support Email Login")}}',
                    'x-component': 'Checkbox',
                  },
                },
              },
            },
          },
        },
      }}
    />
  );
};
