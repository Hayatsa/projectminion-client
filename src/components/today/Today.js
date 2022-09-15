import React, { useEffect, useState } from "react"
import { Card, Button, CardGroup, ListGroup } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import { useHistory } from 'react-router-dom'
import { getTasksByDate, getTasks, deleteTask } from "../task/TaskManager"

export const Today = () => {
    const [ tasks, setTasks ] = useState([])
    const {taskDate} = useParams();

    useEffect(() => {
        getTasks().then(data => setTasks(data))
    }, [])

    const todayTasks =tasks.map(task =>
        <CardGroup >
            <Card >
                <Card.Body>
                    <Card.Subtitle>{task.title}</Card.Subtitle>
                    <Card.Text className="mb-2 text-muted" style={{fontSize:"12px"}}>{task.date}</Card.Text>
                    <Card.Text style={{fontSize:"14px"}}>Note: {task.note}</Card.Text>
                    <Card.Text className="text-center">
                        <Link to={`tasks/${task.id}`}>
                            <Button variant="outline-danger" size="sm" onClick={() => {deleteTask(task.id)}}>x</Button>
                        </Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    )

    return (
        <Card >
            <Card.Body>
                <Card.Title className="text-center"> Today </Card.Title>
                <Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>
                            {todayTasks}
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card.Body>
        </Card>
    )
}
