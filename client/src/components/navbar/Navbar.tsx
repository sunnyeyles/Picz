import { useState } from "react";
import { Tooltip, UnstyledButton, Stack, rem } from "@mantine/core";
import { useLogoutHandler } from "../../hooks/useLogoutHandler";
import { useNavigate } from "react-router-dom";
import { LogOutBtn } from "../ui/LogOutBtn";
import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal,
} from "@tabler/icons-react";
import classes from "./navbar.module.css";

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  onClick?(): void;
}
const NavbarLink = ({
  icon: Icon,
  label,
  active,
  onClick,
}: NavbarLinkProps) => {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton
        onClick={onClick}
        className={classes.link}
        data-active={active || undefined}
      >
        <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
};

const mockdata = [
  { icon: IconHome2, label: "Home", path: "/" },
  { icon: IconGauge, label: "Dashboard", path: "/" },
  { icon: IconDeviceDesktopAnalytics, label: "Analytics", path: "/" },
  { icon: IconCalendarStats, label: "Releases", path: "/" },
  { icon: IconUser, label: "Account", path: "/userdetails" },
  { icon: IconFingerprint, label: "Security", path: "/" },
  { icon: IconSettings, label: "Settings", path: "/" },
];

export const Navbar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(2);
  const handleLogout = useLogoutHandler();

  const onLogoutClick = () => {
    handleLogout();
  };

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => {
        setActive(index);
        navigate(link.path);
      }}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>
      <LogOutBtn />
      <Stack justify="center" gap={0}>
        <NavbarLink icon={IconSwitchHorizontal} label="Change account" />
        <NavbarLink icon={IconLogout} label="Logout" onClick={onLogoutClick} />
      </Stack>
    </nav>
  );
};
