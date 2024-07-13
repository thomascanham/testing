import { AppShell, Burger, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import Navbar from "../Navbar/Navbar";

export default function RootLayout({ children }) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'md', collapsed: { mobile: !opened } }}
      padding='md'
    >
      <AppShell.Header hiddenFrom="md">
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
          <h3>Brodman Bible</h3>
        </Group>
      </AppShell.Header>

      <Navbar />

      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  )
}
