import { SimpleGrid } from "@mantine/core";
import React from "react";
import AppBar from "../components/AppBar";
import HomeUICard from "../components/HomeUICard";
function Home() {
  return (
    <AppBar>
      <div>
        <SimpleGrid
          cols={4}
          breakpoints={[
            { maxWidth: 'xs', cols: 2, spacing: "md" },
            { maxWidth: 'md', cols: 3, spacing: "sm" },
            { maxWidth: 'xl', cols: 4, spacing: "sm" },
          ]}
        >
          <HomeUICard />
          <HomeUICard />
          <HomeUICard />
          <HomeUICard />
          <HomeUICard />
        </SimpleGrid>
      </div>
    </AppBar>
  );
}

export default Home;
