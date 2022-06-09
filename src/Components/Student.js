import React, { useState } from 'react'
import { Button, Form, Input } from 'semantic-ui-react'

const Student = () => {
  const [batch, setBatch] = useState('')

  return(
  <Form>
    <Form.Field>
      <label>Name</label>
      <input placeholder='Name with initial' />
    </Form.Field>
    <Form.Field>
      <label>Batch</label>
      <input placeholder='Batch' onChange={(e)=> setBatch(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <label>Registration Number</label>
      <Input label={`EG/20${batch-2}/`} placeholder='Last 4 digits' />
    </Form.Field>
   
    <Button type='submit'>Submit</Button>
  </Form>
  )
}

export default Student


