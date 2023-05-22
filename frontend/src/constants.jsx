import { showNotification } from "@mantine/notifications";
import axios from "axios";
import {

  IconGauge,

} from "@tabler/icons";
const getLocalStorageToken = () =>
  "Bearer " +
  (sessionStorage.getItem("mzr_token") !== undefined
    ? JSON.parse(sessionStorage.getItem("mzr_token"))
    : "");
export const axiosGet = async (url) => {
  try {
    const { data } = await axios.get(customURL + url, {
      headers: {
        Authorization: getLocalStorageToken(),
      },
    });
    return data;
  } catch (error) {
    failNotification("Error", error.message);
  }
};
export const axiosPost = async (url, body) => {
  try {
    const { data } = await axios.post(customURL + url, body, {
      headers: {
        Authorization: getLocalStorageToken(),
        "Content-type": "application/json",
      },
    });

    return data;
  } catch (error) {
    failNotification("Error", error.message);
  }
};

export const axiosPut = async (url, body) => {
  try {
    const { data } = await axios.put(customURL + url, body, {
      headers: {
        Authorization: "Bearer " + getLocalStorageToken(),
      },
    });
    return data;
  } catch (error) {
    failNotification("Error", error.message);
  }
};

export const axiosDelete = async (url) => {
  try {
    const { data } = await axios.delete(customURL + url, {
      headers: {
        Authorization: getLocalStorageToken(),
      },
    });
    return data;
  } catch (error) {
    failNotification("Error", error.message);
  }
};

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

export const customNotification = (title, message) => {
  showNotification({
    message,
    title,
    color: title == "Error" ? "red" : title == "Warning" ? "yellow" : "green",
  });
};
// export const customURL =
  // "https://9d2b-2405-205-1203-ad3b-591b-9b49-8855-f51c.ap.ngrok.io/";
export const customURL = window.location.origin + "/";
export const viceManagerData = [
  { label: "Maintenance", icon: IconGauge, link: "/vice-manager/maintenance" },
  { label: "Transfer", icon: IconGauge, link: "/vice-manager/transfer" },
  { label: "IT", icon: IconGauge, link: "/vice-manager/it" },
  { label: "PR", icon: IconGauge, link: "/vice-manager/pr" },
  { label: "Mannat", icon: IconGauge, link: "/vice-manager/mannat" },
  { label: "Accounts", icon: IconGauge, link: "/vice-manager/accounts" },
  { label: "Faiz", icon: IconGauge, link: "/vice-manager/faiz" },
];
export const storeManagerData = [
  {
    label: "Allocate Budget",
    icon: IconGauge,
    link: "/store-manager/allocate-budget",
  },
];
export const faizData = [
  {
    label: "Faiz",
    icon: IconGauge,
    link: "/faiz/Home",
  },
];