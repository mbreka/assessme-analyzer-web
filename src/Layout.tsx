import { Title, Text, AppShell, Navbar, Header, Group, Center, Box, Divider, Switch } from '@mantine/core';
import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import ChangeLanguageButton from './components/buttons/ChangeLanguage';
import ChangeThemeButton from './components/buttons/ChangeTheme';
import Steps from './components/view/Steps';

function OldLayout({ children }: { children: ReactElement }) {
  const { t } = useTranslation();

  return (
    <Navbar width={{ base: 300 }} p="md">
      <Steps />
      <Navbar.Section>
<Text>dass</Text>
      </Navbar.Section> 
      <Divider my="xl" />
      <Center>
        <Group noWrap spacing={10}>s
          <ChangeLanguageButton />
          <ChangeThemeButton />
        </Group>
      </Center>
      <Divider my="xl" />
      <Text size={20} weight={900}>
        {t('about.title')}
      </Text>
      <Text>{t('about.content')}</Text>
      <Text weight={700}>&copy;{' ' + t('about.copyright') + ' ' + new Date().getFullYear()}</Text>
    </Navbar>
  );
}

function Layout({ children }: { children: ReactElement }) {
  const { t } = useTranslation();

  return (
    <AppShell
      navbar={
        <Navbar width={{ base: 300 }} p="md">
          <Steps />
          <Divider my="xl" />
          <Center>
            <Group noWrap spacing={10}>
              <ChangeLanguageButton />
              <ChangeThemeButton />
            </Group>
          </Center>
          <Divider my="xl" />
          <Text size={20} weight={900}>
            {t('about.title')}
          </Text>
          <Text>{t('about.content')}</Text>
          <Text weight={700}>&copy;{' ' + t('about.copyright') + ' ' + new Date().getFullYear()}</Text>
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          <Center>
            <Group noWrap>
              <Title order={2}>
                <Text component="span" color={'orange'}>
                  Assess
                </Text>
                <Text component="span">Me {t('title')}</Text>
              </Title>
            </Group>
          </Center>
        </Header>
      }
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      <Box p={20}>{children}</Box>
    </AppShell>
  );
}

export default Layout;
