import { showNotification } from "@mantine/notifications";

export const successNotification = (title, message) => {
  showNotification({
    message,
    title,
    color: "green",
  });
};
export const failNotification = (title, message) => {
  showNotification({
    message,
    title,
    color: "red",
  });
};
