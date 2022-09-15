import { ListGroup, Card } from 'react-bootstrap';
import React, { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom';
import { getProjects } from '../project/ProjectManager';

    

export const SideBar = () => {
    const [ projects, setProjects ] = useState([])
    const history = useHistory()

    useEffect(() => {
        getProjects().then(data => setProjects(data))
    }, [])

    const projectsList = projects.map(project => 
        <ListGroup.Item key={`project--${project.id}`} className="flush" action onClick={() => { history.push({pathname: `projects/${project.id}`})}}>
              {project.title}
        </ListGroup.Item>
    )


    return (
        <Card>
            <ListGroup>
                <ListGroup.Item action onClick={() => { history.push({ pathname: "/today" }) }}> Today </ListGroup.Item>
                <ListGroup.Item action onClick={() => { history.push({ pathname: "/projects/new" }) }}> Projects + </ListGroup.Item>
                <ListGroup.Item className="text-center">
                  {projectsList}
                </ListGroup.Item>
            </ListGroup>
        </Card>
      );
    }


    