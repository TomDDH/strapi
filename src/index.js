
'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    console.log('✅ Custom Admin Plugin Registered', strapi);

    strapi.customFields.register({
      name: 'myCustomField', // Unique name for your custom field
      type: 'string', // The underlying data type (e.g., string, integer, json)
      // Add any other properties specific to your custom field
    });

    // // Example: Adding a custom field to the admin panel
    // strapi.customFields.register({
    //   name: "color",
    //   type: "string",
    //   inputSize: {
    //     // optional
    //     default: 4,
    //     isResizable: true,
    //   },
    // });

    // strapi.customFields.register({
    //   name: "myCustomField",
    //   pluginId: "global",
    //   type: "string", // Must match the type defined in the admin part
    //   // ... other backend-specific configurations if needed
    // });

    // strapi.customFields.register({
    //   name: 'text-ai',
    //   type: 'string',
    //   label: 'Text AI',
    //   description: 'Let AI do your writing!',
    // });
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {

    // const cm = strapi.getPlugin('content-manager')

    // console.log('🚀 Custom Admin Plugin Bootstrapped', cm);

  },
};
