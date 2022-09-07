export const getTasks = () => {
    return fetch("http://localhost:8000/tasks", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const createTask = (task) => {
    return fetch("http://localhost:8000/tasks", {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    })
}