<script>
    export let data;
    export let form;

    console.log(form, "I am form dataa....");

    import AddForm from '$lib/components/AddForm.svelte';
    import EmptyComponent from '$lib/components/EmptyComponent.svelte';
    import Card from "$lib/components/Card.svelte";
  import { enhance } from '$app/forms';

    const project = data?.project?.project[0];

</script>

<section class="issue_container">
    <div class="flex flex_space_between issue_option_menu">
        <div class="flex issue_menus">
            <div class="flex title_backmenu">
                <a href="/"><img src="/icons/back-arrow-icon.svg" class="pointer back_icon" alt="back-arrow-img" /></a> 
                <h3>{project.name}</h3>
            </div>
    
            <div class="flex author_desp">
                <p>Created By: </p>
                <h4>{project?.author}</h4>
            </div>
        </div>
    
        <div class="flex flex_row flex_gap_10 issue_menus_action">
            <div class="add_issue">
                <button class="flex flex_gap_10 flex_center" onclick="onClickAddProject()">
                    <span>Add Issue</span>
                    <span><img src="/icons/add-icon.svg" alt="add-icon"></span>
                </button>

                <div class="hidden add_form" id="add_issue_form">
                    <AddForm action="?/addIssue" projectName="Issue" projectId={project?._id} deleteAction="?/deleteIssue" isIssue=true />
                </div>

                <script>
                    function onClickAddProject() {
                        document.getElementById("background").classList.remove("hidden");
                        document.getElementById("add_project_form").classList.remove("hidden");
                        document.getElementById("add_issue_form").classList.remove("hidden");
                    }
                </script>
            </div>


            <div class="flex sort_btns">
                <div class="flex flex_row flex_gap_10 flex_center sort_by_date_btn">
                    <h5 class="normal">Sort By Date</h5>
                    <img src="/icons/down-arrow-bw-icon.svg" alt="down-arrow-bw-icon" width="10" height="10">
                </div>
    
                <div class="flex flex_row flex_gap_10 flex_center sort_by_date_btn">
                    <h5 class="normal">Filter By Label</h5>
                    <img src="/icons/down-arrow-bw-icon.svg" alt="down-arrow-bw-icon" width="10" height="10">
                </div>
            </div>
        </div>
    </div>

    <div class="project_desc">
        <p>{project?.description}</p>
    </div>

    <div class="issue_lists">
        {#if project?.issues.length > 0}
            <div class="flex flex_gap_10 filter_issues">
                <p class="bolder">Filter By Labels: </p>
        
                <div class="flex flex_wrap filter_options">
                    <div id="filter-1" class="filter" onclick="onSelectBug()">Bug</div>
                    <div id="filter-2" class="filter" onclick="onSelectUI()">UI</div>
                    <div id="filter-3" class="filter" onclick="onSelectFrontend()">Frontend</div>
                    <div id="filter-4" class="filter" onclick="onSelectDatabase()">Database</div>
                    <div id="filter-5" class="filter" onclick="onSelectBackend()">Backend</div>
                </div>

                <form action="?/filterByLabel" method="post" use:enhance>
                    <input type="hidden" name="bug" id="bug-1" class="bug">
                    <input type="hidden" name="ui" id="ui-1" class="ui">
                    <input type="hidden" name="frontend" id="frontend-1" class="frontend">
                    <input type="hidden" name="database" id="database-1" class="database">
                    <input type="hidden" name="backend" id="backend-1" class="backend">
                    <input type="hidden" id="projectIdLabel" name="projectIdLabel" value="{project?._id}">

                    <button type="submit">Filter</button>
                </form>

                <script>
                    function onSelectBug() {
                        document.getElementById("filter-1").classList.toggle("bug");

                        if(document.getElementById("bug-1").value == "true") {
                            document.getElementById("bug-1").value = false;
                        } else {
                            document.getElementById("bug-1").value = true;
                        }
                    }

                    function onSelectUI() {
                        document.getElementById("filter-2").classList.toggle("ui");
                        if(document.getElementById("ui-1").value == "true") {
                            document.getElementById("ui-1").value = false;
                        } else {
                            document.getElementById("ui-1").value = true;
                        }    
                    }

                    function onSelectFrontend() {
                        document.getElementById("filter-3").classList.toggle("frontend");
                        if(document.getElementById("frontend-1").value == "true") {
                            document.getElementById("frontend-1").value = false;
                        } else {
                            document.getElementById("frontend-1").value = true;
                        }    
                    }

                    function onSelectDatabase() {
                        document.getElementById("filter-4").classList.toggle("database");
                        if(document.getElementById("database-1").value == "true") {
                            document.getElementById("database-1").value = false;
                        } else {
                            document.getElementById("database-1").value = true;
                        }    
                    }

                    function onSelectBackend() {
                        document.getElementById("filter-5").classList.toggle("backend");
                        if(document.getElementById("backend-1").value == "true") {
                            document.getElementById("backend-1").value = false;
                        } else {
                            document.getElementById("backend-1").value = true;
                        }      
                    }
                </script>
            </div>
        {:else }
            <EmptyComponent content="There are currently no Issues available for this Project. Please add a  issue to view." />
        {/if}
    </div>

    <div class="flex flex_wrap flex_center issue_card">
        {#if form?.filteredValue}
            {#if form?.filteredValue?.status}
                {#each form?.filteredValue?.issues as issue}
                    <Card isIssue=true projectName={issue?.name} creationDate={issue?.timestamp} authorName={issue?.author} projectDesp={issue?.description} projectId={project?._id} issueId={issue?._id} labels={issue?.labels} deleteAction="?/deleteIssue"/>
                {/each}
            {:else}
                <EmptyComponent content={form?.filteredValue?.error} />
            {/if}
        {:else}
            {#if project?.issues.length > 0}
                {#each project?.issues as issue }
                    <Card isIssue=true projectName={issue?.name} creationDate={issue?.timestamp} authorName={issue?.author} projectDesp={issue?.description} projectId={project?._id} issueId={issue?._id} labels={issue?.labels} deleteAction="?/deleteIssue"/>
                {/each}
            {/if}
        {/if}
    </div>
</section>

<style>
    .issue_container {
        background-color: #f5f5f5;
        padding: 10px;
        width: 100%;
        min-height: 90vh;
    }

    .issue_menus {
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .title_backmenu {
        align-items: center;
    }

    .issue_menus_action {
        flex-direction: column;
        margin: 15px 0 10px;
    }

    .author_desp {
        gap: 10px;
        align-items: center;
    }

    .project_desc {
        background-color: #fff;
        padding: 25px;
        margin: 16px 10px;
        border-radius: 15px;
    }

    .issue_option_menu {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .back_icon {
        transition: all .4s ease-in-out;
    }

    .back_icon:hover {
        background-color: #dcdcdc;
        border-radius: 50%;
    }

    .filter_issues {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        margin-inline: 10px;
        border-radius: 15px;
        background-color: #fff;
    }

    .filter {
        text-align: center;
        padding: 5px 15px;
        margin-inline: 10px;
        border-radius: 7px;
        border: 2px solid #dcdcdc;
        color: #767676;
        cursor: pointer;
    }

    .filter_options {
        display: flex;
        justify-content: center;
        row-gap: 20px;
    }

    @media(min-width: 768px) {
        .issue_menus {
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
        }

        .issue_menus_action {
            flex-direction: row;
            justify-content:center;
            width: 100%;
        }
    }

    @media(min-width: 1200px) {
        .issue_option_menu {
            flex-direction: row;
            justify-content: space-between;
        }

        .issue_menus {
            justify-content: flex-start;
            width: auto;
            gap: 20px;
        }

        .issue_menus_action {
            justify-content: flex-end;
            width: auto;
        }

        .filter_issues {
            flex-direction: row;
            justify-content: flex-start;
        }
    }
</style>