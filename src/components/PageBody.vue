<template>
  <div class="wholepage">
  <div class="top">
    <div class="navbar">
      <div class="leftside col-12 col-md-5">
        <img src="@/assets/astoimage.png" alt="">
      </div>
      <div class="rightside col-12 col-md-7 row">
        <router-link to="/" class="nav-link button col-12 col-md-2">
          <p>HOME</p>
        </router-link>
        <router-link to="/about-us" class="nav-link button col-12 col-md-2">
          <p>ABOUT</p>
        </router-link>
        <router-link to="/contact" class="nav-link button col-12 col-md-2">
          <p>CONTACT</p>
        </router-link>
        <router-link to="/support" class="nav-link button col-12 col-md-2">
          <p>SUPPORT</p>
        </router-link>
        <router-link to="/products-and-services" class="nav-link button col-12 col-md-4">
          <p>PRODUCTS & SERVICES</p>
        </router-link>
      </div>
    </div>
    <div class="introduction row">
      <div class="left col-12 col-md-6">
        <img src="@/assets/mainpicture.png" alt="">
      </div>
      <div class="right col-12 col-md-6">
        <div class="words">
          <h1>
            Transform your Business
            <br>
            with Intelligent Automation
          </h1>
          <p>
            Automate tasks, free up time, and drive efficiency with ASTO RPA solutions. Unleash
            <br>
            your team's potential for strategic innovatives. Experience intelligient automation
            <br>
            now.
          </p>
        </div>
        <div class="bottom-link">
          <router-link to="/products-and-services" class="btn">
            <p>Begin Today</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="bottom">
    <div class="title">
      <h2>About us</h2>
    </div>
    <div class="information row">
      <div class="founded col-12 col-md-4">
        <img src="@/assets/manholdingflag.png" alt="">
        <p>
          Automate tasks, free up time, and drive efficiency with ASTO RPA solutions. Unleash your team's potential for strategic 
          initiatives. Experience intelligent automation now.
        </p>
      </div>
      <div class="customise col-12 col-md-4">
        <img src="@/assets/customise.png" alt="">
        <p>
          We provide tailored solutions, addressing your unique needs through automation, system documentation, infrastructure 
          optimisation, and expertise in electronic design and manufacturing. (EDMS)
        </p>
      </div>
      <div class="experience col-12 col-md-4">
        <img src="@/assets/experience.png" alt="">
        <p>
          Our extensive experience enables us to deliver tailored and innovative solutions that 
          precisely address your business needs, ensuring your success in a rapidly evolving market.
        </p>
      </div>
    </div>
  </div>
</div>
</template>
  
<script>

  
  
  export default {
    name: 'PageBody',
    components: {
    },
  } 
</script>
  
<style scoped>

  .wholepage {
    overflow-x: hidden;
  }

  p {
    font-family: 'Open Sans', serif;

  }
  .top, .bottom {
    max-height: 50%;
  }

  .top {
    background: linear-gradient(to right, #000080 0%, #584BA3 15%,#584BA3 30%, rgba(139, 126, 216, 0.7));
  }

  .navbar {
    display: flex;
    justify-content: flex-end;
  }

  .navbar a {
    text-decoration: none;
  }

  .navbar img {
    max-width: 30%
  }

  .rightside {
    display: flex;
    justify-content: space-around;
    padding-right: 5em;
  }

  p, .right h1 {
    color: white;
    font-weight: bold;
  }

  .button p, button a {
    text-decoration: none;
  }

  .button {    
    display: flex;
    justify-content: center;
    align-items: center;}
  .button p {
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
  }

  .button p:active {
    transform: scale(0.7);
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
  }

  .introduction {
    display: flex;
  }

  .left {
    /* width: 50%; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .left img {
    width: 100%;
  }

  .right {
    /* width: 50%; */
    padding-top: 5%;
    padding-bottom: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  p {
    font-size: larger;
  }

  .words p, .words h1 {
    margin-top: 2rem;
    font-family: 'Montserrat', sans-serif;
  }



  .bottom-link {
        margin-top: 2rem;
        margin-bottom: 8rem;
    }

    .btn {
        text-decoration: none;
        color: blue;
        background-color: white;
        transition: background-color 0.3s, color 0.3s;
        border-radius: 1rem;
        box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
    }

    .btn:active {
      transform: scale(0.7);
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
    }

    .btn p {
      color: black;
      margin: 0;
      padding: 0.5rem;
    }

    .btn::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        z-index: -1;
        transition: left 0.3s;
    }
    .btn:hover {
      background-color: #FCF55F;
      color: #000;
    }

    .btn:hover::before {
      left: 0;
    }

    .bottom {
      background-color: rgba(211, 211, 211, 0.3);
    }

    .title h2 {
      color: black;
      text-align: center;
      padding-top: 2rem;
      margin-bottom: 2rem;
    }

    .information {
      display: flex;
    }

    .founded, .customise, .experience {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .founded img, .customise img, .experience img {
      width: 20rem;
      height: 18rem;
    }

    .founded p, .customise p, .experience p {
      color: black;
      padding: 2rem 3rem 2rem 3rem;
      font-weight: bold;
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
        transition: width 0.5s ease;
    }

    .nav-link p:hover::before {
      width: 100%;
    }

    .nav-item p {
        font-weight: bolder;
    }

    p {
      font-family: 'Montserrat', sans-serif;
    }
</style>