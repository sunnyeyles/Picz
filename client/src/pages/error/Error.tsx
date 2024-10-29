import { Overlay, Container, Title, Button, Text } from "@mantine/core";
import classes from "./error.module.css";

const Error = () => {
  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.91) 0%, rgba(0, 0, 0, .91) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="md">
        <Title className={classes.title}>404</Title>
        <Text className={classes.description} size="xl" mt="xl">
          Oops,
        </Text>

        <Button>Go Back</Button>
      </Container>
    </div>
  );
};
export default Error;
