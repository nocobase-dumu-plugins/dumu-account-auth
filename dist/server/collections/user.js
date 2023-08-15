'use strict';

var database = require('@nocobase/database');

var user_default = database.extend({
  name: "users",
  fields: [
    {
      interface: "input",
      type: "string",
      name: "account",
      unique: true,
      uiSchema: {
        type: "string",
        title: '{{t("Account",{ns:"account-auth"})}}',
        "x-component": "Input"
      }
    }
  ]
});

module.exports = user_default;
