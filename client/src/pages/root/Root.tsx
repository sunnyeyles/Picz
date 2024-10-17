import { Outlet } from "react-router-dom";
import { Flex } from "@mantine/core";
import { Box } from "@mantine/core";
import { Shell } from "../../components/appshell/AppShell";
import { Footer } from "../../components/footer/Footer";
import { Logo } from "../../assets/Logo";
export const Root = () => {
  return (
    <Box>
      <Shell />
      <Flex
        mih="calc(100vh - 60px)"
        gap="md"
        justify="center"
        align="center"
        direction="column"
        wrap="wrap"
      >
        <Outlet />
      </Flex>
      <Footer />
    </Box>
  );
};
