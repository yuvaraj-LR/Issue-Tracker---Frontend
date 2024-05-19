import { getAllProject } from "$lib/services/projectAPI.js"

export async function load({url}) {
    const projects = await getAllProject();

    return {
        projects
    }
}   

export const actions = {
    
}