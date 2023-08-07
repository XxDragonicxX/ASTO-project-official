<template>
    <PageHeader />
    <div class="startend">
        <nav class="topbar">
            <router-link to="/" class="topbarlinks">
                <p class="blue">Home</p>
                <p>/</p>
            </router-link>
            <router-link to="/products-and-services" class="topbarlinks">
                <p class="blue">Products And Services</p>
            </router-link>
        </nav>
        <div class="introduction">
            <p>
                Asto is a dynamic company providing cutting-edge solutions through 'Our Products' and 'Our Services.' Our services include RPA solutions, technology services, and EDMS, while 
                <br>
                'Our Products' feature innovative machines and systems designed in-house to drive productivity and growth.
            </p>
        </div>
        <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="@/assets/carousellpage1.png" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="@/assets/carousellpage2.png" class="d-block w-100" alt="...">
              </div>
              <!-- <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="...">
              </div> -->
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    <PageFooter />
</template>

<script>

import PageHeader from '@/components/Headers/PageHeader.vue';
import PageFooter from '@/components/PageFooter.vue';

    export default {
        name: 'ProductsnServices',
        components: {
            PageHeader,
            PageFooter,
        },
    }
</script>

<style scoped>
    .startend {
        overflow-x: hidden;
        height: 100%;
        min-height: 100vh;
        background: rgba(211, 211, 211, 0.8);
        margin: 2rem 2rem 0 2rem;
    }

    .topbarlinks {
        display: flex;
    }

    .topbarlinks .blue {
        text-decoration: underline;
    }
    .topbar {
        display: flex;
        align-items: center;
        color: black;
    }
    .topbar p {
        padding-left: 10px;
    }
    .topbarlinks {
        color: black;
        text-decoration: none;
    }
    .topbarlinks p {
        color: black;
        
    }

    p {
        font-family: 'Montserrat', sans-serif;
        font-weight:bolder;
    }

    .introduction {
        margin: 5rem;
        display: flex;
        justify-content: center;
    }

    .carousel {
        height: 100vh;
    }
    img {
        height: 100vh;
    }
</style>