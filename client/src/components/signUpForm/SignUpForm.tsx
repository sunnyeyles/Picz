import { useForm } from "@mantine/form";
import {
  TextInput,
  Button,
  Group,
  Container,
  Notification,
  LoadingOverlay,
  Paper,
} from "@mantine/core";
import { useSignupHandler } from "../../hooks/useSignupHandler";

interface ISignupFormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

const SignUpForm = () => {
  const form = useForm<ISignupFormValues>({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });

  const { handleSignup, notification, setNotification, isLoading } =
    useSignupHandler();

  const handleSubmit = async (values: ISignupFormValues) => {
    handleSignup(values);
    form.reset();
  };

  return (
    <Container m="md">
      <LoadingOverlay
        visible={isLoading}
        loaderProps={{ size: "lg", color: "blue" }}
      />
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
            label="Email"
            placeholder="Email"
            {...form.getInputProps("email")}
          />
          <TextInput
            mt="md"
            label="Password"
            placeholder="Password"
            type="password"
            {...form.getInputProps("password")}
          />
          <TextInput
            mt="md"
            label="Confirm Password"
            placeholder="Confirm Password"
            type="password"
            {...form.getInputProps("confirmPassword")}
          />

          <Group justify="center" mt="xl">
            <Button type="submit" loading={isLoading}>
              Sign Up
            </Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
};
export default SignUpForm;
