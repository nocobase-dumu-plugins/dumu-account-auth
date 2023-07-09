import { OptionsComponentProvider, Plugin, SigninPageProvider } from '@nocobase/client';
import React from 'react';
import { authType } from '../constants';
import { Options } from './Options';
import { SigninPage } from './SigninPage';
import { useAuthTranslation } from './locale';

const dumuAccountAuthProvider = React.memo((props) => {
  const { t } = useAuthTranslation();
  return (
    <OptionsComponentProvider authType={authType} component={Options}>
      <SigninPageProvider authType={authType} tabTitle={t('Account')} component={SigninPage}>
        {props.children}
      </SigninPageProvider>
    </OptionsComponentProvider>
  );
});

class DumuAccountAuthPlugin extends Plugin {
  async load() {
    this.app.addProvider(dumuAccountAuthProvider);
  }
}

export default DumuAccountAuthPlugin;
