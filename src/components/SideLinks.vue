<template>
    <div class="sidelinks">
        <div class="partners">
            <router-link to="/partners">
                <img src="@/assets/partnershipicon.png" alt="">
            </router-link>
            
        </div>
        <div class="policy">
            <router-link to="/policy">
                <img src="@/assets/policyicon.png" alt="">
            </router-link>

        </div>
        <div class="careers">
            <router-link to="/careers">
                <img src="@/assets/careericon.png" alt="">
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SideLinks'
    }
</script>

<style scoped>
    .partners, .policy, .careers {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 1px solid black;
        background-color: rgba(92, 213, 232, 0.7);
        display:flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 2rem;
    }
    img {
        margin-left: 20px;
        height: 60%;
        width: 60%;
    }
    .partners, .policy, .careers {
		transition: transform 0.3s ease-out;
	}

	.partners:hover, .policy:hover, .careers:hover {
	transform: translateY(-20px);
    box-shadow: 0px 0px 20px rgba(0, 214, 247, 1);
	}
</style>