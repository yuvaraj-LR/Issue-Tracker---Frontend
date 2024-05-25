<script>
    export let action;
    export let projectName;
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
                <span class="error_msg hidden" id="project_name_error">Please Enter Project Name!</span>
            </div>
        
            <div class="flex flex_gap_10 flex_col project_form_input_div">
                <span><img src="/icons/author-name-icon.svg" alt="author-name-icon" class="form_icons"></span>
                <input type="text" name="author_name" autocomplete="off" required autofocus id="author_name" class="add_project_input" placeholder="{projectName} Name">
                <span class="error_msg hidden" id="author_name_error">Please Enter Author Name!</span>
            </div>
        
            <div class="flex flex_col flex_gap_10 project_form_input_div">
                <div class="description">
                    <label class="normal label" for="description">Description</label>
                    <span><img src="/icons/description-icon.svg" alt="title-icon" class="form_icons" id="desc"></span>
                </div>
                <textarea name="description" id="description" cols="20" rows="5" placeholder="Please enter the description for {projectName}" class="desp" autocomplete="off" required autofocus></textarea>
                <span class="error_msg hidden" id="description_error">Please Enter Description!</span>
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



</style>