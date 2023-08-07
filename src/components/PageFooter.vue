<template>
    <div class="footer">
        <div class="row">
            <div class="col-md-3 col-lg-3 items">
                <h2>
                    <img src="@/assets/partnershipicon.png" class="imagesmaller">
                    <router-link to="/partners" type="button" class="btn">Partners</router-link>
                </h2>
            </div>
            <div class="col-md-3 col-lg-3 items">
                <h2>
                    <img src="@/assets/policyicon.png" class="imagesmaller2">
                    <router-link to="/policy" type="button" class="btn">Privacy Policy</router-link>
                </h2>
            </div>
            <div class="col-md-3 col-lg-3 items">
                <h2>
                    <img src="@/assets/careericon.png" class="imagesmaller2">
                    <router-link to="/careers" type="button" class="btn">Careers</router-link>
                </h2>
            </div>
            <div class="col-md-3 col-lg-3 copyright">
                <p>Copyright <span>&#169;</span> 2023</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PageFooter'
    }
</script>

<style scoped>
    img {
        height: 100%;
        width: 70%;
        margin-left: 50px;
    }

    
    .items {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .footer {
        background-color: rgba(127, 116, 191, 0.2);
        /* height: 100%; */
        overflow-x: hidden;

    }
    .btn {
        font-size: large;
        color: rgba(9, 121, 105, 1)
    }
    .btn:hover {
        transform: scale(1.2);
    }
    h2 {
        text-align: center;
    }
    .imagesmaller {
        height: 5rem;
        width: 5rem;
      }
    .imagesmaller2 {
        height: 4rem;
        width: 4rem;
      }

    .copyright {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>