import {
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import { IconLamp2, IconLampOff } from "@tabler/icons-react";
import cx from "clsx";
import classes from "./colorschemetoggle.module.css";

export const ColorSchemeToggle = () => {
  const { setColorScheme } = useMantineColorScheme({ keepTransitions: true });
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <ActionIcon
      onClick={() =>
        setColorScheme(computedColorScheme === "light" ? "dark" : "light")
      }
      variant="default"
      size="xl"
      aria-label="Toggle color scheme"
    >
      <IconLamp2 className={cx(classes.icon, classes.light)} stroke={1.5} />
      <IconLampOff className={cx(classes.icon, classes.dark)} stroke={1.5} />
    </ActionIcon>
  );
};
