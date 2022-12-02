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
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { showNotification } from "@mantine/notifications";
// import useFetch from "../hooks/useFetch";
import { failNotification, successNotification } from "../constants";
function Login() {
  const navigate = useNavigate();
  // const { data: quote, loading, error } = useFetch('http://127.0.01:8000/api/login')
  const [loading, setloading] = useState(false);
  const [credentials, setCredentials] = React.useState({
    username: "",
    password: "",
  });
  const loginUser = async () => {
    console.log("logged in");
    setloading(true);
    try {
      const { data, status } = await axios.post(
        "http://127.0.0.1:8000/api/login/",
        credentials
      );
      console.log(data);
      console.log(status);
      if (status > 400) {
        failNotification("Error", "Invalid Credentials");
      } else {
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
      failNotification("Error", error.message);
    }
    setloading(false);
  };
  return (
    <div className="d-flex justify-content-center align-items-center flex-column full-height">
      <LoadingOverlay visible={loading} overlayBlur={2} />
      <Text component="h1" size={"xl"} align="center">
        <Text weight={600} component="span">
          {" "}
          &nbsp;STORE
        </Text>
        SOFTWARE
      </Text>
      <Container p={20} mt={14} className="bg-white w-35 box-hover rounded">
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
      </Container>
    </div>
  );
}

export default Login;
