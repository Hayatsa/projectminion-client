import React from "react"
import { Route } from "react-router-dom"
import { ProjectList } from "./project/ProjectList"
import { TaskList } from "./task/TaskList"
import { ProjectForm } from "./project/ProjectForm"
import { TaskForm } from "./task/TaskForm"



export const ApplicationViews = () => {
    return <>
        <Route exact path="/">
            <ProjectList />
        </Route>
        <Route path="/tasks">
            <TaskList />
        </Route>
        <Route path="/projects/new">
            <ProjectForm />
        </Route>
        <Route path="/tasks/new">
            <TaskForm />
        </Route>
    </>
}