import React from "react"
import { Route } from "react-router-dom"
import { ProjectList } from "./project/ProjectList"
import { TaskList } from "./task/TaskList"
import { ProjectForm } from "./project/ProjectForm"
import { TaskForm } from "./task/TaskForm"



export const ApplicationViews = () => {
    return <>
       <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <Route exact path="/">
                <ProjectList />
            </Route>
            <Route exact path="/tasks">
                <TaskList />
            </Route>
            <Route exact path="/projects/new">
                <ProjectForm />
            </Route>
            <Route exact path="/tasks/new">
                <TaskForm />
            </Route>
        </main>
    </>
}