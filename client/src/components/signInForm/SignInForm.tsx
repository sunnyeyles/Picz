import { useForm } from "@mantine/form";
import {
  TextInput,
  Button,
  Group,
  Container,
  Notification,
  Box,
  Paper,
} from "@mantine/core";
import { useSigninHandler } from "../../hooks/useSigninHandler";

interface ISignInFormValues {
  username: string;
  password: string;
}

export const SignInForm = () => {
  const form = useForm<ISignInFormValues>({
    initialValues: {
      username: "",
      password: "",
    },
  });

  const { handleSignin, notification, setNotification } = useSigninHandler();

  const handleSubmit = async (values: ISignInFormValues) => {
    console.log("Handle submit invoked");
    await handleSignin(values, form.reset);
  };

  return (
    <Container m="md">
      {notification && (
        <Notification
          color={notification.color}
          onClose={() => setNotification(null)}
        >
          {notification.message}
        </Notification>
      )}
      <Paper bd=".1px solid gray.8" p="md" radius="sm" shadow="xl">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            mt="md"
            label="Username"
            placeholder="Username"
            {...form.getInputProps("username")}
          />
          <TextInput
            mt="md"
            label="Password"
            placeholder="Password"
            type="password"
            {...form.getInputProps("password")}
          />
          <Group justify="center" mt="xl">
            <Button type="submit">Sign In</Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
};
