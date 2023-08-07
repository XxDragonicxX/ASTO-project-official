<template>
	<div class="background-image">
		<nav>
        <router-link to="/about-us" type="button" class="btn">About Us</router-link>
        <br>
        <router-link to="/support" type="button" class="btn">Support</router-link>
        <br>
        <router-link to="/Contact" type="button" class="btn">Contact us</router-link>
		<br>
		<router-link to="/products-and-services" type="button" class="btn">Products & Services</router-link>
    </nav>
	</div>
    
</template>

<script>


    export default {
    name: "ASTOLogo",
}
</script>

<style scoped>
	.background-image {
		height: 100%;
		width: 100%;
		/* background-image: url("@/assets/pagebodyimage.png");
		opacity: 0.9;
		background-size: cover; */
		background: linear-gradient(to bottom, rgba(245, 245, 220, 1), white, rgba(245, 245, 220, 1))
	}

    nav {
        height: 100%;
        display: flex;
        flex-direction: column;
		justify-content: space-around;
		align-items: center;
		width: 100%;
    }
    .btn {
	display: inline-block;
	padding: 0.75rem 1.25rem;
	border-radius: 10rem;
	color: #fff;
	text-transform: uppercase;
	font-size: 1rem;
	letter-spacing: 0.15rem;
	transition: all 0.3s;
	position: relative;
	overflow: hidden;
	z-index: 1;
	margin-top:5%;
	margin-bottom: 1rem;
}
.btn:after {
	content: '';
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(28, 129, 145, 0.8);
	border-radius: 10rem;
	z-index: -2;
}
.btn:before {
	content: '';
	position: absolute;
	bottom: 0;
	left: 0;
	width: 0%;
	height: 100%;
	background-color: #0a9;
	transition: all 0.3s;
	border-radius: 10rem;
	z-index: -1;
}
.btn:hover {
	color: #fff;
}
.btn:hover:before {
	width: 100%;
}
</style>