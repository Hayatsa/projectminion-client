import React, { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import { getTasks } from "./TaskManager.js"

export const TaskList = (props) => {
    const [ tasks, setTasks ] = useState([])
    const history = useHistory()

    useEffect(() => {
        getTasks().then(data => setTasks(data))
    }, [])

    return (
        <article className="tasks">
             <button className="btn btn-2 btn-sep icon-create" onClick={() => {history.push({ pathname: "/tasks/new" })}}> + </button>
            {
                tasks.map(task => {
                    return <section key={`task--${task.id}`} className="task">
                        <div className="task__title">{task.title} </div>
                        <div className="task__date">Date {task.date}</div>
                        <div className="task__note">Note {task.note} </div>
                    </section>
                })
            }
        </article>
    )
}