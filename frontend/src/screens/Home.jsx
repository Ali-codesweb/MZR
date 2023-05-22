import { SimpleGrid } from "@mantine/core";
import React from "react";
import { useMainStore } from "../store";
import HomeUICard from "../components/HomeUICard";
function Home() {
  const token = useMainStore((state) => state?.token);
  const role = useMainStore((state) => state?.role);
  return (
      <div>
        <SimpleGrid
          cols={4}
          breakpoints={[
            { maxWidth: "xs", cols: 2, spacing: "md" },
            { maxWidth: "md", cols: 3, spacing: "sm" },
            { maxWidth: "xl", cols: 4, spacing: "sm" },
          ]}
        >
          <div>{role}</div>
          <HomeUICard />
          <HomeUICard />
          <HomeUICard />
          <HomeUICard />
          <HomeUICard />
        </SimpleGrid>
      </div>
  );
}

export default Home;
