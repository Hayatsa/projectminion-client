import React, { useState, useEffect } from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom"
import { getProjectById } from "./ProjectManager";

export const ProjectCard = () => {
    const {projectId} = useParams();

    const [ project, setProject ] = useState([])

    useEffect(() => {
        getProjectById(projectId).then(data => setProject(data))
    }, [])

    // const taskList = project.map(project => 
    //     <ListGroup.Item key={`project--${project.id}`} className="tasks">
    //           {project.title} 
    //     </ListGroup.Item>
    // )
    

    return (
        <Card style={{ width: '50rem'}}>
            <Card.Body>
                <Card.Title> {project.title} </Card.Title>
                <Card.Subtitle className="mb-2 text-muted"> Date: {project.date} </Card.Subtitle>
                <Card.Text> {project.description} </Card.Text>
                <Card.Header>Tasks</Card.Header>
                <ListGroup>
                    <ListGroup.Item>tasks</ListGroup.Item>
                </ListGroup>
                <Button variant="success" href="/tasks/new"> Add Task </Button>
                <Button variant="warning" href=""> Edit Project </Button>
            </Card.Body>
        </Card>
      );
}