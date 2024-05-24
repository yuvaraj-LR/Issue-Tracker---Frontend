<script>
    export let data;
    // console.log(data, "dataa......");

    const project = data?.project?.project[0];

</script>

<section class="issue_container">
    <div class="flex flex_space_between issue_option_menu">
        <div class="flex issue_menus">
            <div class="flex title_backmenu">
                <img src="/icons/back-arrow-icon.svg" class="pointer" alt="back-arrow-img" onclick="onClickBack()"> 
                <h3>{project.name}</h3>
            </div>
    
            <div class="flex author_desp">
                <p>Created By: </p>
                <h4>{project?.author}</h4>
            </div>
        </div>
    
        <div class="flex flex_row flex_gap_10 issue_menus_action">
            <form action="#" method="post">
                <button class="flex flex_gap_10 flex_center">
                    <span>Add Issue</span>
                    <span><img src="/icons/add-icon.svg" alt="add-icon"></span>
                </button>
            </form>

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
        height: 90vh;
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
    }
</style>