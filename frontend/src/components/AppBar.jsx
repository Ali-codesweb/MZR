import React, { useEffect, useState } from "react";
import {
  Navbar,
  Group,
  ScrollArea,
  createStyles,
  Text,
  MediaQuery,
  Header,
  Burger,
  Drawer,
  Button,
  ActionIcon,
  Container,
} from "@mantine/core";
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
  IconLogout,
} from "@tabler/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { useMainStore } from "../store";
import { storeManagerData, viceManagerData, faizData } from "../constants";

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
    // height:'100%',
    paddingBottom: 0,
    position: "sticky",
    top: "0",
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
  const location = useLocation();
  const smallScreen = useMediaQuery("(max-width: 576px)");
  const { classes } = useStyles();
  const removeToken = useMainStore((state) => state.removeToken);
  const [navbarData, setnavbarData] = useState([]);
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);
  const links = navbarData.map((item) => (
    <LinksGroup setOpened={setOpened} {...item} key={item.label} />
  ));

  useEffect(() => {
    if (location.pathname.split("/")[1] == "vice-manager")
      setnavbarData(viceManagerData);
    if (location.pathname.split("/")[1] == "store-manager")
      setnavbarData(storeManagerData);
    if (location.pathname.split("/")[1] == "faiz") setnavbarData(faizData);
  }, [location.pathname]);
  function logout() {
    sessionStorage.removeItem("mzr_token");
    removeToken();
    navigate("/");
  }
  return (
    <>
      {smallScreen && location.pathname != "/" ? (
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
          <Drawer opened={opened} onClose={() => setOpened(false)} size="sm">
            <div className="dark-bg">
              <ActionIcon
                color="red"
                onClick={logout}
                mb={20}
                className="mx-auto"
              >
                <IconLogout size={28} />
              </ActionIcon>
              <ScrollArea style={{ height: 600 }}>
                <div className={classes.linksInner}>{links}</div>
              </ScrollArea>
            </div>
          </Drawer>
        </Header>
      ) : null}
      {location.pathname != "/" ? (
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

          <Container px={20} py={10} mx={0} className=" w-100">
            {children}
          </Container>
        </div>
      ) : (
        <div>{children} dsd</div>
      )}
    </>
  );
}

export default AppBar;
