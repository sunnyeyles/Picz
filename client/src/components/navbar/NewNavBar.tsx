import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Text } from "@mantine/core";
import { useLogoutHandler } from "../../hooks/useLogoutHandler";
import {
  IconShoppingCart,
  IconLicense,
  IconMessage2,
  IconMessages,
  IconFileAnalytics,
  IconReceiptRefund,
  IconLogout,
  IconSwitchHorizontal,
  IconUser,
} from "@tabler/icons-react";
import classes from "./newnavbar.module.css";

const navValues = [
  { label: "Orders", icon: IconShoppingCart, route: "/" },
  { label: "Receipts", icon: IconLicense, route: "/signin" },
  { label: "Reviews", icon: IconMessage2, route: "/signup" },
  { label: "Messages", icon: IconMessages, route: "/" },
  { label: "User", icon: IconUser, route: "/userdetails" },
  { label: "Refunds", icon: IconReceiptRefund, route: "/" },
  { label: "Files", icon: IconFileAnalytics, route: "/" },
];
interface INavBarProps {
  toggleNavbar: () => void;
}

export const NewNavBar = ({ toggleNavbar }: INavBarProps) => {
  const navigate = useNavigate();
  const logout = useLogoutHandler();
  const handleLogout = () => {
    logout();
    navigate("/signup");
    toggleNavbar();
  };

  const [active, setActive] = useState("Billing");

  const links = navValues.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
        navigate(item.route);
        toggleNavbar();
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div>
        <Text fw={500} size="sm" className={classes.title} c="dimmed" mb="xs">
          bgluesticker@mantine.dev
        </Text>
      </div>

      <div className={classes.navbarMain}>{links}</div>

      <div className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={(event) => {
            event.preventDefault();
            toggleNavbar();
          }}
        >
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a href="#" className={classes.link} onClick={handleLogout}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
};
