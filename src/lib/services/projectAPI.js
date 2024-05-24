import { env } from "$env/dynamic/private"

const baseURL = `${env.BUILDENV == "dev" ? env.LOCAL_BACKEND_URL : env.LIVE_BACKEND_URL}/api/issueTracker`
console.log(baseURL, "baseURL...");

export const getAllProject = async() => {
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    };

    const getAllProjectResponse = await fetch(`${baseURL}/getAllProject`, options);
    const response = await getAllProjectResponse.json();
    
    return response;
}

export const addProject = async(payload) => {
    const options = {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const addProjectResponse = await fetch(`${baseURL}/createProject`, options);
    const response = await addProjectResponse.json();

    return response;
}

export const deleteProject = async(id) => {
    console.log(id, "idd....");
    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }

    const deleteProjectResponse = await fetch(`${baseURL}/deleteProject?projectId=${id}`, options);
    const response = await deleteProjectResponse.json();

    return response

}

export const searchProject = async(payload) => {
    const options = {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const searchProjectResponse = await fetch(`${baseURL}/searchProject`, options);
    const response = await searchProjectResponse.json();

    return response;
}

export const getProjectById = async(projectId) => {
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }

    const searchProjectResponse = await fetch(`${baseURL}/getProjectById?projectId=${projectId}`, options);
    const response = await searchProjectResponse.json();

    return response;
}