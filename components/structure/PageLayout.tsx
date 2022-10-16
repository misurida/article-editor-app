import { IconMoonStars, IconSun } from '@tabler/icons';
import { ActionIcon, AppShell, Group, Header, Title, useMantineTheme, useMantineColorScheme } from '@mantine/core';
import { useRouter } from 'next/router';
import Head from 'next/head';


export interface PageLayoutProps {
  children?: React.ReactNode
  auth?: boolean
  footer?: React.ReactElement<any, string | React.JSXElementConstructor<any>>
  noBoxWidth?: boolean
}


export default function PageLayout(props: PageLayoutProps) {

  const theme = useMantineTheme();
  const router = useRouter()
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      header={
        <Header height={70} p="md" >
          <Group style={{ alignItems: 'center', height: "100%" }}>
            <Title
              size="md"
              order={1}
              mr="auto"
              sx={{cursor: "pointer"}}
              onClick={() => router.push('/')}
            >
              Article Editor
            </Title>
            <ActionIcon variant="subtle" onClick={() => toggleColorScheme()} size={30}>
              {theme.colorScheme === 'dark' ? <IconSun size={16} /> : <IconMoonStars size={16} />}
            </ActionIcon>
          </Group>
        </Header>
      }
    >
      <Head>
        <title>Article Editor</title>
        <meta name="description" content="An Effixis app to edit article information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {props.children}
    </AppShell>
  )
}
