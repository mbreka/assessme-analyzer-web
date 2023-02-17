import { useEffect, useState } from 'react';
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { I18nextProvider } from 'react-i18next';
import i18nconfig from './i18n/config';
import { useLocalStorage } from '@mantine/hooks';
import Report from './components/modal/Report';
import Upload from './pages/Upload';
import Analyze from './pages/Analyze';
import Review from './pages/Review';
import Save from './pages/Save';
import Welcome from './pages/Welcome';
import Layout from './Layout';

const steps: JSX.Element[] = [<Upload />, <Analyze />, <Review />, <Save />, <Report />];

function App() {
  const [step, setStep] = useLocalStorage<JSX.Element>({
    key: 'current-step',
    defaultValue: <Welcome />,
  });

  const [active, setActive] = useLocalStorage<number>({
    key: 'current-active-step-number',
    defaultValue: 0,
  });

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
  });

  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => setStep(steps[active]), [setStep, active]);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme, primaryColor: 'orange' }} withGlobalStyles withNormalizeCSS>
        <I18nextProvider i18n={i18nconfig}>
          <Layout>{step}</Layout>
        </I18nextProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
