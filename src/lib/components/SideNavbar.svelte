<script>
    import { SideNavBarData, PinnedProject } from "$lib/services/navbarCategory.js";

</script> 

<aside class="navbar">
    <div class="uptoTab mobile_navbar">
        <div class="flex flex_gap_10 flex_space_between nav_btn_mob" onclick="onclickCategory()">
            <p>Category</p>
            <span id="down-black-white"><img src="/icons/down-arrow-bw-icon.svg" alt="down-arrow-bw"></span>
            <span id="down-color" class="hidden"><img src="/icons/up-arrow-icon.svg" alt="up-arrow-color" ></span>
        </div>

        <div class="hidden mobile_nav" id="mob_nav">
            {#each SideNavBarData as data}
                <a href="{data?.href}">
                    <div class="flex flex_row sidenav_content">
                        <img src="{data?.imgsrc}" alt="{data?.title}">
                        <p>{data?.title}</p>
                    </div>
                </a>
            {/each}
        </div>

        <div class="flex flex_gap_10 flex_space_between nav_btn_mob" onclick="onclickPinnedProjects()">
            <p>Pinned Project</p>
            <span id="down-black-white-pin"><img src="/icons/down-arrow-bw-icon.svg" alt="down-arrow-bw"></span>
            <span id="down-color-pin" class="hidden"><img src="/icons/up-arrow-icon.svg" alt="up-arrow-color" ></span>
        </div>

        <div class="hidden mobile_nav" id="pinned_project">
            {#each PinnedProject as data}
                <a href="{data?.href}">
                    <div class="flex flex_row flex_space_between sidenav_content">
                        <p>{data?.title}</p>
                        <img src="{data?.imgsrc}" alt="{data?.title}">
                    </div>
                </a>
            {/each}
        </div>

        <script>
            function onclickCategory() {
                const mobileNav = document.getElementById("mob_nav");
                const downColor = document.getElementById("down-color");
                const downBW = document.getElementById("down-black-white");

                mobileNav.classList.toggle("hidden");
                downColor.classList.toggle("hidden");
                downBW.classList.toggle("hidden");
            }

            function onclickPinnedProjects() {
                const mobileNav = document.getElementById("pinned_project");
                const downColor = document.getElementById("down-color-pin");
                const downBW = document.getElementById("down-black-white-pin");

                mobileNav.classList.toggle("hidden");
                downColor.classList.toggle("hidden");
                downBW.classList.toggle("hidden");
            }
        </script>
    </div>

    <div class="onlyForLap flex flex_col desktop_navbar">
        <div class="category_lap">
            {#each SideNavBarData as data}
                <a href="{data?.href}">
                    <div class="flex flex_row sidenav_content">
                        <img src="{data?.imgsrc}" alt="{data?.title}">
                        <p>{data?.title}</p>
                    </div>
                </a>
            {/each}
        </div>
        <div class="pinned_project_lap">
            <h3>Pinned Project</h3>
            {#each PinnedProject as data}
                <a href="{data?.href}">
                    <div class="flex flex_row flex_space_between sidenav_content">
                        <p>{data?.title}</p>
                        <img src="{data?.imgsrc}" alt="{data?.title}">
                    </div>
                </a>
            {/each}
        </div>
        <div class="flex flex_center flex_space_between input logout">
            <input type="text" value="Logout" disabled> 
            <span>
                <img src="/icons/sign-out-icon.svg" alt="signout" style="margin-top: 5px;">
            </span>
        </div>
    </div>
</aside>

<style>
    .mobile_navbar {
        margin: 10px 20px;
        position: relative;
        transition: all 2s ease-in-out;
    }

    .mobile_nav {
        border: 2px solid #F1ECFF;
        position: absolute;
        background-color: #fff;
        width: 100%;
        transition: all 2s ease-in-out;
        top: 55px;
    }

    .nav_btn_mob {
        align-items: center;
        padding: 10px 20px;
        border: 3px solid #F1ECFF;
        text-align: center;
        margin-bottom: 10px;
    }

    #pinned_project {
        top: 123px;
    }

    .sidenav_content {
        padding: 16px 50px;
        align-items: center;
        gap: 16px;
        border-bottom: 2px solid #F1ECFF;
    }

    @media (min-width: 768px) {
        .mobile_navbar {
            margin: 10px auto;
            max-width: 400px;
            width: 100%;
        }
    }

    @media (min-width: 1200px) {
        
        .desktop_navbar {
            max-width: 275px;
            width: 100%;
            border-right: 3px solid #F1ECFF;
            box-shadow: #11111a0d 0px 4px 16px, rgba(17, 17, #11111a0d);
            padding: 20px 30px;
            height: 91vh;
        }

        .sidenav_content {
            margin: 32px auto;
            align-items: center;
            gap: 16px;
            padding: 0;
            border-bottom: 0;
        }

        .category_lap {
            border-bottom: 3px solid #F1ECFF;
        }

        .pinned_project_lap {
            margin: 35px auto;
            border-bottom: 3px solid #F1ECFF;
        }
        
        .input {
            background-color: #F1ECFF;
            padding: 10px 25px;
            position: relative;
            border: 1px solid #F1ECFF;
            transition: all .3s ease-in-out;
            border-radius: 35px;
            max-width: 200px;
            width: 100%;
        }

        .input:hover {
            border: 1px solid #b8a9e2;
        }

        .logout {
            position: absolute;
            bottom: 50px;
        }
    }


</style>