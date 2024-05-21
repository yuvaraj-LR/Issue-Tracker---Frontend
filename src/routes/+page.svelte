<script>
    import ProjectCard from "$lib/components/ProjectCard.svelte";

    export let data;
    export let form;

</script>

<section class="container">
    <div class="flex flex_center flex_space_between w-100 projects_title">
        <h4 class="bolder">List of Projects : </h4>
        <div class="flex flex_row flex_gap_10 flex_center sort_by_date_btn">
            <h5 class="normal">Sort By Date</h5>
            <img src="/icons/down-arrow-bw-icon.svg" alt="down-arrow-bw-icon" width="10" height="10">
        </div>
    </div>

    <div class="flex flex_wrap flex_center w-100 projects_list">
        {#each data?.projects?.project as project}
            <ProjectCard projectName = {project?.name} creationDate = {project?.timestamp} authorName = {project?.author} projectDesp = {project?.description} totalNumberOfIssues = {project?.issues?.length} projectId= {project?._id}/>
        {/each}
    </div>
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
            padding: 10px 40px;
        }

        .projects_list {
            border-top-left-radius: 35px;
            padding-top: 30px;
        }
    }


</style>