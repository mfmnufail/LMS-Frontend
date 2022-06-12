import React, { useState, useEffect } from "react";
import { Button, Form, Input, Table , Divider, Message} from "semantic-ui-react";
import axios from "axios";

const Student = () => {
  const [batch, setBatch] = useState("");
  const [name, setName] = useState("");
  const [reg, setReg] = useState("");
  const [students, setStudents] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    axios.get("https://localhost:5001/student").then((response) => {
      setStudents(response.data);
      console.log(response.data);
    });
  }, []);
  
  const submitHandler=(event)=>{
    event.preventDefault();
    const data = {
      name: name,
      regNo: reg,
      batch:  parseInt(batch)
    }

    axios.post("https://localhost:5001/student", data)
    .catch(err => {
      setError(err.response.data.errors);
    });
    

  }

  const deleteHandler=(id)=>{
    axios.delete(`https://localhost:5001/student/${id}`)
    .then((response) => {
      console.log(response.data);

    });
  }



  return (
    <div>
      <Form onSubmit={submitHandler}>
        <Form.Field>
          <label>Name</label>
          <input name="name" placeholder="Name with initial" onChange={(e)=> setName(e.target.value)} autoComplete="off" />
        </Form.Field>
        <Form.Field>
          <label>Batch</label>
          <input
            name="batch"
            placeholder="Batch"
            onChange={(e) => setBatch(e.target.value)}
            autoComplete="off"
          />
        </Form.Field>
        <Form.Field>
          <label>Registration Number</label>
          <Input name="reg" label={`EG/20${batch - 2}/`} placeholder="Last 4 digits" onChange={(e)=>setReg(e.target.value)} autoComplete="off" />
        </Form.Field>

        <Button primary type="submit">Submit</Button>
        {error && <Message negative>
          <Message.Header>{error}</Message.Header>
        </Message>}
      </Form>

      <Divider horizontal>table</Divider>

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>No</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Registration Number</Table.HeaderCell>
            <Table.HeaderCell>Batch</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>

          {students.map((row,index)=>(

          <Table.Row>
            <Table.Cell>{index+1}</Table.Cell>
            <Table.Cell>{row.name}</Table.Cell>
            <Table.Cell>{row.regNo}</Table.Cell>
            <Table.Cell>{row.batch}</Table.Cell>
            <Table.Cell>
            <Button onClick={()=>deleteHandler(row.regNo)} negative>Delete</Button>
            </Table.Cell>
          </Table.Row>

          ))}


        </Table.Body>
      </Table>
    </div>
  );
};

export default Student;
