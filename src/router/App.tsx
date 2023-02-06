import { useEffect, useState } from 'react';
import { ColorScheme, ColorSchemeProvider, MantineProvider, Text } from '@mantine/core';
import { I18nextProvider, useTranslation } from 'react-i18next';
import FileInput from '../components/FileInput';
import i18nconfig from '../i18n/config';
import { useLocalStorage } from '@mantine/hooks';
import LoadedFile from '../components/file/LoadedFile';
import TestButton from '../components/buttons/TestButt';
import Layout from '../pages/Layout';

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    // i18n.changeLanguage("hr")
  });

  const { t, i18n } = useTranslation();

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <I18nextProvider i18n={i18nconfig}>
          <Layout>
            <>
              <Text ></Text>
              <FileInput />
              <br></br>
              <LoadedFile indata={[[], [{ value: 'l', label: 'aa' }]]} />
              <TestButton />
            </>
          </Layout>
        </I18nextProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
