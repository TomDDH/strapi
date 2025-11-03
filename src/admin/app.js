import React from 'react';
import Button from './Button.jsx';
import PluginIcon from './CustomInput';
import { Earth } from '@strapi/icons';
import { ChartCircle } from '@strapi/icons';
import { EmptyData } from '@strapi/icons/symbols';

import AnalyticViews from './AnalyticViews.jsx';
import { ChartBubble } from '@strapi/icons';
export default {

    register(app) {
        console.log('%c✅ Strapi admin register() loaded!', 'color: lime; font-weight: bold;');



        app.customFields.register({
            name: 'myCustomField',
            pluginId: null, // Set to null for app-specific custom fields
            type: 'string', // Should match the server-side type
            intlLabel: {
                id: 'my-custom-field.label',
                defaultMessage: 'My Custom Field',
            },
            intlDescription: {
                id: 'my-custom-field.description',
                defaultMessage: 'A custom field for my app.',
            },
            components: {
                Input: async () => import('./CustomInput.jsx'), // Your custom React component for the input
            },
            // Add any other admin-specific properties
        });

    },
    bootstrap(app) {

        const cm = app.getPlugin('content-manager');

        console.log('🚀 Strapi admin bootstrap() cm:', cm);

        const getInjectedComponents = cm.getInjectedComponents('editView', '');
        console.log('🛠️  Strapi admin bootstrap() getInjectedComponents:', getInjectedComponents);

        cm.injectComponent('editView', 'right-links', {
            name: 'PreviewButton',
            Component: Button,
        });

        console.log('%c🚀 Strapi admin bootstrap() running!', 'color: cyan; font-weight: bold;');


        app.addMenuLink({
            to: '/plugins/analytic-plugin',
            icon: ChartBubble,
            intlLabel: {
                id: 'analytic-plugin.plugin.name',
                defaultMessage: 'Analytic plugin',
            },
            Component: () => AnalyticViews,
            // permissions: [], // permissions to apply to the link
            // position: 3, // position in the menu
            // licenseOnly: true, // mark the feature as a paid one not available in your license
        });


    },
    config: {
        locales: ['en'],
    },
};