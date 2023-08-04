import { Plugin } from '@nocobase/client';
import React from 'react';
import { dumuAccountAuthProvider } from './DumuAccountAuthProvider';

export class DumuAccountAuthPlugin extends Plugin {
  async load() {
    this.app.addProvider(dumuAccountAuthProvider);
  }
}

export default DumuAccountAuthPlugin;
