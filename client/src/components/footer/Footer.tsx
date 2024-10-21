import { Container, Group, Anchor } from "@mantine/core";
import classes from "./footer.module.css";
import { Logo } from "../logo/Logo";
const links = [
  { link: "#", label: "Contact" },
  { link: "#", label: "Privacy" },
  { link: "#", label: "Blog" },
  { link: "#", label: "Careers" },
];

export const Footer = () => {
  const items = links.map((link) => (
    <Anchor<"a">
      c="dimmed"
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Logo width="35" height="35" />
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
};
