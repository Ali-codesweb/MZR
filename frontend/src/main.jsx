import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MantineProvider
  theme={{ loader: 'bars' }}
  >
    <NotificationsProvider position="top-right" autoClose={5000}>
      <App />
    </NotificationsProvider>
  </MantineProvider>
);
