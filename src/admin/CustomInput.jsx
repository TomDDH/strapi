// import { Combobox } from '@strapi/design-system';
import { TextInput } from '@strapi/design-system';
import React, { useEffect, useMemo, useState } from 'react';
import { Earth } from '@strapi/icons';
import { useStrapiApp, useElementOnScreen, useDocumentRBAC, useQueryParams, useAppInfo, useFetchClient, unstable_useDocument, unstable_useContentManagerContext } from '@strapi/strapi/admin';
import axios from 'axios';

// Custom Input Component
const CustomTextInput = (props) => {

  const app = useStrapiApp('CustomTextInput', (state) => state);

  const { get } = useFetchClient();

  const { query } = useQueryParams()[0]
  const [baseData, setBaseData] = useState(null);

  const document = useDocumentRBAC('CustomTextInput', data => data);
  const ele = useElementOnScreen(data => data);
  // const locale = useMemo(() => {
  //   if (!querys) return 'en';

  //   const query = querys?.[0] || {
  //     plugins: {
  //       i18n: {
  //         locale: 'en'
  //       }
  //     }
  //   };

  // }, [querys]);

  // const query = query?.plugins?.i18n?.locale || 'en';
  // const getDocument = unstable_useContentManagerContext();

  // const app = useAppInfo('CustomTextInput', (state) => state);

  console.log('🚀 CustomTextInput props:', props, app, get, query, document, ele);


  const {
    name,
    value,
    onChange,
    disabled,
    error,
    intlLabel,
    required
  } = props

  const [prompt, setPrompt] = useState('');
  const [err, setErr] = useState('');


  const handleTranslate = async () => {
    const baseText = baseData.consi || '';
    // https://translation.googleapis.com/language/translate/v2?key=AIzaSyCRKmPZ6Jx3kzRsY6cN4nb2uZ65uAuPe20


    console.log('Translating prompt:', baseText);

    try {
      // const presond = await axios.post('https://translation.googleapis.com/language/translate/v2?key=AIzaSyCRKmPZ6Jx3kzRsY6cN4nb2uZ65uAuPe20', {
      //   "q": baseText,
      //   "source": "en",
      //   "target": "zh",
      //   "format": "text"
      // })


      // const result = presond.data.data.translations[0].translatedText;
      // onChange({
      //   target: {
      //     name,
      //     value: result
      //   }
      // });

      const presond = await axios.post('/api/language/translate', {
        q: baseText
      });
      
      const result = presond.data.translatedText; 
      onChange({
        target: {
          name,
          value: result
        }
      });
      
      console.log('Translation response:', result);

    } catch (error) {
      console.error('Error fetching translation:', error);
    }

  }

  const getData = async () => {
    try {
      const presond = await axios.get(`/api/language?populate=*`);
      console.log('Translation response:', presond.data.data);
      setBaseData(presond.data.data);
    } catch (error) {
      console.error('Error fetching translation:', error);
    }
  }

  useEffect(() => {
    getData()
  }, [])

  // Call your translation API here with the prompt

  return (
    <div style={{ marginBottom: '1rem' }} >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "8px",
        }}
      >
        <label
          htmlFor={name}
          style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontWeight: 500,
            fontSize: '1.275rem',
            color: '#ea0744ff',

          }}
        >
          {intlLabel?.defaultMessage || name}
          {required && <span style={{ color: 'red' }}> *</span>}

        </label>
        {query.plugins?.i18n?.locale != 'en' &&

          <button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "8px 12px",
              backgroundColor: "#4945ff",
              color: "#ffffff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              marginTop: "8px",
              gap: "3px",
            }}
            onClick={handleTranslate}
          >Translate
            <Earth />
          </button>
        }
      </div>

      {baseData && <div>Base Data Loaded: {baseData?.consi}</div>}
      <input
        id={name}
        name={name}
        type="text"
        value={value || ''}
        onChange={(e) => onChange({
          target: {
            name,
            value: e.target.value
          }
        })}
        disabled={disabled}
        style={{
          width: '100%',
          padding: '0.625rem 1rem',
          fontSize: '0.875rem',
          border: error ? '1px solid #d02b20' : '1px solid #dcdce4',
          borderRadius: '4px',
          outline: 'none',
          transition: 'border-color 0.2s',
        }}
        onFocus={(e) => {
          if (!error) {
            e.target.style.borderColor = '#4945ff';
          }
        }}
        onBlur={(e) => {
          if (!error) {
            e.target.style.borderColor = '#dcdce4';
          }
        }}
      />

      {/* <TextInput
        placeholder="Please write a prompt for content to generate"
        name="Prompt"
        onChange={(e) => setPrompt(e.target.value)}
        value={prompt}
      />

      {error && (
        <p style={{
          color: '#d02b20',
          fontSize: '0.75rem',
          marginTop: '0.25rem'
        }}>
          {error}
        </p>
      )} */}
    </div >
  );
};

export default CustomTextInput;