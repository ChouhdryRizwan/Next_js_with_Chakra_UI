
import React, { useState } from 'react';
import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const Theme = () => {
    const [colorMode, setColorMode] = useState('light');

    const config: ThemeConfig = {
        // initialColorMode: colorMode,
        useSystemColorMode: false,
    };

    const theme = extendTheme({ config });

    return (
        <div>
            <h1>This is the Theme page</h1>
            <button onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}>
                Toggle color mode
            </button>
        </div>
    );
};

export default Theme;
