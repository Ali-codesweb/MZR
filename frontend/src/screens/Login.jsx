import {
  Button,
  Center,
  Container,
  LoadingOverlay,
  PasswordInput,
  Text,
  TextInput,
} from "@mantine/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { showNotification } from "@mantine/notifications";
// import useFetch from "../hooks/useFetch";
import { customURL, failNotification, successNotification } from "../constants";
import { useMainStore } from "../store";
function Login() {
  const setToken = useMainStore((state) => state.setToken);
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [credentials, setCredentials] = React.useState({
    username: "",
    password: "",
  });
  const loginUser = async () => {
    setloading(true);
    console.log(customURL)
    try {
      const { data, status } = await axios.post(
        customURL + "api/login/",
        credentials
      );
      if (status > 400) {
        failNotification("Error", "Invalid Credentials");
      } else {
        sessionStorage.setItem("mzr_token", JSON.stringify(data["token"]));
        sessionStorage.setItem("mzr_role", JSON.stringify(data["role"]));
        sessionStorage.setItem("mzr_allocated_budget", JSON.stringify(data["allocated_budget"]));
        setToken(data["token"], data["role"],data["allocated_budget"]);
        if (data["role"] == "vice-manager") navigate("/vice-manager/home");
        if (data["role"] == "store-manager") navigate("/store-manager/home");
        if (data["role"] == "department-admin" && data['username'] == 'faiz') navigate("/faiz/home");
      }
    } catch (error) {
      failNotification("Error", error.message);
    }
    setloading(false);
  };
  return (
    <Center mt={100} className="d-flex justify-content-center align-items-center flex-column full-height">
      <LoadingOverlay visible={loading} overlayBlur={2} />
      <Text component="h1" size={"xl"} align="center">
        <Text weight={600} component="span">
          {" "}
          &nbsp;STORE
        </Text>
        SOFTWARE
      </Text>
      <Container
        p={20}
        mt={14}
        className="bg-white w-35 box-hover rounded"
        style={{
          minWidth: "350px",
        }}
      >
        <form onSubmit={(e) => e.preventDefault()}>
          <Text className="text-secondary" align="center">
            Sign in for Admin / Technician
          </Text>
          <TextInput
            placeholder="Username"
            className="mt-4"
            label="Username"
            withAsterisk
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
          />
          <PasswordInput
            placeholder="Password"
            label="Password"
            description="Password must include at least one letter, number and special character"
            withAsterisk
            className="mt-4"
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
          <Button
            type="submit"
            variant="gradient"
            className="float-right mt-2"
            onClick={loginUser}
          >
            Login
          </Button>
        </form>
      </Container>
    </Center>
  );
}

export default Login;
