import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row } from "react-bootstrap"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { SideBar } from "./nav/SideBar"

export const ProjectMinion = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("projectminion_token")) {
                return <>
                    <Route>
                        <Container fluid>
                            <Row>
                                <NavBar />
                            </Row>
                            <Row>
                                <Col md="auto">
                                    <SideBar />
                                </Col>
                                <Col>
                                    <ApplicationViews />
                                </Col>
                            </Row>
                        </Container> 
                    </Route>
                </>
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login">
            <Login />
        </Route>

        <Route path="/register">
            <Register />
        </Route>

    </>
)