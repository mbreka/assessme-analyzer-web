import { Text, AppShell, Navbar, Header, Group, Center, useMantineColorScheme, Box } from '@mantine/core';
import { ReactElement } from 'react';
import ChangeLanguageButton from '../components/buttons/ChangeLanguage';
import ChangeThemeButton from '../components/buttons/ChangeTheme';
import TestButton from '../components/buttons/TestButt';

function Layout({ children }: { children: ReactElement }) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }}  p="xs">
          <Group noWrap>
            <ChangeLanguageButton />
            <ChangeThemeButton />
          </Group>
        </Navbar>
      }
      header={
        <Header height={50} p="xs">
          <Center>
            <Group noWrap>
              <Text weight={'bolder'} color={'orange'}>
                Assess Me
              </Text>
            </Group>
          </Center>
        </Header>
      }
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      <Box p={10}>{children}</Box>
    </AppShell>
  );
}

export default Layout;
