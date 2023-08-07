<template>
    <div class="check">
    <PageHeader />
    <div class="main">
        <div class="picture">
            <div>
                <nav class="topbar">
                    <router-link to="/" class="topbarlinks">
                        <p class="blue">Home</p>
                        <p>/</p>
                    </router-link>
                    <p class="topbarlinks"> Support </p>
                </nav>
            </div>
        </div>
        <div class="boxes row">
        <div class="col-10 col-lg-4">
                <div class="download">
                    <router-link to="/support/download" class="image-link box effect">
                        <img src="@/assets/downloadicon2.png" class="imagesmaller">
                        <h3 class="box-title">Download Center</h3>
                    </router-link>
                </div>
                <div>
                    <router-link to="/support/unknown" class="image-link box effect">
                        <h2>?</h2>
                        <h3 class="box-title">( insert something here )</h3>
                    </router-link>
                </div>
        </div>
        <div class="col-10 col-lg-4">
                <div class="FAQ">
                    <router-link to="/support/FAQ" class="image-link box effect">
                        <img src="@/assets/faqicon.png" class="imagesmaller">
                        <h3 class="box-title">FAQ</h3>
                    </router-link>
                </div>
                <div class="box  effect">
                    <img src="@/assets/loginicon.png" class="imagesmaller">
                    <h3> ( sign in ?)</h3>

                </div>
        </div>
        <div class="col-10 col-lg-4">
                <div class="contact ">
                    <router-link to="/support/tech-support" class="image-link box  effect">
                        <img src="@/assets/phoneicon.png" class="imagesmaller">
                        <h3 class="box-title">Contact technical support</h3>
                    </router-link>
                </div>
                <div class="box effect">
                    <img src="@/assets/loginicon.png" class="imagesmaller">
                    <h3> ( sign in ?)</h3>
                </div>
        </div>
    </div>
    </div>
    </div>
    <PageFooter class="footer"/>
</template>

<script>
import PageHeader from '@/components/Headers/PageHeader.vue'  
import PageFooter from '@/components/PageFooter.vue'

export default {
        name: 'SupportForm',
        components: {
            PageHeader,
            PageFooter,
        }
    }
</script>

<style scoped>

.check {
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
}
.main {
    flex: 1;
    overflow-x: hidden;
    height: 100%;
    padding-bottom: 3rem;
    flex-grow: 1;
    background: rgba(211, 211, 211, 0.8);
}

.col-10, .col-lg-4 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width:768px) {
        max-width: 70vw;
    }
}
.picture {
        background-image: url('@/assets/supportimage.png');
        background-position: center;
        background-size: cover;
        height: 200px;
        width: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }
    .topbarlinks {
        display: flex;
    }

    .topbarlinks .blue {
        text-decoration: underline;
    }
    .topbar {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
    }
    .topbar p {
        padding-left: 10px;
    }
    .topbarlinks {
        color: white;
        text-decoration: none;
    }
    .topbarlinks p {
        color: white;
        
    }

    p {
            font-family: 'Bebas Neue';
        }
    .boxes {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items:center;   
        padding-top: 5rem;
        width: 100%;
        padding-bottom: 2rem;

    }
    .box {
        border: 1px solid black;
        /* border-radius: 5%; */
        height: 300px;
        width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 5%;
        text-decoration: none;
        color: black;
        z-index: 1;
    }

    h3 {
        text-align: center;
    }
    .check {
        overflow-x: hidden;
    }
    .effect {
        background-color: transparent;
        background-image: linear-gradient(to bottom, transparent 90%, rgba(4, 48, 135, 0.6));
        background-size: 100% 200%;
        transition: background-position 0.5s ease-in-out;
        transition: 0.5s ease;
    }
    .effect:hover {
        background-position: 0 100%;
        transform: translateX(50px);
    }

    /* .background-image {
        background:linear-gradient(120deg,#C5C5C5, #FFFFFF, #C5C5C5);
    } */

    /* .background-image {
        position: relative; Set position to relative
        z-index: 1; Set z-index to 1
        height: 100%;
        min-height: 100vh;
      } */
      /* .background-image::before {
        content: ""; Required for ::before pseudo-element
        position: absolute; Set position to absolute
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1; Set z-index to -1
        background-image: url("@/assets/cool-robotics.webp");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        opacity: 0.7; Set opacity to 0.5 (i.e., 50% transparent)
        filter: blur(10px);
      }  */

      .imagesmaller {
        height: 50%;
        width: 30%;
      }

      h2 {
        font-size: 100px;
      }
      /* @media (max-width: 768px) {
  .boxes {
    flex-direction: column;
  }
}

@media (max-width: 600px) {
  .effect {
    background-color: rgba(192, 192, 192, 0.1);
  }
}

@media (min-width: 601px) {
  .effect {
    background-color: rgba(192, 192, 192, 0.1);
  }
}
@media only screen and (min-width: 768px) {
        .footer {
            position: fixed;
            bottom: 0;
            height: auto;
            width: 100%;
        }
    }
    @media only screen and (max-width: 767px) {
        .footer {
            position: relative;
            margin-top: 20px;  Add some space between the content and the footer 
        }
    } */
    .box-title {
        font-size: 1.5rem;
    }
    .footer {
        overflow-x: hidden;

    }
</style>