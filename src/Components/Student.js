import React, { useState } from "react";
import { Button, Form, Input, Table , Divider} from "semantic-ui-react";

const Student = () => {
  const [batch, setBatch] = useState("");
  const [name, setName] = useState("");
  const [reg, setReg] = useState("");
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("https://localhost:5001/student").then((response) => {
      console.log(response.data);
      setStudents(response.data);
    });
  }, [student]);
  
  const submitHandler=(event)=>{
    event.preventDefault();
    const data = {
      name: name,
      regNo: reg,
      batch:  partseInt(batch)
    }

    axios.post("https://localhost:5001/student", data).then((res) => {
      console.log(res.data);
    });
  }



  return (
    <div>
      <Form onSubmit={submitHandler}>
        <Form.Field>
          <label>Name</label>
          <input placeholder="Name with initial" onChange={(e)=> setName(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Batch</label>
          <input
            placeholder="Batch"
            onChange={(e) => setBatch(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Registration Number</label>
          <Input label={`EG/20${batch - 2}/`} placeholder="Last 4 digits" onChange={(e)=>setReg(e.target.value)} />
        </Form.Field>

        <Button type="submit">Submit</Button>
      </Form>

      <Divider horizontal>table</Divider>

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>No</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Registration Number</Table.HeaderCell>
            <Table.HeaderCell>Batch</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>Nufail M.F.M</Table.Cell>
            <Table.Cell>EG/2017/3254</Table.Cell>
            <Table.Cell>19</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default Student;
