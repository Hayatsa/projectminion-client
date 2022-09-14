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
            </Card.Header>
            <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="success" href="/tasks/new"> Add Task </Button>
                <Button variant="warning" href=""> Edit Project </Button>
            </Card.Body>
        </Card>
      );
}