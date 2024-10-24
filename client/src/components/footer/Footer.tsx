import { Container, Group, Anchor } from "@mantine/core";
import classes from "./footer.module.css";
import { Logo } from "../logo/Logo";
const links = [
  { link: "#", label: "Contact" },
  { link: "#sunyeyles.com", label: "sunnyeyles.com" },
];

export const Footer = () => {
  const items = links.map((link) => (
    <Anchor<"a">
      c="dimmed"
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
      key={link.label}
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Container visibleFrom="sm">
          <Logo width="22" height="22" />
        </Container>
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
};
