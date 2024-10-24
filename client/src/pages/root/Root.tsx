import { Outlet } from "react-router-dom";
import { Flex, Box, em } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import classes from "./root.module.css";
import { Shell } from "../../components/appShell/AppShell";
import { Footer } from "../../components/footer/Footer";

const Root = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

  return (
    <Box>
      <Shell />
      <Box>
        <Flex
          mih="calc(100vh - 60px)"
          gap="md"
          justify="center"
          align="center"
          direction="column"
          wrap="wrap"
          className={isMobile ? classes.mobile : classes.desktop}
        >
          <Outlet />
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};
export default Root;
