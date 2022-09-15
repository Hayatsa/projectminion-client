import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { createTask } from './TaskManager.js'
import { getProjects } from "../project/ProjectManager.js"

export const TaskForm = () => {
    const history = useHistory();
    const [projects, setProjects] = useState([]);
    const [currentTask, setCurrentTask] = useState({
        projectId: 0,
        title: "",
        date: "",
        note: ""
    });

    useEffect(() => {
        getProjects().then((data) => setProjects(data))
    }, [])

    const changeTaskState = (domTask) => {
        const newTask = {...currentTask}
        newTask [domTask.target.name] = domTask.target.value
        setCurrentTask(newTask)
    }

    return (
        <form className="taskForm">
            <h2 className="taskForm__title">Add New Task</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="project">Project: </label>
                    <select name="projectId" required autoFocus className="form-control"
                        value={currentTask.projectId}
                        onChange={changeTaskState}>
                        <option value="0">Select project</option>
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
                    <input type="text" name="title" required autoFocus className="form-control"
                        value={currentTask.title}
                        onChange={changeTaskState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Date: </label>
                    <input type="text" name="date" placeholder="YYYY-MM-DD" required autoFocus className="form-control"
                        value={currentTask.date}
                        onChange={changeTaskState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="maker">Note: </label>
                    <input type="text" name="note" required className="form-control"
                        value={currentTask.note}
                        onChange={changeTaskState}
                    />
                </div>
            </fieldset>
           
            <button type="submit"
                onClick={t => {
                    t.preventDefault()

                    const task = {
                        project: parseInt(currentTask.projectId),
                        title: currentTask.title,
                        date: currentTask.date,
                        note: currentTask.note
                    }

                    createTask(task)
                        .then(() => history.push("/"))
                }}
                className="btn btn-primary">Add</button>
        </form>
    )
}