import React from "react"
import { Route } from "react-router-dom"
import { ProjectList } from "./project/ProjectList"
import { TaskList } from "./task/TaskList"
import { ProjectForm } from "./project/ProjectForm"
import { TaskForm } from "./task/TaskForm"
import { ProjectCard } from "./project/ProjectCard"



export const ApplicationViews = () => {
    return <>
       
        <Route exact path="/tasks">
            <TaskList />
        </Route>
        <Route exact path="/projects/new">
            <ProjectForm />
        </Route>
        <Route exact path="/projects/:projectId(\d+)">
            <ProjectCard /> 
        </Route>  
        <Route exact path="/tasks/new">
            <TaskForm />
        </Route>
    </>
}