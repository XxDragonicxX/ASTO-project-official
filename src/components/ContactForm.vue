<template>
    <div class="startend">
        <PageHeader />
        <div>
            <nav class="topbar">
            <router-link to="/" class="topbarlinks">
                <p class="blue">Home</p>
            </router-link>
            <p class="topbarlinks">/ Contact us</p>
            </nav>
        </div>
        <div class="row">
            <div class="intro">
                <div class="col-12 col-lg-4">
                    <h2>
                        <strong>
                            Contact us
                        </strong>
                    </h2>
                </div>
                <div class="col-12 col-lg-4">
                    <h2>
                        <strong>
                            ASTO SYSTEMS PTE LTD
                        </strong>
                    </h2>
                </div>
            </div>
            <div class="singapore">
                <div class="col-12 col-lg-4">
                    <div class="sgtitle">
                        <h2>
                            <strong>
                                Singapore
                            </strong>
                        </h2>
                    </div>
                </div>
                <div class="col-12 col-lg-4">
                    <p>
                            Block 5002, #03-07 <br>
                            TechPlace II    <br>
                            Ang Mo Kio Ave 5 <br>
                            Singapore 569870
                    </p>
                    <p>
                            Tel: +65 64844928 <br>
                            Email: sales.sg@asto.com.sg
                    </p>
                </div>
                <div class="col-12 col-lg-4">
                    <img src="@/assets/locationofasto.png" alt="">
                </div>
            </div>
            <div class="china">
                <div class="col-12 col-lg-4 ">
                    <div class="chinatitle">
                        <h2>
                            <strong>
                                China
                            </strong>
                        </h2>
                    </div>
                </div>
                <div class="col-12 col-lg-4 ">
                    <p>
                        Block 7, 6 Floor West A <br>
                        Gao Fa Science and Technology Park <br>
                        Beihuan Road, Nanshan District <br>
                        518055 ShenZhen, China
                    </p>
                    <p>
                        Tel: +86 755-26000103 <br>
                        Email: sales.cn@asto.com.sg
                    </p>
                </div>
                <div class="col-12 col-lg-4 ">
                    <img src="@/assets/locationoftehuijie.png" alt="">
                </div>
            </div>
        </div>

    </div>
<PageFooter />
</template>

<script>
    import PageHeader from '@/components/Headers/PageHeader.vue';
    import PageFooter from '@/components/PageFooter.vue';
    export default {
        name: 'ContactForm',
        components: {
            PageHeader,
            PageFooter,
        }
    }
        
</script>
<style scoped>
    .startend {
        overflow-x: hidden;
    }

    .row { 
        background: rgba(211, 211, 211, 0.8);
    }

    .topbar {
        display: flex;
        background: rgba(211, 211, 211, 0.8);
    }

    .topbar p {
        padding-left: 10px;
        color: black;
    }

    .topbarlinks {
        display: flex;
    }
    .topbarlinks .blue {
        text-decoration: underline;
    }

    h2, p {
        color: black;
        font-family: 'Open Sans', sans-serif;
        font-size: 30px;
    }

    p {
        /* text-align: center; */
    }
    .intro {
        display: flex;
        justify-content: flex-start;
    }

    .singapore, .china, .intro {
        display: flex;
        flex-wrap: wrap;
        padding: 2rem;
    }

    img{
        height: 380px;
    }


    .col-12 .col-lg-4 {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    /* .scroll-trigger {
    opacity: 0;
    transform: translateX(100px);
    animation: fade-in-up 3s forwards;
  } */

</style>