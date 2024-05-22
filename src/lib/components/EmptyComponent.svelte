<script>
    export let content;
</script>

<section>
    <h3 class="normal empty_project_list">{content}</h3>
</section>

<style>

    .empty_project_list {
        margin: 20px 40px;
        padding: 20px 60px;
        border: 1px solid #ddd;
        width: fit-content;
        color: #454545;
    }

    @media (min-width: 786px) {
        .empty_project_list {
            margin: 40px 80px;
            padding: 40px 120px;
        }
    }

</style>