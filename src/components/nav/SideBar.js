import { Col, ListGroup, Row, Tab, Nav, Card } from 'react-bootstrap';
import React, { useEffect, useState } from "react"
import { Link, useHistory } from 'react-router-dom';
import { getProjects } from '../project/ProjectManager';

    

export const SideBar = () => {
    const [ projects, setProjects ] = useState([])
    const history = useHistory()

    useEffect(() => {
        getProjects().then(data => setProjects(data))
    }, [])

    const projectsList = projects.map(project => 
        <ListGroup.Item key={`project--${project.id}`} className="project">
              <Link to={`projects/${project.id}`}>{project.title}</Link>   
        </ListGroup.Item>
    )


    return (
        <Tab.Container id="project-title-list">
        <Row>
          <Col sm={2}>
            <ListGroup>
                <ListGroup.Item> Today </ListGroup.Item>
                <ListGroup.Item action onClick={() => { history.push({ pathname: "/projects/new" }) }}> Projects + </ListGroup.Item>
                <ListGroup.Item>
                  {projectsList}
                </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Tab.Container>
      );
    }


    