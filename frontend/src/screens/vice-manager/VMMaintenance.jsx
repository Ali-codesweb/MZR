import {
  Button,
  Center,
  Container,
  LoadingOverlay,
  Table,
  Text,
  TextInput,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import {
  axiosPost,
  successNotification,
  failNotification,
  axiosGet,
} from "../../constants";

function VMMaintenance() {
  const [budgetlist, setbudgetlist] = useState([]);
  const [loading, setloading] = useState(false)
  useEffect(() => {
    setloading(true)
    axiosGet("core/vice-manager/list-budget/").then((e) => {
      setbudgetlist(e);
      setloading(false)
    });
  }, []);

  const [budget, setbudget] = useState(0);

  const allocateBudget = async () => {
    if (budget == 0) return failNotification("Error", "Allocate some budget ");
    const data = await axiosPost("core/vice-manager/allocate-budget/", {
      amount: budget,
    });
    if (data && data["status"] == 200) {
      successNotification("Success", data["message"]);
      setbudgetlist([...budgetlist, data["data"]]);
      setbudget(0);
    } else failNotification("Error", data["message"]);
  };
  return (
    <div className="mt-5">
      <form className="align-items-center d-flex justify-content-center flex-column">
        <TextInput
          value={budget}
          onChange={(e) => setbudget(e.target.value)}
          radius={"md"}
          type={"number"}
          placeholder="Allocate Budget"
          label="Allocate Budget"
          withAsterisk
          className="w-50"
        />
        <Button onClick={allocateBudget} mt={10}>
          Allocate Budget
        </Button>
      </form>
      <Container>
        <Text weight={700} size="xl" mt={30}>
          Past Allocated Budgets
        </Text>
        <LoadingOverlay visible={loading} />
        <Table mt={10} striped highlightOnHover withBorder>
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {budgetlist?.map((element) => (
              <tr key={element.id}>
                <td>{element.id}</td>
                <td>{element.date}</td>
                <td> &#8377; {element.amount}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default VMMaintenance;
