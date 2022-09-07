export const getProjects = () => {
    return fetch("http://localhost:8000/projects", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const createProject = (project) => {
    return fetch("http://localhost:8000/projects", {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(project)
    })
        .then(res => res.json())
}