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