'use strict';
// import axios from 'axios';
const axios = require('axios');
/**
 * language controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::language.language', () => ({


    async translate(ctx) {

        const enva = process.env.STRAPI_GOOGLE_TRANSLATE_API_KEY
        console.log('Translate called with body:', ctx.request.body, enva);

        if (!enva) {
            return { error: "API key not configured" };
        }

        try {
            const baseText = ctx.request.body.q || '';
            if (!baseText) {
                return { error: "No text provided for translation" };
            }
            const presond = await axios.post(`https://translation.googleapis.com/language/translate/v2?key=${enva}`, {
                "q": baseText,
                "source": "en",
                "target": "zh",
                "format": "text"
            })

            console.log('Calling external translation API with text:', baseText);

            const result = presond.data.data.translations[0].translatedText;

            return { translatedText: result };

        } catch (error) {
            return { error: "Translation API error" };
        }



        // Here you would implement the actual translation logic,
        // for demonstration, we return a mock response.
    },
}));
