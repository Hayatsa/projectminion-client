import React, { useState, useEffect } from "react";
import { Card, CardGroup, Button, ListGroup, Nav } from "react-bootstrap";
import { useParams, Link } from "react-router-dom"
import { getProjectById, getProjects } from "./ProjectManager";
import { deleteTask } from "../task/TaskManager";

export const ProjectCard = () => {
    const {projectId} = useParams();
    

    const [ project, setProject ] = useState([{
        title: "",
        description: "",
        date: "",
        tasks: [{
            title: "",
            note: "",
            date: ""
        }],
    }])


    useEffect(() => {
        getProjectById(projectId).then(data => setProject(data))
    }, [])

    const taskList = project.tasks?.map(task =>
        <CardGroup >
            <Card border="info">
                <Card.Body>
                    <Card.Subtitle>{task.title}</Card.Subtitle>
                    <Card.Text className="mb-2 text-muted" style={{fontSize:"12px"}}>{task.date}</Card.Text>
                    <Card.Text style={{fontSize:"14px"}}>Note: {task.note}</Card.Text>
                    <Card.Text className="text-center">
                        <Link to={`projects/${project.id}`}>
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
                <Card.Title className="text-center">{project.title} </Card.Title>
                <Card.Subtitle className="mb-2 text-muted text-center" style={{fontSize:"12px"}}> Date: {project.date} </Card.Subtitle>
                <Card.Text style={{fontSize:"15px"}}> Description: {project.description} </Card.Text>
                <Card.Header style={{fontSize:"20px"}}>Tasks <Button variant="outline-success" size="sm"  href="/tasks/new"> + </Button></Card.Header>
                <Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>
                            {taskList}
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
                <Card.Footer className="text-center">
                    <Link to={`projects/${project.id}/update`}><Button variant="warning" size="sm"> Edit Project </Button></Link>
                </Card.Footer>
            </Card.Body>
        </Card>
      );
}