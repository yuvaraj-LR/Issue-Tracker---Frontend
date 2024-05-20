import { addProject, getAllProject } from "$lib/services/projectAPI.js"

export async function load({url}) {
    const projects = await getAllProject();

    return {
        projects
    }
}   

export const actions = {
    add: async({request}) => {
        let formData = await request.formData();
        console.log(formData, "formData..");

        const projectName = formData.get("project_name");
        const authorName = formData.get("author_name");
        const description = formData.get("description");

        let errorMessage = {};
        if(!projectName || !authorName || !description) {
            if(!projectName) {
                errorMessage.projectName = "Project Name Required"
            }
            if(!authorName) {
                errorMessage.authorName = "Author Name Required"
            }
            if(!description) {
                errorMessage.description = "Please describe the project."
            }

            return {
                errors: errorMessage
            }
        }

        console.log(errorMessage, "error message...");

        let payload = {
            "name": projectName,
            "description": description,
            "author": authorName
        }
        console.log(payload, "payloadd..");

        const addProjectResp = await addProject(payload);
        console.log(addProjectResp, "resp....");

        if(addProjectResp?.status) {
            return {
                message: addProjectResp?.msg
            }
        } 
    }
}