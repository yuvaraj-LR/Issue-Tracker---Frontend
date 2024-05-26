import { env } from "$env/dynamic/private"

const baseURL = env.BUILDENV == "dev" ? env.LOCAL_BACKEND_URL : env.LIVE_BACKEND_URL
console.log(baseURL, "baseURL...");

export const getProjectById = async(projectId) => {
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }

    const searchProjectResponse = await fetch(`${baseURL}/getProjectById?projectId=${projectId}`, options);
    const response = await searchProjectResponse.json();
    console.log(response, "responsee...");
    return response;
}

export const addIssue = async(payload, id) => {
    const options = {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const addProjectResponse = await fetch(`${baseURL}/createIssue?projectId=${id}`, options);
    const response = await addProjectResponse.json();

    return response;
}