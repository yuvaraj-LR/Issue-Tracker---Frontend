<script>
    import { enhance } from "$app/forms";
    export let projectName;
    export let creationDate;
    export let authorName;
    export let projectDesp;
    export let totalNumberOfIssues;
    export let projectId;
    export let issueId;
    export let isIssue;
    export let labels;
    export let deleteAction;
</script>

<section class="flex flex_col flex_wrap flex_space_between card">
    <div class="flex flex_col flex_gap_10">
        <div class="flex flex_row flex_center flex_space_between project_title">
            <h3 style="width: 70%">{projectName}</h3>
            <h4 class="date_color normaler">{creationDate}</h4>
        </div>
    
        <div class="flex flex_row project_author">
            <span><p>Created By&nbsp;</p></span>
            <span><h4 class="bolder">{authorName}</h4></span>
        </div>
    
        <div class="flex flex_wrap project_desc">
            <p class="project_desp">{projectDesp}</p>
        </div>
    </div>

    <div class="flex flex_col flex_gap_10">
        {#if !isIssue}
            <div class="flex flex_row total_issues">
                <span><h4 class="light">Total issues:&nbsp; </h4></span>
                <span><h4>{totalNumberOfIssues}</h4></span>
            </div>
        {:else}
            <div class="flex flex_row flex_wrap flex_gap_10 labels_list">
                <h4>Labels:&nbsp;</h4>
                {#each labels as label}
                    <p class="filter {label.toLowerCase()}">{label}</p>
                {/each}
            </div>
        {/if}

        <div class="flex flex_row flex_gap_10 actionBtns">
            <a href="/issues?projectId={projectId}" class="w-100">
                <button class="view_btn">View Issue</button>
            </a>
    
            <form action="{deleteAction}" method="post" id="deleteForm-{isIssue ? issueId : projectId }" use:enhance>
                <input type="hidden" id="projectId" name="projectId" value="{projectId}">
                <input type="hidden" id="issueId" name="issueId" value="{issueId}">
                <img src="/icons/delete-icon.svg" alt="delete-icon" class="delete" onclick="confirmAndSubmit('{isIssue ? issueId : projectId }', '{projectName}')">
                <input type="submit" value="submit" class="hidden">
            </form>
            
            <script>
                function confirmAndSubmit(projectId, projectName) {
                    console.log(projectId, "projectId...........");

                    if (confirm(`Are you sure you want to delete ${projectName}?`)) {
                        document.getElementById(`deleteForm-${projectId}`).submit();
                    }
                }
            </script>
        </div>
    </div>
</section>

<style>

    .card {
        max-width: 480px;
        min-height: 400px;
        padding: 25px;
        border: 1px solid #fff;
        background-color: #fff;
        margin: 20px;
        border-radius: 20px;
        gap: 20px;
        transition: all .5s ease-in-out;
        cursor: pointer;
        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    }
    
    .card:hover {
        transform: scale(1.02);
        border: 1px solid #F1ECFF;
    }

    .project_author {
        align-items: center;
    }

    .view_btn {
        padding: 10px;
    }

    .delete {
        filter: grayscale(0);
    }

    .delete:hover {
        filter: grayscale(100);
    }

    .total_issues {
        align-items: end;
    }

    .project_desp {
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;  
        overflow: hidden;
    }
    .labels_list {
        align-items: center;
        margin: 5px 0;
    }

    .filter {
        text-align: center;
        padding: 3px 15px;
        border-radius: 7px;
        cursor: pointer;
    }

    @media (min-width: 786px) {
        .card {
            max-width: 340px;
            width: 100%;
        }
    }

    @media (min-width: 1200px) {
        .card {
            max-width: 480px;
            width: 100%;
        }
    }

</style>