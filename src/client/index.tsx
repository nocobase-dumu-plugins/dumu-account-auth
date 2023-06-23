import { OptionsComponentProvider, SigninPageProvider } from '@nocobase/client';
import React from 'react';
import { SigninPage } from './SigninPage';
import { useAuthTranslation } from './locale';
import { authType } from '../constants';
import { Options } from './Options';

export default (props) => {
  const { t } = useAuthTranslation();
  return (
    <OptionsComponentProvider authType={authType} component={Options}>
      <SigninPageProvider authType={authType} tabTitle={t('Account')} component={SigninPage}>
        {props.children}
      </SigninPageProvider>
    </OptionsComponentProvider>
  );
};
