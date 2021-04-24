import React, {useState, useEffect} from 'react';
import {Button, Card, Form, Modal, Accordion} from "react-bootstrap";
import DatePicker from "react-datepicker";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";


function FormTodo({ addTodo, handleClose}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        if (!title) return;
        addTodo({title, description, dueDate});
        setTitle("");
        setDescription("");
        setDueDate(new Date())
        handleClose()
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control type="text" className="input" value={title} size="lg"
                              onChange={e => setTitle(e.target.value)} placeholder="Title" />
                <br/>
                <Form.Control as="textarea" rows={5} value={description}
                              onChange={e => setDescription(e.target.value)}
                              placeholder="Description..." />
                <br/>
                <DatePicker  selected={dueDate}
                            onChange={date => setDueDate(date)}
                            minDate={new Date()} isClearable
                            placeholderText="Due Date"
                            dateFormat="MMMM d, yy"
                />
            </Form.Group>
            <Button variant="primary mb-3" type="submit" className='float-right'>
                Submit
            </Button>
        </Form>
    );
}

export default function Todo(){
    const [todos, setTodos] = useState([
        // {
        //     title: "Go to Market",
        //     description: "Buy ingredients to prepare dinner",
        //     completed: false,
        //     dueDate: new Date("2019 12 30")
        // },
        // {
        //     title: "Study",
        //     description: "Read Algebra and History textbook for the upcoming test",
        //     dueDate: new Date("2019 12 30"),
        //     completed: false,
        // },
        // {
        //     title: "return library books",
        //     description: "Go to library to return my books",
        //     dueDate: new Date("2019 12 30"),
        //     completed: true,
        // },
        // {
        //     title: "Article",
        //     description: "Make react and Django project",
        //     dueDate: new Date("2019 12 30"),
        //     completed: false,
        // },
    ]);

    useEffect(() => {
        refreshList()
    });


    const refreshList = () => {
        axios
            .get("/api/todos/")
            .then((res) => setTodos(res.data ))
            .catch((err) => console.log("get error", err));
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const addTodo = todo => {
        const dueDateF = todo.dueDate.toISOString().slice(0,10)
        const newTodo = {...todo, completed: false, dueDate: dueDateF}
        console.log("new todo",newTodo)
        axios.post("/api/todos/", newTodo)
            .then((res) => refreshList())
            .catch((err) => console.log("post err", err))
        console.log(todos)
    };

    const markTodo = index => {
        const newTodos = [...todos];
        newTodos[index].completed = true;
        setTodos(newTodos);
    };

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return(
        <div className="container">
            <h1 className="text-center mb-4">Todo List</h1>
            <div className="row p-3">
                <Button variant="primary" onClick={handleShow} className="mx-auto">
                    Add Task
                </Button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormTodo addTodo={addTodo} handleClose={handleClose} className="col-sm-8"/>
                </Modal.Body>
            </Modal>
            <div>
                {todos.map((todo, index) => (
                    <Card className="px-1 pt-2 my-2" border="info" >
                        <Accordion defaultActiveKey="1">
                            <Card.Title>
                                <Accordion.Toggle as={Button} variant="text" eventKey="0" className="col-sm-9 mr-2">
                                    <span style={{
                                        textDecoration: todo.completed ? "line-through" : "",
                                        float:"left",
                                        fontWeight: 600,
                                        fontSize: "1.2em"
                                    }}
                                          className="col-sm-8 text-left text-truncate">{todo.title}
                                    </span>
                                </Accordion.Toggle>

                                {/*<span className="p-0 text-muted small">{`Due  by: ${todo.dueDate.toISOString().slice(0,10)}`}</span>*/}
                                <span className="float-right">
                                    <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
                                    <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
                                </span>
                            </Card.Title>
                            <Accordion.Collapse eventKey="0">
                                <Card.Text className="m-2 text-muted">{todo.description}</Card.Text>
                            </Accordion.Collapse>
                        </Accordion>


                    </Card>
                ))}
            </div>
        </div>
    );
}
