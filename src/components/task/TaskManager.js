const remoteURL = "http://localhost:800"

export const getTasks = () => {
    return fetch("http://localhost:8000/tasks", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const createTask = (task) => {
    return fetch(`${remoteURL}/tasks`, {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    })
        .then(res => res.json())
}

