import React from "react";
import { Button, createStyles, Image, Paper, Text } from "@mantine/core";
function HomeUICard() {
  const useStyles = createStyles((theme) => ({
    // Paper
    articleCard: {
      background: "#17A2B8",
      color: "white",
      height: "120px",
      width: "45vw",
      maxWidth:"250px",
      position: "relative",
      overflow: "hidden",
      transition: "transform 150ms ease, box-shadow 100ms ease",
      "&:hover": {
        boxShadow: theme.shadows.md,
      },

      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        width: 6,
        backgroundImage: theme.fn.linearGradient(0, "#75d7f5", "#17A2B8"),
      },
    },
  }));
  const { classes, theme } = useStyles();
  return (
    <Paper withBorder radius="md" className={classes.articleCard}>
      <Text
        ml={15}
        style={{
          fontSize: "1.8rem",
        }}
        size="xl"
        weight={600}
      >
        9200
      </Text>
      <Text ml={15} size="sm">
        Inward
      </Text>

      <Button
        color={"#17A2B8"}
        size="xs"
        className="w-100"
        style={{
          bottom: 0,
          position: "absolute",
          background: "#75d7f5",
        }}
        onClick={() => {}}
      >
        Inward / Purchase Entry
      </Button>
    </Paper>
  );
}

export default HomeUICard;
