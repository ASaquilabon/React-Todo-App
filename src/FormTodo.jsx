import React from 'react';
import { Button, Form } from "react-bootstrap";
function FormTodo({ addTodo }) {
    const [value, setValue] = React.useState('')
    const handleSubmit = e => {
        e.preventDefault()
        if(!value) return;
        addTodo(value)
        setValue("")
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>
                    <b>Add Todo</b>
                </Form.Label>
                <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder={"Add new todo"} />
                <Button variant="primary mb-3" type="submit">
                SUBMIT
                </Button>
            </Form.Group>
           
        </Form>
    );
}

export default FormTodo;