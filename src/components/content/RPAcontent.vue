<template>
    <div>
        <PageHeader />
        <div class="wholepage">
            <div>
                <nav class="topbar">
                    <router-link to="/" class="topbarlinks">
                        <p class="blue">Home</p>
                        <p>/</p>
                    </router-link>
                    <router-link to="/products-and-services" class="topbarlinks">
                        <p class="blue">Products And Services</p>
                        <p>/</p>
                    </router-link>
                    <p class="topbarlinks"> RPA Solutions </p>
                </nav>
            </div>
            <div class="page-content">
                <div class="sidebar col-10 col-md-2">
                    <div class="sidebar-content">
                        <div class="RCPA-content effect"> 
                            <router-link to="/products-and-services/RPA" class="RCPA font"><strong>
                                <p style="font-size: xx-large;">RPA</p>
                            </strong></router-link> 
                        </div>
                        <div class="TS-content effect">
                            <router-link to="/products-and-services/TS" class="TS box font"><strong>
                                <p style="font-size: xx-large;">Technology Services</p>
                            </strong></router-link>
                        </div>
                        <div class="EDMS-content effect">
                            <router-link to="/products-and-services/EDMS" class="EDMS box font"><strong>
                                <p style="font-size: xx-large;">EDMS</p>
                            </strong></router-link>
                        </div>
                        <div class="SD-content effect">
                            <router-link to="/products-and-services/Software-Documentation" class="SD box font"><strong>
                                <p style="font-size: xx-large;">Our Products</p>
                            </strong></router-link>
                        </div>
                    </div>
                </div>
                <div class="information col-10 col-md-9">
                    <h2>RPA Solutions</h2>
                    <div class="boxes row">
                        <div class="col-12 col-lg-4 mitsubishi">
                            <img src="@/assets/mitsubishibox.png" alt="">
                            <div class="dropdowncontent1">
                                <p>We integrate Mitsubishi Electric's state-of-the-art MELSEC series Programmable Logic Controllers (PLCs), cutting-edge motors, and high-performance drivers into our RPA solutions. Mitsubishi Electric's reputation for reliability, precision, and advanced technology perfectly aligns with our commitment to delivering robust and efficient automation systems.</p>
                            </div>
                        </div>
                        <div class="col-12 col-lg-4 ABB">
                            <img src="@/assets/ABBbox.png" alt="">
                            <div class="dropdowncontent2">
                                <p>As a trusted partner, ABB's collaborative robots play a pivotal role in our RPA solutions. ABB's robots are designed to work safely alongside human operators, enhancing productivity, flexibility, and accuracy in various industrial environments. By leveraging ABB's collaborative robots, we empower businesses to optimize their operations while ensuring the utmost safety and efficiency.</p>
                            </div>
                        </div>
                        <div class="col-12 col-lg-4 bosch">
                            <img src="@/assets/boschbox.png" alt="">
                            <div class="dropdowncontent3">
                                <p>Drawing upon Bosch's unparalleled expertise in precision engineering and utilization of cutting-edge technologies, we are able to craft tailor-made automation systems in terms of performance, stability, and durability. The integration of Bosch's renowned Structure Profile and Linear Motion components empowers our solutions with enhanced reliability, ensuring seamless operation and precise control.</p>
                            </div>
                        </div>
                    </div>
                    <p class="bottom">
                        At ASTO Systems, our team of highly skilled professionals combines extensive industry knowledge with a passion for innovation. We work closely with our clients to understand their unique requirements and design tailor-made RPA solutions that enhance their operations, reduce costs, and drive sustainable growth.
                        Whether you 
                        are in the Semiconductor, Warehouse, or Logistics industry, we are your trusted partner for transforming your business through state-of-the-art RPA solutions. Join us in revolutionizing automation and unlocking new levels of productivity and efficiency.
                    </p>
                </div>
            </div>
            <div class="linkback">
            <a href="#top">-- Back to top of page -- </a>
            </div>
        <div class="footer">
            <PageFooter />
        </div>
    </div>
</div>
</template>

