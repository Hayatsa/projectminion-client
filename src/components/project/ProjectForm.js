import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { createProject } from './ProjectManager.js'


export const ProjectForm = () => {
    const history = useHistory()

    const [currentProject, setCurrentProject] = useState({
        title: "",
        description: "",
        date: "",

    })

    const changeProjectState = (domProject) => {
        const newProjectState = {...currentProject}
        newProjectState[domProject.target.name] = domProject.target.value
        setCurrentProject(newProjectState)
    }

    const handleSubmit = p => {
        p.preventDefault()

        const project = {
            title: currentProject.title,
            description: currentProject.description,
            date: currentProject.date
        }

        createProject(project)
            .then(() => history.push("/projects"))
    }

    return (
        <form className="projectForm">
            <h2 className="projectForm__title">Create new project</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        value={currentProject.title}
                        onChange={changeProjectState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="maker">Description: </label>
                    <input type="text" name="description" required className="form-control"
                        value={currentProject.description}
                        onChange={changeProjectState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Date: </label>
                    <input type="text" name="date" placeholder="YYYY-MM-DD" required autoFocus className="form-control"
                        value={currentProject.date}
                        onChange={changeProjectState}
                    />
                </div>
            </fieldset>
            
            <button type="submit"
                onClick={p => {
                    p.preventDefault()

                    const project = {
                        title: currentProject.title,
                        description: currentProject.description,
                        date: currentProject.date
                    }

                    createProject(project)
                        .then(() => history.push("/"))
                }}
                className="btn btn-primary">Create</button>
        </form>
    )
}