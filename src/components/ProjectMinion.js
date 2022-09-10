import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
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
                        <NavBar />
                        <SideBar />
                        <ApplicationViews />
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