<script>
    export let data;

    import AddForm from '$lib/components/AddForm.svelte';
    import EmptyComponent from '$lib/components/EmptyComponent.svelte';
    import Card from "$lib/components/Card.svelte";

    const project = data?.project?.project[0];
    console.log(project, "projectt...");
</script>

<section class="issue_container">
    <div class="flex flex_space_between issue_option_menu">
        <div class="flex issue_menus">
            <div class="flex title_backmenu">
                <img src="/icons/back-arrow-icon.svg" class="pointer back_icon" alt="back-arrow-img" onclick="onClickBack()"> 
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
                    <AddForm action="?/addIssue" projectName="Issue"/>
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

                <form action="?/filterByLabel" method="post">
                    <input type="hidden" name="bug" id="bug" class="bug">
                    <input type="hidden" name="ui" id="ui" class="ui">
                    <input type="hidden" name="frontend" id="frontend" class="frontend">
                    <input type="hidden" name="database" id="database" class="database">
                    <input type="hidden" name="backend" id="backend" class="backend">

                    <button type="submit">Filter</button>
                </form>

                <script>
                    function onSelectBug() {
                        document.getElementById("filter-1").classList.toggle("bug");    
                    }

                    function onSelectUI() {
                        document.getElementById("filter-2").classList.toggle("ui");    
                    }

                    function onSelectFrontend() {
                        document.getElementById("filter-3").classList.toggle("frontend");    
                    }

                    function onSelectDatabase() {
                        document.getElementById("filter-4").classList.toggle("database");    
                    }

                    function onSelectBackend() {
                        document.getElementById("filter-5").classList.toggle("backend");    
                    }
                </script>
            </div>
        {:else }
            <EmptyComponent content="There are currently no Issues available for this Project. Please add a  issue to view." />
        {/if}
    </div>

    <div class="flex flex_wrap flex_center issue_card">
        {#if project?.issues.length > 0}
            {#each project?.issues as issue }
                <Card isIssue=true projectName={issue?.name} creationDate={issue?.timestamp} authorName={issue?.author} projectDesp={issue?.description} projectId={issue?._id} />
            {/each}
        {:else} 
            <EmptyComponent content="There are currently no Issues available for this Project. Please add a  issue to view." />
        {/if}
    </div>

    <script>
        function onClickBack() {
            window.history.back()
        }
    </script>
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
        border: 2px solid #444;
        cursor: pointer;
    }

    .filter_options {
        display: flex;
        justify-content: center;
        row-gap: 20px;
    }

    .bug {
        color: #D6D930;
        border: 2px solid #D6D930;
    }

    .ui {
        color: #3056D9;
        border: 2px solid #3056D9;
    }

    .frontend {
        color: #30AAD9;
        border: 2px solid #30AAD9;
    }

    .database {
        color: #D32C4A;
        border: 2px solid #D32C4A;
    }

    .backend {
        color: #30D9B3;
        border: 2px solid #30D9B3;
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