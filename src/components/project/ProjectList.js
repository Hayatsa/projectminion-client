import React, { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import { getProjects } from "./ProjectManager.js"

export const ProjectList = (props) => {
    const history = useHistory()
    const [ projects, setProjects ] = useState([])

    useEffect(() => {
        getProjects().then(data => setProjects(data))
    }, [])

    return (
        <article className="projects">
             <button className="btn btn-2 btn-sep icon-create" onClick={() => {history.push({ pathname: "/projects/new" })}}> + </button>
            {
                projects.map(project => {
                    return <section key={`project--${project.id}`} className="project">
                        <div className="project__title">{project.title} </div>
                        <div className="project__date">Date {project.date}</div>
                        <div className="project__description">Description {project.description} </div>
                    </section>
                })
            }
        </article>
    )
}