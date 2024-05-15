<script>
    import Header from "$lib/components/Header.svelte";

</script>

<body>
    <div class="background_imgs">
        <img src="/images/bg.png" alt="bg" class="flex flex_center image"> 
    </div>

    <Header />

    <slot />

</body>

<style>
    body {
        background-color: #0093E9;
        background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
        background-repeat: no-repeat;
        position: relative;

        height: 98vh;
        width: 97%;
    }

    .background_imgs {
        position: absolute;
    }

    .image {
        height: 90vh;
        width: 98vw;
        opacity: 0.025;
        overflow: hidden;
        object-fit: cover;
    }

</style>