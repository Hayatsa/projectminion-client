import React, { useState, useEffect } from "react";
import { Card, Nav, Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom"
import { getProjectById, getProjects } from "./ProjectManager";

export const ProjectCard = () => {
    const {projectId} = useParams();

    const [ project, setProject ] = useState({
        title: "",
        description: "",
        date: ""
    })

    const loadProject = () => {
        return getProjectById(projectId)
            .then(data => {
                setProject(data)
            })
    }

    useEffect(() => {
        loadProject()
        console.log(project)
    }, [])

    return (
        <Card>
            <Card.Header>
                Date: {project.date}
                <Nav variant="outline-warning">
                    <Nav.Item>
                        <Nav.Link href="#">Edit</Nav.Link>
                    </Nav.Item>
                </Nav> 
            </Card.Header>
            <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="success" href="#"> Add Task </Button>
            </Card.Body>
        </Card>
      );
}