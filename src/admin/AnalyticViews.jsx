// import { Combobox } from '@strapi/design-system';
import { TextInput } from '@strapi/design-system';
import React, { useEffect, useMemo, useState } from 'react';
import { Earth } from '@strapi/icons';
import { useStrapiApp, useElementOnScreen, useDocumentRBAC, useQueryParams, useAppInfo, useFetchClient, unstable_useDocument, unstable_useContentManagerContext } from '@strapi/strapi/admin';
import axios from 'axios';
import { DateTimePicker } from '@strapi/design-system';
import { RawTable, Box, RawTh, Link, RawTd, RawTr, RawThead, RawTbody } from '@strapi/design-system';

// Custom Input Component
const AnalyticViews = (props) => {

    console.log('🚀 AnalyticViews props:', props);

    // Call your translation API here with the prompt

    const ROW_COUNT = 30;
    const COL_COUNT = 5;

    return (
        <div style={{
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#333',
            width: '100%',
            marginTop: '20px',
            padding: '56px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',   
            gap: '24px',
        }} >

            Analytic Views for your data here! for example: pm2 start app.js

            <DateTimePicker />

            <Box shadow="filterShadow" padding={3} hasRadius>
                <RawTable colCount={COL_COUNT} rowCount={ROW_COUNT}>
                    <RawThead>
                        <RawTr>
                            <RawTh>
                                <Box color="neutral800" padding={2} background="neutral200">
                                    One
                                </Box>
                            </RawTh>
                            <RawTh>
                                <Box color="neutral800" padding={2} background="neutral200">
                                    Two
                                </Box>
                            </RawTh>
                            <RawTh>
                                <Box color="neutral800" padding={2} background="neutral200">
                                    Three
                                </Box>
                            </RawTh>
                            <RawTh>
                                <Box color="neutral800" padding={2} background="neutral200">
                                    Four
                                </Box>
                            </RawTh>
                            <RawTh>
                                <Box color="neutral800" padding={2} background="neutral200">
                                    Five
                                </Box>
                            </RawTh>
                        </RawTr>
                    </RawThead>
                    <RawTbody>
                        <RawTr>
                            <RawTd color="neutral800">2/1</RawTd>
                            <RawTd color="neutral800">2/2</RawTd>
                            <RawTd color="neutral800">2/3</RawTd>
                            <RawTd color="neutral800">2/4</RawTd>
                            <RawTd color="neutral800">2/5</RawTd>
                        </RawTr>
                        <RawTr>
                            <RawTd color="neutral800">3/1</RawTd>
                            <RawTd>
                                <Link href="#">Link to somewhere</Link>
                            </RawTd>
                            <RawTd color="neutral800">3/3</RawTd>
                            <RawTd color="neutral800">3/4</RawTd>
                            <RawTd color="neutral800">3/5</RawTd>
                        </RawTr>
                    </RawTbody>
                </RawTable>
            </Box>
        </div >
    );
};

export default AnalyticViews;