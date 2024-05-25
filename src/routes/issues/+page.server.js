import { getProjectById } from "$lib/services/projectAPI";

export async function load({locals, url}) {
    const searchParams = new URLSearchParams(url.search);
    const projectId = searchParams?.get("projectId");

    const project = await getProjectById(projectId);

    return {
        project
    }

}

export const actions = {
    addIssue: async({request}) => {
        console.log("I am add Issue form action...");
    }
}