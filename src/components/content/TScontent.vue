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
                    <p class="topbarlinks"> Technology Services </p>
                </nav>
            </div>
            <div class="page-content row">
                <div class="sidebar col-10 col-md-2">
                    <div class="sidebar-content">
                        <div class="RCPA-content effect"> 
                            <router-link to="/products-and-services/RPA" class="RCPA box font">RPA</router-link> 
                        </div>
                        <div class="TS-content effect">
                            <router-link to="/products-and-services/TS" class="TS font">Technology Services</router-link>
                        </div>
                        <div class="EDMS-content effect">
                            <router-link to="/products-and-services/EDMS" class="EDMS box font">EDMS</router-link>
                        </div>
                        <div class="SD-content effect">
                            <router-link to="/products-and-services/Software-Documentation" class="SD box font">Our Products</router-link>
                        </div>
                    </div>
                </div>
                <div class="information col-11 col-md-9">
                    <h2>Technology Services</h2>
                    <div class="content">
                        <div class="point1 row">
                            <div class="image col-12 col-md-3">
                                <img src="@/assets/TSpicture4.png" alt="">
                            </div>
                            <div class="col-12 col-md-9">
                                <h3>Automation System Design and Integration</h3>
                                <div class="info">
                                    Develop and implement custom automation solutions tailored to the specific needs of semiconductor and intelligent building owners. 
                                    This includes designing and integrating robotics, conveyor systems, PLC (Programmable Logic Controller) programming, 
                                    and HMI (Human-Machine Interface) development.
                                </div>
                            </div>
                        </div>
                        <div class="link1"></div>
                        <div class="point2 row">
                            <div class="col-12 col-md-7">
                                <h3>Equipment Upgrades and Retrofits</h3>
                                <div class="info">
                                    Upgrade existing semiconductor manufacturing equipment or intelligent building systems to improve efficiency, performance, and reliability. This could involve hardware modifications, software enhancements, and integrating advanced control systems. 
                                </div>
                            </div>
                            <div class="image col-12 col-md-5">
                                <img src="@/assets/TSpicture3.jpg" alt="">
                            </div>
                        </div>
                        <div class="link2"></div>
                        <div class="point3 row">
                            <div class="col-12 col-md-5 p-1">
                                <div class="image">
                                    <img src="@/assets/TSpicture6.jpg" alt="">
                                </div>
                                <div class="words">
                                    <h3>Machine Vision Systems:</h3>
                                    <br>
                                    Develop and deploy machine vision systems for quality control, defect detection, and process optimization in semiconductor production lines. 
                                    This includes designing image processing algorithms, integrating cameras and sensors, and developing software for real-time analysis.
                                </div>
                            </div>
                            <div class="col-12 col-md-5 p-1">
                                <div class="image">
                                    <img src="@/assets/TSpicture5.png" alt="">
                                </div>
                                <div class="words">
                                    <h3>Process Control Systems:</h3>
                                    <br>
                                    Design and implement advanced process control systems for semiconductor manufacturing and intelligent buildings. 
                                    This involves programming and configuring control devices, such as PID (Proportional-Integral-Derivative) controllers, 
                                    to regulate parameters like temperature, pressure, flow, and humidity. 

                                </div>
                            </div>
                        </div>
                        <div class="link3"></div>
                            <div class="point4">
                                <h3><h3>Automation Technology Integration</h3></h3>
                            <div class="content1">
                                <div class="image col-md-3">
                                    <img src="@/assets/machine1.png" alt="">
                                </div>
                                <div class="col-md-9">
                                    <h3>Data Acquisition and Analytics</h3>
                                    <div class="info">
                                        Develop solutions for data acquisition, logging, and analysis to monitor and optimize the performance of semiconductor equipment 
                                        or intelligent building systems. This could involve implementing data acquisition systems, developing data visualization dashboards,
                                        and utilizing machine learning techniques for predictive maintenance and anomaly detection.
                                    </div>
                                </div>
                            </div>
                            <div class="content2">
                                <div class="image col-md-3">
                                    <img src="@/assets/machine2.png" alt=""></div>
                                <div class="col-md-9">
                                    <h3>Industrial Networking and Communication</h3>
                                    <div class="info">
                                        Establish secure and reliable industrial networking infrastructure to enable seamless communication between machines, sensors, and control systems. 
                                        This includes configuring Ethernet networks, implementing protocols like OPC (OLE for Process Control), and ensuring data integrity and cybersecurity.
                                    </div>
                                </div>
                            </div>
                            <div class="content3">
                                <div class="image col-md-3">
                                    <img src="@/assets/machine3.png" alt="" style="height: 320px;">
                                </div>
                                <div class="col-md-9">
                                    <h3>Equipment Simulation and Virtual Commissioning</h3>
                                    <div class="info">
                                        Utilize simulation software to create digital models of semiconductor equipment or intelligent building systems, 
                                        allowing for virtual commissioning and testing. This helps identify potential issues, optimize workflows, 
                                        and reduce downtime during the installation and commissioning phase.
                                    </div>
                                </div>
                            </div>
                            </div>
                        <div class="link4"></div>
                        <div class="point5">
                            <div class="boxes">
                                <div class="col-md-5">
                                    <div class="image" style="border: 1px solid black;"></div>
                                    <div class="header">
                                        Maintenance and Support Services
                                    </div>
                                    <div class="words">
                                        We offer ongoing maintenance and support services for the automation systems, 
                                        ensuring minimal downtime and efficient operation. This includes troubleshooting, 
                                        software updates, remote monitoring, and preventive maintenance.
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="image" style="border: 1px solid black;"></div>
                                    <div class="header">
                                        Training and Knowledge Transfer
                                    </div>
                                    <div class="words">
                                        We conduct training programs to empower the semiconductor and intelligent building owners' staff in operating, 
                                        maintaining, and troubleshooting the automation systems. This builds in-house expertise and ensure smooth operation of the installed systems.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="link5"></div>
                        <div class="point6">
                            <div class="image col-md-3" style="border: 1px solid black;"></div>
                            <div class="col-md-9">
                                <h3>Custom Software Development</h3>
                                <div class="info">
                                    Develop custom software applications, interfaces, 
                                    and dashboards to meet specific requirements of semiconductor or intelligent building owners. 
                                    This could include data visualization tools, production monitoring systems, or energy management software. 
                                </div>
                            </div>
                        </div>
                        <div class="linkback">
                        <a href="#top">-- Back to top of page -- </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer">
                <PageFooter />
            </div>
        </div>
    </div>
