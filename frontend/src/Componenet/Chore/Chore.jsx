import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';

export default function Chore({ item, handleChoreDelete, handleChoreUpdate, handleDone }) {
  const [open, setOpen] = useState(false);
  const [updateChore, setUpdateChore] = useState({'chore':''})
  let done = false
  if(item.done){
    done = true
  }
  else{
    done = false
  }
  function handleDelete(id) {
    handleChoreDelete(id);
  }
  function handleUpdate() {
    setOpen(false)
    handleChoreUpdate(updateChore,item.id)
  }
  function handleChange(e){
    setUpdateChore({
        [e.target.name]:e.target.value
    })
  }
  function handleToggle(e){
    handleDone(item.id)
  }

  return (
    <>
      {item.chore}
      <button onClick={() => handleDelete(item.id)}>X</button>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </Button>
      <Form>
          <Form.Check 
            type='checkbox'
            label='Done'
            name="doneCheck"
            checked={done}
            onChange={handleToggle}
          />
        </Form>
      <Collapse in={open}>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Edit Todo</Form.Label>
        <Form.Control onChange={handleChange} type="text" name="chore" value={updateChore.chore} placeholder="Type Edit In" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Button variant="primary" onClick={handleUpdate}>
        Submit
      </Button>
      </Form>
      </Collapse>
    </>
  );
}
