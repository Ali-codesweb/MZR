import {
  Button,
  Group,
  Indicator,
  Center,
  Loader,
  LoadingOverlay,
  RingProgress,
  Select,
  Table,
  Text,
  TextInput,
} from "@mantine/core";
import React, { useState } from "react";
import {
  axiosGet,
  axiosPost,
  customNotification,
  failNotification,
  successNotification,
} from "../../constants";
import { useMainStore } from "../../store";

function SMALllocateBudget() {
  const allocated_budget = useMainStore((state) => state.allocated_budget);
  const setTotalBudget = useMainStore((state) => state.setTotalBudget);
  const [amount, setamount] = useState(0);
  const [idarah, setidarah] = useState("");
  const [loading, setloading] = useState(false);
  const [budgetList, setbudgetList] = useState([]);
  React.useEffect(() => {
    setloading(true);
    axiosGet("core/store-manager/get-total-allocated-budget/").then((e) => {
      setbudgetList(e);
      setloading(false);
    });
  }, []);
  const allocateBudget = async () => {
    if (idarah == "")
      return customNotification("Warning", "Provide and Idarah");
    const data = await axiosPost("/core/store-manager/allocate-budget/", {
      amount,
      idarah,
    });
    if (data["status"] > 400) failNotification("Error", data["message"]);
    else {
      successNotification("Success", data["message"]);
      setTotalBudget(amount);
      setbudgetList([
        ...budgetList,
        {
          id: data["data"]["id"],
          idarah: data["data"]["idarah"],
          amount: data["data"]["amount"],
        },
      ]);
      setamount(0);
    }
  };
  return (
    <div>
      <Text size="xl" mt={30}>
        {" "}
        Available Budget :{" "}
        <Text component="span" weight={700} color="green">
          &#8377; {allocated_budget}
        </Text>
      </Text>
      <Text mt={40} size="xl">
        Allocate Budget :{" "}
      </Text>
      <Group spacing={"xl"} mt={10} align="end">
        <TextInput
          value={amount}
          onChange={(e) => setamount(e.target.value)}
          label={"Amount"}
          type="number"
          icon={<span>&#8377;</span>}
        />
        <Select
          value={idarah}
          onChange={(e) => setidarah(e)}
          data={[
            { label: "Construction", value: "construction" },
            { label: "Hakimi", value: "hakimi" },
            { label: "Burhani", value: "burhani" },
            { label: "Mohamedi", value: "mohammedi" },
            { label: "Ezzi", value: "ezzi" },
            { label: "Johar", value: "johar" },
            { label: "Zainabiyah", value: "zainabiyah" },
            { label: "Vajihi", value: "vajihi" },
            { label: "Other", value: "other" },
          ]}
          placeholder="Pick Idarah"
          label="Idarah's"
          withAsterisk
        />
        <Button radius={"md"} onClick={allocateBudget}>
          Allocate Budget
        </Button>
      </Group>
      {loading ? (
        <Center>
          <Loader />
        </Center>
      ) : (
        <Table mt={30} striped highlightOnHover withBorder>
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {budgetList?.map((element) => (
              <tr key={element.id}>
                <td>{element.id}</td>
                <td>{element.idarah}</td>
                <td> &#8377; {element.amount}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default SMALllocateBudget;
