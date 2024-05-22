import {addProject, getAllProject, deleteProject } from "$lib/services/projectAPI.js"

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

            console.log(errorMessage, "error message...");

            return {
                errors: errorMessage
            }
        }


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
    },

    delete: async({request}) => {
        let formData = await request.formData();

        const id = formData.get("projectId");
        console.log(id, "iddd.....");

        if(!id) {
            return {
                "Error": "Invalid Id"
            }
        }

        const deleteProjectResp = await deleteProject(id);
        console.log(deleteProjectResp, "resp...");

        if(deleteProjectResp?.status) {
            return {
                message: "Successfully Deleted"
            }
        }

    }
}