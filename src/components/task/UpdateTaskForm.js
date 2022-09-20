import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { getTaskById, updateTask } from './TaskManager'
import { getProjects } from "../project/ProjectManager"


export const UpdateTaskForm = () => {
    const history = useHistory();
    const {taskId} = useParams();
    const [projects, setProjects] = useState([]);


    const loadProjects = () => {
        return getProjects().then(data => {
            setProjects(data)
        })
    }

    useEffect(() => {
        loadProjects()
    }, [])

    const [currentTask, setCurrentTask] = useState({
        title: "",
        date: "",
        note: "",
        project: 0,
    })

    const loadTask = () => {
        if (taskId) {
            getTaskById(taskId)
                .then(data => {
                    setCurrentTask(data)
            })
        }
        
    }

    useEffect(() => {
        loadTask()
    }, [])


    const handleFieldChange = (domEvent) => {
        const updatedTask = {...currentTask}
        let selectedVal = domEvent.target.value
        updatedTask[domEvent.target.name] = selectedVal
        setCurrentTask(updatedTask)
    }

    return (
        <form className="taskForm">
            <h2 className="taskForm__title">Update {currentTask.title}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="project">Project: </label>
                    <select 
                        name="projectId"
                        id="project_id"
                        className="form-control"
                        value={currentTask.projectId}
                        onChange={handleFieldChange}>
                        {
                            projects.map((project) => (
                                <option key={project.id} value={project.id}>
                                    {project.title}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input 
                        type="text" 
                        name="title" 
                        id="title"
                        required autoFocus 
                        className="form-control"
                        value={currentTask.title}
                        onChange={handleFieldChange}
                        
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="note">Note: </label>
                    <input 
                        type="text" 
                        name="note"
                        id="note" 
                        className="form-control"
                        value={currentTask.note}
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
                        value={currentTask.date}
                        onChange={handleFieldChange}
                    />
                </div>
            </fieldset>

            <button type="submit"
                onClick={t => {
                    t.preventDefault()

                    const editedTask = {
                        id: taskId,
                        project: parseInt(currentTask.project),
                        title: currentTask.title,
                        note: currentTask.note,
                        date: currentTask.date
                    }
                    
                    updateTask(editedTask, taskId)
                        .then(() => history.push('/'))
                }}
                className="btn btn-primary" 
                id="createBtn">Update</button>
        </form>
    )
}