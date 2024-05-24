export async function load({url}) {
    const pathName = url.pathname;

    const searchParams = new URLSearchParams(url.search);
    const projectId = searchParams?.get("projectId");

    const splitedURL = pathName.split("/");

    const isInTeams = splitedURL.includes("teams");
    const isInAnnounce = splitedURL.includes("announcement");

    return {
        activeTab : isInTeams ? "Teams" : isInAnnounce ? "Announcement" : "Dashboard",
        isIssuePage : projectId ? true : false
    }
}   


