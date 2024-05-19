<script>
    import "../global.css"
    import Header from "$lib/components/Header.svelte";
    import SideNavbar from "$lib/components/SideNavbar.svelte";
</script>

<body>
    <header>
        <Header />
    </header>

    <main class="flex">
        <SideNavbar />
        <div class="main">
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
    }
    

</style>