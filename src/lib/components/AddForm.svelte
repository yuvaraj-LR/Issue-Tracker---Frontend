<script>
    export let action;
    export let projectName;
    export let projectId;
    export let isIssue;
</script>

<section>
    <div class="background" id="background">
    </div>

    <div class="add_project_form" id="add_project_form">
        <img src="/icons/close-icon.svg" alt="close-icon" class="close_icon" onclick="onClickCloseIcon()">
        
        <form action={action} method="post" class="add_project_form_data">
            <h3 class="text_center">Add {projectName}</h3>
        
            <div class="flex flex_gap_10 flex_col project_form_input_div">
                <span><img src="/icons/title-icon.svg" alt="title-icon" class="form_icons"></span>
                <input type="text" name="project_name" id="project_name" class="add_project_input" placeholder="{projectName} Name" autocomplete="off" required autofocus>
            </div>
        
            <div class="flex flex_gap_10 flex_col project_form_input_div">
                <span><img src="/icons/author-name-icon.svg" alt="author-name-icon" class="form_icons"></span>
                <input type="text" name="author_name" autocomplete="off" required autofocus id="author_name" class="add_project_input" placeholder="Author Name">
            </div>

            {#if isIssue}
                <div class="flex flex_row normal label label_form_div">
                    <span><img src="/icons/label-icon.svg" alt="label-icon" class="label_img" width="35px"></span>
                    <label for="label">Label</label>
                </div>

                <div class="flex flex_wrap label_form_inputs">
                    <div class="flex flex_wrap filter_options">
                        <div id="filter-data-1" class="filter" onclick="onSelectBug1()">Bug</div>
                        <div id="filter-data-2" class="filter" onclick="onSelectUI2()">UI</div>
                        <div id="filter-data-3" class="filter" onclick="onSelectFrontend3()">Frontend</div>
                        <div id="filter-data-4" class="filter" onclick="onSelectDatabase4()">Database</div>
                        <div id="filter-data-5" class="filter" onclick="onSelectBackend5()">Backend</div>
                    </div>
                    
                    <input type="hidden" name="bug" id="bug" class="bug">
                    <input type="hidden" name="ui" id="ui" class="ui">
                    <input type="hidden" name="frontend" id="frontend" class="frontend">
                    <input type="hidden" name="database" id="database" class="database">
                    <input type="hidden" name="backend" id="backend" class="backend">
    
                    <script>
                        function onSelectBug1() {
                            document.getElementById("filter-data-1").classList.toggle("bug");    
                            if (document.getElementById("bug").value == "true") {
                                document.getElementById("bug").value = false;
                            } else {
                                document.getElementById("bug").value = true;
                            }
                        }
    
                        function onSelectUI2() {
                            document.getElementById("filter-data-2").classList.toggle("ui");    
                            if (document.getElementById("ui").value = "true") {
                                document.getElementById("ui").value = false;
                            } else {
                                document.getElementById("ui").value = true;
                            }
                        }
    
                        function onSelectFrontend3() {
                            document.getElementById("filter-data-3").classList.toggle("frontend");   
                            if (document.getElementById("frontend").value = "true") {
                                document.getElementById("frontend").value = false;
                            } else {
                                document.getElementById("frontend").value = true;
                            } 
                        }
    
                        function onSelectDatabase4() {
                            document.getElementById("filter-data-4").classList.toggle("database");
                            if (document.getElementById("database").value = "true") {
                                document.getElementById("database").value = false;
                            } else {
                                document.getElementById("database").value = true;
                            }    
                        }
    
                        function onSelectBackend5() {
                            document.getElementById("filter-data-5").classList.toggle("backend"); 
                            if (document.getElementById("backend").value = "true") {
                                document.getElementById("backend").value = false;
                            } else {
                                document.getElementById("backend").value = true;
                            }   
                        }
                    </script>
                </div>
            {/if}

            <input type="hidden" name="project_id" autocomplete="off" required autofocus id="author_name" class="add_project_input" value={projectId}>
        
            <div class="flex flex_col flex_gap_10 project_form_input_div">
                <div class="description">
                    <label class="normal label" for="description">Description</label>
                    <span><img src="/icons/description-icon.svg" alt="title-icon" class="form_icons" id="desc"></span>
                </div>
                <textarea name="description" id="description" cols="20" rows="5" placeholder="Please enter the description for {projectName}" class="desp" autocomplete="off" required autofocus></textarea>
            </div>
        
            <button id="submit-btn" type="submit" class="flex_gap_10 uppercase">
                <span>Add</span>
                <span><img src="/icons/add-icon.svg" alt="add-icon"></span>
            </button>
        </form>
        <script>
            function onClickCloseIcon() {
                document.getElementById("background").classList.add("hidden");
                document.getElementById("add_project_form").classList.add("hidden");
                document.getElementById("add_form").classList.add("hidden");
                document.getElementById("add_issue_form").classList.add("hidden");
            }
        </script>
    </div>
</section>

<style>
    .text_center {
        margin-bottom: 16px;
    }

    .add_project_form_data {
        padding: 10px;
    }

    .add_project_form {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 15;
        background-color: #fff;
        max-width: 480px;
        width: 100%;
        padding: 25px;
        cursor: default;
        transition: all .2s ease-in-out;
        border-radius: 15px;
    }

    .background {
        position: fixed;
        inset: 0px;
        background: rgba(0, 0, 0, 0.8);
        z-index: 10;
        cursor: default;
    }

    .add_project_input {
        border-bottom: #dddddd solid 1px;
        padding-left: 40px;
        padding-bottom: 10px;
    }

    .add_project_input::placeholder {
        color: #ccc;
    }

    .project_form_input_div {
        margin: 40px 0;
    }

    .form_icons {
        position: absolute;
        left: 40px;
        margin-top: 10px;
    }

    #desc {
        margin: 0;
    }

    .label {
        padding-left: 40px;
        padding-top: 20px;
        color: #ccc;
        font-size: 1.2rem;
        font-weight: 300;
    }

    .desp {
        padding: 10px 20px;
        border: 1px solid #ddd;
        border-radius: 10px;
    }

    .close_icon {
        position: absolute;
        right: 30px;
        top: 40px;
        cursor: pointer;
    }

    .label_form_div {
        align-items: center;
        padding: 0;
        margin: 0;
    }

    .label_img {
        position: relative;
        top: 5px;
    }

    .filter {
        text-align: center;
        padding: 5px 15px;
        margin: 5px 10px;
        border-radius: 7px;
        border: 2px solid #dcdcdc;
        color: #767676;
        cursor: pointer;
    }

</style>