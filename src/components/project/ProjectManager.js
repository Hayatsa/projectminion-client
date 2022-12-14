const remoteURL = "http://localhost:8000"

export const getProjects = () => {
    return fetch("http://localhost:8000/projects", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("projectminion_token")}`
        }
    })
        .then(response => response.json())
}

export const createProject = (project) => {
    return fetch(`${remoteURL}/projects`, {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("projectminion_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(project)
    })
        .then(res => res.json())
}

export const getProjectById = (projectId) => {
    return fetch(`${remoteURL}/projects/${projectId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("projectminion_token")}`,
            "Content-Type": "application/json"
        },
    })
        .then(res => res.json())
}

export const updateProject = (project, id) => {
    console.log('updatedProject', project)
    return fetch(`${remoteURL}/projects/${id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("projectminion_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(project)
    })
}

export const deleteProject = (id) => {
    return fetch(`${remoteURL}/projects/${id}`, { 
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("projectminion_token")}`
        },
        body: JSON.stringify(id)
    })
}