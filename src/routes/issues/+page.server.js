import { getProjectById, addIssue, deleteIssue } from "$lib/services/projectAPI";
import { redirect } from "@sveltejs/kit";

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
        let formData = await request.formData();
        console.log(formData, "formData..");

        const projectName = formData.get("project_name");
        const authorName = formData.get("author_name");
        const description = formData.get("description");
        const projectId = formData.get("project_id");

        const bug = formData.get("bug");
        const ui = formData.get("ui");
        const frontend = formData.get("frontend");
        const database = formData.get("database");
        const backend = formData.get("backend");

        let label = [];

        if(bug) {
            label.push("Bug")
        }

        if(ui) {
            label.push("UI")
        }

        if(frontend) {
            label.push("Frontend")
        }

        if(database) {
            label.push("Database")
        }

        if(backend) {
            label.push("Backend")
        }

        let payload = {
            "name": projectName,
            "description": description,
            "author": authorName,
            "labels": label
        }
        console.log(payload, "payloadd..");

        const addIssueResp = await addIssue(payload, projectId);
        console.log(addIssueResp, "resp....");

        if(addIssueResp?.status) {
            throw redirect(301, `/issues?projectId=${projectId}`);
        } 
    },

    deleteIssue: async({request}) => {
        let formData = await request.formData();

        const projectId = formData.get("projectId");
        const issueId = formData.get("issueId");

        console.log(projectId, issueId, "issueedddddd........");

        const deleteIssueResp = await deleteIssue(projectId, issueId);
        console.log(deleteIssueResp, "resp...");

        if(deleteIssueResp?.status) {
            throw redirect(301, `/issues?projectId=${projectId}`);
        }
    }
}