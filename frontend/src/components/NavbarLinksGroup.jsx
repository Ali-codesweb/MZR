import { useState } from "react";
import {
  Group,
  Box,
  Collapse,
  ThemeIcon,
  Text,
  UnstyledButton,
  createStyles,
} from "@mantine/core";
import {
  IconCalendarStats,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons";
import { useNavigate } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  control: {
    fontWeight: 500,
    display: "block",
    width: "100%",
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    color: theme.colors.gray[4],
    fontSize: theme.fontSizes.sm,

    "&:hover": {
      backgroundColor: theme.colors.gray[8],
      color: theme.white,
    },
  },

  link: {
    fontWeight: 500,
    display: "block",
    textDecoration: "none",
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    paddingLeft: 31,
    marginLeft: 30,
    fontSize: theme.fontSizes.sm,
    color: theme.colors.gray[4],
    borderLeft: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,

    "&:hover": {
      backgroundColor: theme.colors.gray[8],
      color: theme.white,
    },
  },

  chevron: {
    transition: "transform 200ms ease",
  },
}));

export function LinksGroup({
  icon: Icon,
  label,
  initiallyOpened,
  links,
  link: navigateLink,
  setOpened:setDrawerOpened
}) {
  console.log(navigateLink);
  const { classes, theme } = useStyles();
  const navigate = useNavigate();
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const ChevronIcon = theme.dir === "ltr" ? IconChevronRight : IconChevronLeft;
  const items = (hasLinks ? links : []).map((link) => (
    <Text
      className={classes.link}
      key={link.label}
      onClick={(event) => {
        // navigate(link.links);
      }}
    >
      {link.label}
    </Text>
  ));

  return (
    <>
      <UnstyledButton
        onClick={() => {
          setOpened((o) => !o);
          setDrawerOpened(false)
          navigateLink && navigate(navigateLink)
        }}
        className={classes.control}
      >
        <Group position="apart" spacing={0}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ThemeIcon variant="light" size={30}>
              <Icon size={18} />
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>
          {hasLinks && (
            <ChevronIcon
              className={classes.chevron}
              size={14}
              stroke={1.5}
              style={{
                transform: opened
                  ? `rotate(${theme.dir === "rtl" ? -90 : 90}deg)`
                  : "none",
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}

const mockdata = {
  label: "Releases",
  icon: IconCalendarStats,
  links: [
    { label: "Upcoming releases", link: "/" },
    { label: "Previous releases", link: "/" },
    { label: "Releases schedule", link: "/" },
  ],
};

export function NavbarLinksGroup() {
  return (
    <Box
      sx={(theme) => ({
        minHeight: 220,
        padding: theme.spacing.md,
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
      })}
    >
      <LinksGroup {...mockdata} />
    </Box>
  );
}
