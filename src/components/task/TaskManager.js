const remoteURL = "http://localhost:8000"

export const getTasks = () => {
    return fetch("http://localhost:8000/tasks", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("projectminion_token")}`
        }
    })
        .then(response => response.json())
}

export const createTask = (task) => {
    return fetch(`${remoteURL}/tasks`, {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("projectminion_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    })
        .then(res => res.json())
}

export const getTaskById = (taskId) => {
    return fetch(`${remoteURL}/tasks/${taskId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("projectminion_token")}`,
            "Content-Type": "application/json"
        },
    })
        .then(res => res.json())
}

export const updateTask = (task, id) => {
    console.log('updatedTask', task)
    return fetch(`${remoteURL}/tasks/${id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("projectminion_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    })
}

export const deleteTask = (id) => {
    return fetch(`${remoteURL}/tasks/${id}`, { 
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("projectminion_token")}`
        },
        body: JSON.stringify(id)
    })
}



