import React from "react"
import { Route } from "react-router-dom"
import { ProjectForm } from "./project/ProjectForm"
import { TaskForm } from "./task/TaskForm"
import { ProjectCard } from "./project/ProjectCard"
import { UpdateProjectForm } from "./project/UpdateProjectForm"
import { UpdateTaskForm } from "./task/UpdateTaskForm"
import { Today } from "./today/Today"



export const ApplicationViews = () => {
    return <>
        <Route exact path={["/", "/today"]}>
            <Today />            
        </Route>
        <Route exact path="/projects/new">
            <ProjectForm />
        </Route>
        <Route exact path="/projects/:projectId(\d+)">
            <ProjectCard /> 
        </Route> 
        <Route exact path="/projects/:projectId(\d+)/update">
                <UpdateProjectForm />
        </Route>
        <Route exact path="/tasks/new">
            <TaskForm />
        </Route>
        <Route exact path="/tasks/:taskId(\d+)/update">
                <UpdateTaskForm />
        </Route>
    </>
}