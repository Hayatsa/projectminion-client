import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import React, { useEffect, useState } from "react"
import { Link, useHistory } from 'react-router-dom';
import { getProjectById, getProjects } from '../project/ProjectManager';

    

export const SideBar = () => {
    const [ projects, setProjects ] = useState([])
    const history = useHistory()

    useEffect(() => {
        getProjects().then(data => setProjects(data))
    }, [])

    const projectsList = projects.map(project => 
        <ListGroup.Item key={`project--${project.id}`} className="project" varient="primary">
            <div className="project__title">
              <Link to={`projects/${project.id}`}>{project.title}</Link>    
            </div> 
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


    