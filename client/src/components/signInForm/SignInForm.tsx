import { useForm } from "@mantine/form";
import {
  TextInput,
  Button,
  Group,
  Container,
  Notification,
  Paper,
  LoadingOverlay,
} from "@mantine/core";
import { useSigninHandler } from "../../hooks/useSigninHandler";

interface ISignInFormValues {
  username: string;
  password: string;
}

const SignInForm = () => {
  const form = useForm<ISignInFormValues>({
    initialValues: {
      username: "",
      password: "",
    },
  });

  const { handleSignin, notification, setNotification, isLoading } =
    useSigninHandler();

  const handleSubmit = async (values: ISignInFormValues) => {
    await handleSignin(values);
    form.reset();
  };

  return (
    <Container m="md">
      <LoadingOverlay visible={isLoading} />

      {notification && (
        <Notification
          color={notification.color}
          onClose={() => setNotification(null)}
        >
          {notification.message}
        </Notification>
      )}
      <Paper bd="1px solid blue.8" p="lg" radius="sm">
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
export default SignInForm;
