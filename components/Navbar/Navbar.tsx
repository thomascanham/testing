import { AppShell, NavLink, Divider, ScrollArea } from '@mantine/core';
import Link from 'next/link';
import { IconGalaxy } from '@tabler/icons-react';

export default function Navbar() {
  return (
    <AppShell.Navbar>
      <AppShell.Navbar p="md">
        <AppShell.Section pb="xl">
          <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="" width={40}/>
        </AppShell.Section>

        <AppShell.Section pt="xl" grow my="md">
          <NavLink href="/" label="Home" component={Link} leftSection={<IconGalaxy size="1rem" stroke={1.5} />} />
          <NavLink href="/" label="Brodman Bible" component={Link} leftSection={<IconGalaxy size="1rem" stroke={1.5} />} />
          <NavLink href="/" label="Sites" color="red" component={Link} leftSection={<IconGalaxy size="1rem" stroke={1.5} />} />
          <NavLink href="/" label="Engineers" color="red" component={Link} leftSection={<IconGalaxy size="1rem" stroke={1.5} />} />
          
          <NavLink label='Engineer Tools'>
            <NavLink href="/" label="Battery Calculator" component={Link} leftSection={<IconGalaxy size="1rem" stroke={1.5} />}/>
          </NavLink>
        </AppShell.Section>

        <AppShell.Section py="xl">
          <Divider mb="xl" />
          Navbar Footer - At bottom
        </AppShell.Section>
      </AppShell.Navbar>
    </AppShell.Navbar>
  )
}