</template>

<script>

import PageHeader from '@/components/Headers/PageHeader.vue';
import PageFooter from '@/components/PageFooter.vue';

    export default {
        name: 'TScontent',
        components: {
            PageHeader,
            PageFooter,
        }
    }
</script>

<style scoped>
    .wholepage {
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
        font-family: 'Montserrat', sans-serif;
    }
    .topbarlinks {
        color: black;
        text-decoration: none;
    }
    .topbarlinks p {
        color: black;
        font-family: 'Montserrat', sans-serif;
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
        padding-left: 0;
        padding-right: 0;
    }
    .sidebar-content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center; 
    }
    .sidebar {
    height: 680px;  
    }

    .sidebar:hover {
        box-shadow: 0px 0px 20px rgba(200, 100, 100, 0.3);
    }

    .sidebar a {
        color: black;
        text-decoration: none;
    }

    
    .RCPA, .TS, .EDMS, .SD {
    font-size:larger;
    text-align: center;
    flex:1
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

    .box, .TS {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;

}

.box:hover {
  background-color:rgba(236, 240, 241, 0.1);
}
.TS-content {
        background-color: rgba(138, 128, 196, 1);
    }

.page-content {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding-bottom: 3rem;
}
/* .information {
    padding-right: 50px;
} */

.content {
    display: flex;
    flex-direction: column;
}
.font {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.7rem;
    text-shadow: 0.1px 1px 1px darkblue;
    /* font-weight: bold; */
}

 h3 {
    color: rgb(88, 75, 163);
    font-weight: bolder;
 }
 @media only screen and (min-width: 768px) {
    .sidebar {
        position: fixed;
        left: 2rem;
    }
    .page-content {
        justify-content: flex-end;
    }
}
    @media only screen and (max-width: 767px) {
        .page-content {
            flex-direction: column;
            align-items: center;
        }
    }

    .information h2 {
        color: black;
        text-decoration: underline;
        padding: 2rem
    }   


    .point1 .col-md-9 {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .point1, .point2, .point6 {
        display: flex;
        height: 100%;
        padding: 2rem;
        margin-right: 0;
        --bs-gutter-x: 0;
    }

    .point2, .point4, .point6 {
        background: rgba(124, 128, 135, 0.3);
    }

    .point3 {
        display: flex;
        justify-content: space-around;
    }

    .image .col-md-3 {
        height: 100%;   
    }

    .content .info{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: large;
        font-family: 'Montserrat', sans-serif;

    }

    .content .col-md-9 {
        padding: 1rem;
    }

    .point3 .col-md-5 {
        display: flex;
        flex-direction: column;
        padding: 1rem;
    }

    .col-md-5 .image {
        height: 300px;
    }

    .col-md-5 .words {
        padding: 2rem;
        font-size: large;
    }

    .link2, .link4, .link6 {
        background: linear-gradient(to bottom, rgba(124, 128, 135, 0.3), rgba(211, 211, 211, 0.1));
        height: 160px;
    }
    .link1, .link3, .link5 {
        background: linear-gradient(to bottom, rgba(211, 211, 211, 0.1),  rgba(124, 128, 135, 0.3));
        height: 160px;
    }

    .point4 {
        display: flex;
        flex-direction: column;
    }

    .point4 h3 {
        text-align: center;
    }
    
    .point4 .col-md-9 {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .point4 .content1, .point4 .content2, .point4 .content3 {
        display: flex;
    }

    .content1, .content2, .content3 {
        padding: 2rem;
    }

    .point5 .boxes{
        display: flex;
        justify-content: space-around;
    }

    .boxes .col-md-5 {
        display: flex;
        flex-direction: column;
        border: 1px solid black;
        border-radius: 1rem;
        height: 600px;
    }

    .point5 .header {
        background-color: rgba(138, 128, 196, 0.5);
        text-align: center;
        font-weight: bold;
        font-size: larger;
        padding: 1rem;
    }

    .point5 .image {
        margin: 2rem;
        border-radius: 1rem;
    }

    .point1 img, .point2 img, .point4 img {
        max-width: 100%;
        max-height: 100%;
        border-radius: 1rem;
    }

    .point3 img {
        max-width: 100%;
        border-radius: 1rem;
        height: 300px;
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