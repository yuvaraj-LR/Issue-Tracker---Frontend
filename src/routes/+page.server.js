import {addProject, getAllProject, deleteProject, searchProject } from "$lib/services/projectAPI.js"

export async function load({locals, url}) {
    const projects = await getAllProject();

    return {
        projects
    }
}   

export const actions = {
    addProject: async({request}) => {
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
                status: true,
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
                status: true,
                message: "Successfully Deleted"
            }
        }
    }, 

    search: async({request}) => {
        let formData = await request.formData();

        const projectName = formData.get("project_name");
        console.log(projectName, "projectttt....");

        if(!projectName) {
            return {
                error: "Please enter project name or author name"
            }
        }

        const payload = {
            projectName,
            "authorName": projectName
        }

        const searchProjectResp = await searchProject(payload);
        console.log(searchProjectResp, "resp....");

        if(searchProjectResp?.status) {
            return {
                result: "search",
                status: true,
                message: "Fetched Successfully.",
                project: searchProjectResp?.project
            }
        } else {
            return {
                result: "search",
                status: false,
                search: "No Project Found."
            }
        }
    }
}