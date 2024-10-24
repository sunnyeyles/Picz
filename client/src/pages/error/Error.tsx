import { Overlay, Container, Title, Button, Text } from "@mantine/core";
import classes from "./error.module.css";

const Error = () => {
  return (
    <div className={classes.hero}>
      <Overlay
        // gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.91) 0%, rgba(0, 0, 0, .91) 40%)"
        gradient="linear-gradient(180deg, rgba(12, 20, 20, 0.99) 0%, rgba(3, 3, 3, .95) 45%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="md">
        <Title className={classes.title}>
          A fully featured React components library
        </Title>
        <Text className={classes.description} size="xl" mt="xl">
          Build fully functional accessible web applications faster than ever –
          Mantine includes more than 120 customizable components and hooks to
          cover you in any situation
        </Text>

        <Button size="xl" radius="xl" className={classes.control}>
          Get started
        </Button>
      </Container>
    </div>
  );
};
export default Error;
