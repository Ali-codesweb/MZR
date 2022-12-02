import React, { useState } from "react";
import {
  Navbar,
  Group,
  Code,
  ScrollArea,
  createStyles,
  AppShell,
  Text,
  MediaQuery,
  Header,
  Burger,
  Drawer,
  Button,
} from "@mantine/core";
import { UserButton } from "./UserButton";
import { LinksGroup } from "./NavbarLinksGroup";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
} from "@tabler/icons";
import { useNavigate } from "react-router-dom";

const mockdata = [
  { label: "Dashboard", icon: IconGauge },
  {
    label: "A/C MAster Entry",
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: "Company Master", link: "/" },
      { label: "Purchase Party Master", link: "/" },
      { label: "Staff Master", link: "/" },
      { label: "Location Master", link: "/" },
      { label: "Purpose Master", link: "/" },
      { label: "Purchase Party Section", link: "/" },
    ],
  },
  {
    label: "Item Master Entry",
    icon: IconCalendarStats,
    links: [
      { label: "Item Group", link: "/" },
      { label: "Item Category", link: "/" },
      { label: "Unit Master", link: "/" },
      { label: "Item Brand", link: "/" },
      { label: "Rack 1", link: "/" },
      { label: "Rack 2", link: "/" },
      { label: "Rack 3", link: "/" },
      { label: "Item Master", link: "/" },
    ],
  },
  { label: "Analytics", icon: IconPresentationAnalytics },
  { label: "Contracts", icon: IconFileAnalytics },
  { label: "Settings", icon: IconAdjustments },
  {
    label: "Security",
    icon: IconLock,
    links: [
      { label: "Enable 2FA", link: "/" },
      { label: "Change password", link: "/" },
      { label: "Recovery codes", link: "/" },
    ],
  },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colors.dark[6],
    paddingBottom: 0,
    position: "sticky",
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    color: theme.white,
    borderBottom: `1px solid ${theme.colors.dark[4]}`,
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    height: "400px",
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    backgroundColor: theme.colors.dark[6],
    color: "#e9ecef",
  },

  footer: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

function AppBar({ children }) {
  const smallScreen = useMediaQuery("(max-width: 576px)");
  const { classes } = useStyles();
  const links = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);
  function logout() {
    navigate("/");
  }
  return (
    <>
      {smallScreen ? (
        <Header height={{ base: 50, md: 70 }} className="dark-bg" p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
            classeName="bg-dark"
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={"gray"}
                mr="xl"
              />
            </MediaQuery>

            <Text size="xl" component="h1">
              Test Software
            </Text>
          </div>
          <Drawer
            classeName="bg-dark"
            opened={opened}
            onClose={() => setOpened(false)}
            size="sm"
          >
            <Button onClick={logout} color="red" mb={20}>
              Logout
            </Button>
            <ScrollArea style={{ height: 600 }}>
              <div className={classes.linksInner}>{links}</div>
            </ScrollArea>
          </Drawer>
        </Header>
      ) : null}
      <div className="d-flex">
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Navbar
            // height={800}
            width={{ sm: 300 }}
            p="md"
            className={classes.navbar}
          >
            <Navbar.Section className={classes.header}>
              <Group position="apart">
                <Text>Test Software</Text>
                {/* <Logo width={120} /> */}
              </Group>
            </Navbar.Section>

            <Navbar.Section
              grow
              className={classes.links}
              component={ScrollArea}
            >
              <div className={classes.linksInner}>{links}</div>
            </Navbar.Section>
            <Button onClick={logout} color="red.9" mt={20}>
              Logout
            </Button>
          </Navbar>
        </MediaQuery>

        <div className="p-4">{children}</div>
      </div>
    </>
  );
}

export default AppBar;
