<script>
    import "../global.css"
    import Header from "$lib/components/Header.svelte";
    import SideNavbar from "$lib/components/SideNavbar.svelte";
    export let data;
    export let form;
    console.log(form, "I am form Dataa...");
</script>

<body>
    <header>
        <Header {form}/>
    </header>

    <main class="flex">
        <SideNavbar activeTab = {data?.activeTab}/>
        <div class="main w-100">
            <slot />
        </div>
    </main>
</body>

<style>

    main {
        flex-direction: column;
    }

    

    @media (min-width: 768px) {
        
    }

    @media (min-width: 1200px) {
        main {
            flex-direction: row;
        }

        header {
            height: 80px;
        }
    }
    

</style>