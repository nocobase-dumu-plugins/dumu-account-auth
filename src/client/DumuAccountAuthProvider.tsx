import React from 'react';
import { OptionsComponentProvider, SigninPageProvider } from '@nocobase/client';
import { authType } from '../constants';
import { Options } from './Options';
import { useAuthTranslation } from './locale';
import { SigninPage } from './SigninPage';

export const dumuAccountAuthProvider = (props) => {
  const { t } = useAuthTranslation();
  return (
    <OptionsComponentProvider authType={authType} component={Options}>
      <SigninPageProvider authType={authType} tabTitle={t('Account')} component={SigninPage}>
        {props.children}
      </SigninPageProvider>
    </OptionsComponentProvider>
  );
};
