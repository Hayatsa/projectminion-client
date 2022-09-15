import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { deleteProject, getProjectById, updateProject } from './ProjectManager'


export const UpdateProjectForm = () => {
    const history = useHistory();
    const {projectId} = useParams();
    const [isLoading, setIsLoading] = useState(true);

    const [currentProject, setCurrentProject] = useState({
        title: "",
        description: "",
        date: ""
    })

    const loadProject = () => {
        if (projectId) {
            getProjectById(projectId)
                .then(data => {
                    setCurrentProject({
                        id: projectId,
                        title: data.title,
                        description: data.description,
                        date: data.date
                    })
            })
        }
        
    }
    
    useEffect(() => {
        loadProject()
    }, [])


    const handleFieldChange = (domEvent) => {
        const updatedProject = {...currentProject}
        let selectedVal = domEvent.target.value
        updatedProject[domEvent.target.name] = selectedVal
        setCurrentProject(updatedProject)
    }

    return (
        <form className="projectForm">
            <h2 className="projectForm__title">Update {currentProject.title}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input 
                        type="text" 
                        name="title" 
                        id="title"
                        required autoFocus 
                        className="form-control"
                        value={currentProject.title}
                        onChange={handleFieldChange}
                        
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input 
                        type="text" 
                        name="description"
                        id="description" 
                        required 
                        className="form-control"
                        value={currentProject.description}
                        onChange={handleFieldChange}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Date: </label>
                    <input 
                        type="date" 
                        name="date"
                        id="date" 
                        required
                        className="form-control"
                        value={currentProject.date}
                        onChange={handleFieldChange}
                    />
                </div>
            </fieldset>

            <button type="submit"
                onClick={p => {
                    p.preventDefault()

                    const editedProject = {
                        id: projectId,
                        title: currentProject.title,
                        description: currentProject.description,
                        date: currentProject.date
                    }
                    
                    updateProject(editedProject, projectId)
                        .then(() => history.push('/'))
                }}
                className="btn btn-primary" 
                id="createBtn">Update</button>

            <button className="btn btn-danger" onClick={() => {deleteProject(projectId)}}>Delete</button>
        </form>
    )
}