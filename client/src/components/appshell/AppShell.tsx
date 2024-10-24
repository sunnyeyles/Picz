import { AppShell, Burger, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NewNavBar } from "../navbar/NewNavBar";
import { Logo } from "../logo/Logo";
import { ColorSchemeToggle } from "../colorSchemeToggle/ColorSchemeToggle";

export const Shell = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 250, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <Logo width="35" height="28" pFontSize="28" iczFontSize="24" />
          </Group>
          <ColorSchemeToggle />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <NewNavBar toggleNavbar={toggle} />
      </AppShell.Navbar>
    </AppShell>
  );
};
