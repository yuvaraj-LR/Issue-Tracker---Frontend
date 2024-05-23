<script>
    import EmptyComponent from "$lib/components/EmptyComponent.svelte";
import ProjectCard from "$lib/components/ProjectCard.svelte";

    export let data;
    export let form;

    console.log(form, "formrmmmm");
</script>

<section class="container">
    {#if data?.projects?.project}
        <div class="flex flex_center flex_space_between w-100 projects_title">
            <h4 class="bolder">List of Projects : </h4>
            <div class="flex flex_row flex_gap_10 flex_center sort_by_date_btn">
                <h5 class="normal">Sort By Date</h5>
                <img src="/icons/down-arrow-bw-icon.svg" alt="down-arrow-bw-icon" width="10" height="10">
            </div>
        </div>
        <div class="flex flex_wrap flex_center w-100 projects_list">
            {#if form?.result == "search"}
                {#if form?.status}
                    <ProjectCard projectName = {form?.project[0]?.name} creationDate = {form?.project[0]?.timestamp} authorName = {form?.project[0]?.author} projectDesp = {form?.project[0]?.description} totalNumberOfIssues = {form?.project[0]?.issues?.length} projectId= {form?.project[0]?._id}/>
                {:else}
                    <EmptyComponent content="No results found for your search." />
                {/if}
            {:else}
                {#each data?.projects?.project as project}
                    <ProjectCard projectName = {project?.name} creationDate = {project?.timestamp} authorName = {project?.author} projectDesp = {project?.description} totalNumberOfIssues = {project?.issues?.length} projectId= {project?._id}/>
                {/each}
            {/if}
        </div>
    {:else}
        <EmptyComponent content="There are currently no projects available. Please add a project to begin adding issues." />
    {/if}
</section>

<style>
    .projects_list {
        background-color: #f5f5f5;
        width: 100%;
    }

    .projects_title {
        margin: 10px auto;
        padding: 10px;
    }

    @media (min-width: 768px) {
        .projects_title {
            padding: 10px 20px;
        }
    }

    @media (min-width: 1200px) {
        .projects_title {
            padding: 0 40px;
        }

        .projects_list {
            border-top-left-radius: 35px;
            border-bottom-left-radius: 35px;
            padding-top: 30px;
        }
    }


</style>