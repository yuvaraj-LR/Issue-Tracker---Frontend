import { env } from "$env/dynamic/private"

const baseURL = env.BUILDENV == "dev" ? env.LOCAL_BACKEND_URL : env.LIVE_BACKEND_URL
console.log(baseURL, "baseURL...");

export const getAllIssues = async() => {
    
}