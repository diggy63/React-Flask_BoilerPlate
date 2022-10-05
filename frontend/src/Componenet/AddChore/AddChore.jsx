import React, {useState} from 'react'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function AddChore({addChore}){
    const [addToChore, setAddChore] = useState({'chore': ''})

    function handleChange(e){
        setAddChore({
            [e.target.name]:e.target.value
        })
    }

    function handleAdd(){
        addChore(addToChore)
    }

    return(
        <>
      <Form.Label htmlFor="inputPassword5">Add New Todo</Form.Label>
      <Form.Control
        type="text"
        id="inputPassword5"
        value={addChore.chore}
        aria-describedby="passwordHelpBlock"
        name='chore'
        onChange={handleChange}
      />
        <Button onClick={handleAdd}> Add</Button>
    </>

    )
}