<script>
import PageHeader from '@/components/Headers/PageHeader.vue';
import PageFooter from '@/components/PageFooter.vue'
export default {
    name: 'RPAcontent',
    components: {
        PageHeader,
        PageFooter,
    }
}
</script>

<style scoped>
    .wholepage {
        overflow-x: hidden;
        background: rgba(211, 211, 211, 0.8);
        height: 100%;
        min-height: 100vh;
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
    .RCPA-content, .TS-content, .EDMS-content, .SD-content{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width:100%;
        height: 23%;
        
        }
    .sidebar {        
        background-color: #f7f7f7;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        transition: box-shadow 0.3s ease-in-out;
        margin-bottom: 2rem;
    }
    .sidebar-content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;  
    }

    .sidebar:hover {
        box-shadow: 0px 0px 20px rgba(200, 100, 100, 0.3);
    }

    .RCPA, .TS, .EDMS, .SD {
    font-size:larger;
    text-align: center;
    flex:1
    }

    .sidebar a {
        color: black;
        text-decoration: none;
    }
    .effect {
        background-color: transparent;
        background-image: linear-gradient(to right, transparent 50%,rgba(138, 128, 196, 0.5));
        background-size: 200% 100%;
        transition: background-position 0.3s ease-in-out;
    }

    .effect:hover {
        background-position: 100% 0;
    }
    .box, .RCPA {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;

    }

    .box:hover {
    background-color:rgba(236, 240, 241, 0.1);
    }

    .RCPA-content {
        background-color: rgba(138, 128, 196, 1);
    }
    .page-content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        overflow: hidden;
        /* margin: 2rem; */
        padding-bottom: 8rem;
    }
    .information {
        padding-right: 50px;
    }

    .boxes {
        margin-bottom: 10rem;
    }

    .information h2 {
    }   
    .font {
        font-family: 'Montserrat', sans-serif;
        font-size: 1.7rem;
        text-shadow: 0.1px 1px 1px darkblue;
    }

    p {
        font-size: 1.2rem;
    }

    @media only screen and (max-width: 767px) {
        .page-content {
            flex-direction: column;
            align-items: center;
        }

        .sidebar {
            height: 680px;
        }
        
    }
    @media only screen and (min-width: 768px) {
        .sidebar {
            height: 90vh;
        }
    }

    
    .mitsubishi img, .ABB img, .bosch img {
        height: 230px;
        width: 100%;
        padding: 2rem;
        max-width: 100%;
        height: auto;   
    }


    .mitsubishi, .ABB, .bosch {
        height: 100%;
        border: 1px solid purple;
        border-radius: 1rem;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.3);
        transition: box-shadow 0.3s ease-in-out;
        background-color: white;
        position: relative;
        /* margin-left: 3rem;
        margin-right: 3rem; */
    }

    .mitsubishi:hover, .ABB:hover, .bosch:hover {
        box-shadow: 0px 0px 20px #FCF55F;
    }

    .mitsubishi, .ABB, .bosch {
        position: relative;
        display: inline-block;
        padding: 2rem;
    }

    .dropdowncontent1 {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
      top: 110%;
      padding: 1rem;
      border-radius: 2rem;
      transition: display 1s ease-in-out;
    }

    .dropdowncontent2 {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        top: 110%;
        padding: 1rem;
        border-radius: 2rem;
        transition: display 1s ease-in-out;
    }

    .dropdowncontent3 {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
      top: 110%;
      padding: 1rem;
      border-radius: 2rem;
      transition: display 1s ease-in-out;
    }

    .dropdowncontent1 p, .dropdowncontent2 p, .dropdowncontent3 p {
        font-family: 'Montserrat', sans-serif;
        font-size: larger;
    }

    .mitsubishi:hover .dropdowncontent1 {
        display: block;
    }

    .ABB:hover .dropdowncontent2 {
        display: block;
    }

    .bosch:hover .dropdowncontent3 {
        display: block;
    }

    .bottom {
        font-size: 1rem;
    }

/* CSS for click effect for sidebar */
.font {
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
}

.font:active {
    transform: scale(0.7);
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
}

.linkback a {
    display: flex;
    justify-content: center;
    text-decoration: none;
    font-size: larger;
    color: purple;
    padding: 2rem;
}
</style>