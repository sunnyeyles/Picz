import { AppShell, Burger, Group, Skeleton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NewNavBar } from "../navbar/NewNavBar";
import { MantineLogo } from "@mantinex/mantine-logo";
import { Logo } from "../../assets/Logo";

export const Shell = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Logo width="35" height="28" pFontSize="28" iczFontSize="24" />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <NewNavBar toggleNavbar={toggle} />
      </AppShell.Navbar>
    </AppShell>
  );
};
