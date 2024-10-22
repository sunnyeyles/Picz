import { useForm } from "@mantine/form";
import {
  TextInput,
  Button,
  Group,
  Container,
  Notification,
  LoadingOverlay,
} from "@mantine/core";
import { useSignupHandler } from "../../hooks/useSignupHandler";
import { LoadingSpinner } from "../loadingspinner/LoadingSpinner";

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
  };

  return (
    <Container m="md">
      <LoadingOverlay visible={isLoading} loaderProps={<LoadingSpinner />} />
      {notification && (
        <Notification
          color={notification.color}
          onClose={() => setNotification(null)}
        >
          {notification.message}
        </Notification>
      )}
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
    </Container>
  );
};
export default SignUpForm;
