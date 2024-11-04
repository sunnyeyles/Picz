import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Text } from "@mantine/core";
import { useLogoutHandler } from "../../hooks/useLogoutHandler";
import {
  IconLogout,
  IconUser,
  IconPhotoUp,
  IconLibraryPhoto,
  IconSettings,
} from "@tabler/icons-react";
import classes from "./newnavbar.module.css";

const navValues = [
  { label: "Upload Image", icon: IconPhotoUp, route: "/imageupload" },
  { label: "My Images", icon: IconLibraryPhoto, route: "/myimages" },
  { label: "User", icon: IconUser, route: "/userdetails" },
  { label: "Settings", icon: IconSettings, route: "/" },
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
          sunnyeyles@gmail.com
        </Text>
      </div>

      <div className={classes.navbarMain}>{links}</div>

      <div className={classes.footer}>
        <a href="#" className={classes.link} onClick={handleLogout}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
};
