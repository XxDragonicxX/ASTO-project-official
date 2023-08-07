<template>
    <nav class="navbar">
        <div class="container-fluid row">
            <div class="col-md-2">
                <router-link to="/" class="navbar-brand">
                    <img src="@/assets/astoimage.png" alt="ASTO systems PTE LTD">
                </router-link>
            </div>
            <ul class="nav flexclass col-md-10">
                <li class="nav-item col-2 ">
                    <router-link to="/" class="nav-link btn" aria-current="page">
                        <p>Home</p>
                    </router-link>
                </li>
                <li class="nav-item col-2">
                    <router-link to="/about-us" class="nav-link btn" aria-current="page">
                        <p>About us</p>
                    </router-link>
                </li>
                <li class="nav-item col-2">
                    <router-link to="/contact" class="nav-link btn" aria-current="page">
                        <p>Contact us</p>
                    </router-link>
                </li>
                <li class="nav-item col-2">
                    <router-link to="/support" class="nav-link btn" aria-current="page">
                        <p>Support</p>
                    </router-link>
                </li>
                <li class="nav-item col-2">
                    <router-link to="/products-and-services" class="nav-link btn" aria-current="page">
                        <p class="long">Products & Services</p>
                    </router-link>
                </li>
            </ul>
            <div class="dropdown">
                <div class="dropdown-toggles">
                    <div class="dropdown-menu">
                        <router-link to="/" class="nav-link btn" aria-current="page">
                            <p>Home</p>
                        </router-link>
                        <router-link to="/about-us" class="nav-link btn" aria-current="page">
                            <p>About us</p>
                        </router-link>
                        <router-link to="/about-us" class="nav-link btn" aria-current="page">
                            <p>Contact us</p>
                        </router-link>
                        <router-link to="/support" class="nav-link btn" aria-current="page">
                            <p>Support</p>
                        </router-link>
                        <router-link to="/products-and-services" class="nav-link btn" aria-current="page">
                            <p class="long">Products & Services</p>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <div class="bar"></div>
</template>

<script>
    export default {
        name: 'PageHeader'
    }
</script>

<style scoped>
    p {
  font-size: 1.5rem;
  font-weight: bolder;
  font-family: 'Montserrat', sans-serif;
    background:linear-gradient(to right, black, rgb(5, 61, 240));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.long {
    font-size: medium;
}
/* .nav-item .col-5 .col-md-2 .long {
    padding-right: 0;
} */
    .flexclass {
        display:flex;
        justify-content: space-around;
        align-items: center;
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
        overflow-x: hidden;
    }
    .btn{
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
        box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
        }

  .btn:active {
    transform: scale(0.7);
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
  }
    .nav-link p:hover {
        transform: scale(1.2);
    }
    .nav-item {
        padding-left: 10px;
        /* padding-right: 10px; */
        /* width: 200px; */
        overflow: hidden;
    }

    /* .navbar, .container-fluid {
        height: 100%;
    } */
    .navbar, .dark {
    /* background: linear-gradient(to bottom, rgba(5, 61, 171, 0), rgba(5, 61, 171, 1)); */
    padding-top: 0;
}
    .container-fluid {
        padding-bottom: 20px;
    }
    .nav-link p {
        position: relative;
    }
    .nav-link p::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 0;
        height: 2px;
        background-color: #000; /* Set your desired underline color */
        transition: width 1s ease;
    }

    .nav-link p:hover::before {
      width: 100%;
    }

    .nav-item p {
        font-weight: bolder;
    }

    .dropdown-menu, .dropdown-toggles {
        display: none;
    }

    .dropdown-toggles {
        position: absolute;
        right: 1%;
        bottom: -20px;
        width: 100px;
        height: 100px;
        background-image: url("@/assets/dropdownpic.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .dropdown-toggles:hover .dropdown-menu{
        display: block;
    }

    .dropdown-menu img {
        max-width: 100%;
        height: 100%;
    }

    .dropdown-menu {
        position: absolute;
        left: -60px;
        bottom: -250px;
    }

    @media only screen and (max-width: 960px) {
        .dropdown-toggles{
            display: block;
        }

        .flexclass { 
            display: none;
        }
    }
</style>