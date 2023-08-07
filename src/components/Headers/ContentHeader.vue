<template>
    <nav class="navbar bg-dark" data-bs-theme="dark">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand">
                <img src="@/assets/astoimage.png" alt="ASTO systems PTE LTD">
            </router-link>
            <ul class="nav nav-pills flexclass">
                <li class="nav-item">
                    <router-link to="/" class="nav-link btn" aria-current="page">
                        <h5>Home</h5>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/about-us" class="nav-link btn" aria-current="page">
                        <h5>About us</h5>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/support" class="nav-link btn" aria-current="page">
                        <h5>Support</h5>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/contact" class="nav-link btn" aria-current="page">
                        <h5>Contact us</h5>
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'ContentHeader'
    }
</script>

<style scoped>
    h5 {
        color: rgba(3, 138, 255, 1);
    }

    .flexclass {
        display:flex;
        justify-content: space-around;
    }
    h1 {
        background-color:blanchedalmond;
        padding: 20px;
        border: 1px solid black;
        border-radius: 20%;
    }
    img {
        width: 200px;
    }
    .nav {
        display: flex;
        justify-content: space-around;
    }
    li {
        margin-left: 20px;
    }
    template {
        overflow-x: hidden;    }
    .btn{
        text-shadow: 2px 2px 2px rgba(50, 50, 50, 0.3);
        }
    .btn:hover {
        transform: scale(1.4);
    }
</style>