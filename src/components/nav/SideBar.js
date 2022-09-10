import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import React, { useEffect, useState } from "react"
import { getProjects } from '../project/ProjectManager';

    

export const SideBar = () => {

    const [ projects, setProjects ] = useState([])

    useEffect(() => {
        getProjects().then(data => setProjects(data))
    }, [])

    const listGroupItems = projects.map(project => 
        <ListGroup.Item key={`project--${project.id}`} className="project" varient="primary" action href="/projects/:projectId(\d+)">
            <div className="project__title">{project.title} </div> 
        </ListGroup.Item>
    )

    return (
        <Tab.Container id="project-title-list">
        <Row>
          <Col sm={2}>
            <ListGroup>
                <ListGroup.Item> Today </ListGroup.Item>
                <ListGroup.Item> Projects </ListGroup.Item>
                {listGroupItems}
            </ListGroup>
          </Col>
        </Row>
      </Tab.Container>
      );
    }