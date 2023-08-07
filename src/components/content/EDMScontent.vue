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
                    <p class="topbarlinks"> EDMS </p>
                </nav>
            </div>
            <div class="page-content">
                <div class="sidebar col-md-2">
                    <div class="sidebar-content">
                        <div class="RCPA-content effect"> 
                            <router-link to="/products-and-services/RPA" class="RCPA box font">RPA</router-link> 
                        </div>
                        <div class="TS-content effect">
                            <router-link to="/products-and-services/TS" class="TS box font">Technology Services</router-link>
                        </div>
                        <div class="EDMS-content effect">
                            <router-link to="/products-and-services/Machine-Design" class="EDMS font">EDMS</router-link>
                        </div>
                        <div class="SD-content effect">
                            <router-link to="/products-and-services/Software-Documentation" class="SD box font">Our Products</router-link>
                        </div>
                    </div>
                </div>
                <div class="information col-md-9">
                    <h2>Electronics Design and Manufacturing Services (EDMS)</h2>
                    <div class="intro">
                        <p>
                            Asto Systems offer comprehensive solutions for designing, building, and testing a wide range of electronic products. Our expertise lies in temperature monitoring systems, control systems, systems testing, and the development of IoT-enabled products. With a strong background in electronics engineering and extensive experience in the field, we provide the following services:
                        </p>
                    </div>
                    <div class="design-services">
                        <div class="title">
                            <h3>Our Design Services</h3>
                        </div>
                        <div class="design-info row">
                            <div class="col-12 col-md-3 p-1">
                                <img src="@/assets/designbox1.png" alt="">
                            </div>
                            <div class="col-12 col-md-3 p-1">
                                <img src="@/assets/designbox2.png" alt="">
                            </div>
                            <div class="col-12 col-md-3 p-1">
                                <img src="@/assets/designbox3.png" alt="">
                            </div>
                        </div>
                        <div class="line">
                        </div>
                    </div>
                    <div class="manufacturing-services row">
                        <h3>Our Manufacturing Services</h3>
                            <div class="manu-left col-12 col-md-3">
                                <img src="@/assets/picturebox.png" alt="">
                            </div>
                            <div class="manu-right col-12 col-md-9">
                            <div class="pcb-assembly">
                                <img src="@/assets/x-button.png" alt="">
                                <p>PCB Assembly: We have the capabilities to handle surface-mount technology (SMT) and through-hole component assembly, ensuring precise and reliable PCB manufacturing.</p>
                            </div>
                            <div class="prototyping">
                                <img src="@/assets/x-button.png" alt="">
                                <p>Prototyping: Our team can rapidly prototype electronic devices to validate designs before full-scale production, minimizing risks and reducing time to market.</p>
                            </div>
                            <div class="optimisation">
                                <img src="@/assets/x-button.png" alt="">
                                <p>Manufacturing Optimization: We provide expertise in optimizing the manufacturing process, streamlining production workflows, and implementing quality control measures.</p>
                            </div>
                            </div>
                        <div class="line">
                        </div>
                    </div>
                    <div class="testing-and-QA">
                        <div class="functional-testing row">
                            <div class="test-left col-12 col-md-5 p-1">
                                <img src="@/assets/picturebox.png" alt="">
                            </div>
                            <div class="test-right col-12 col-md-5 p-1">
                                <h4>Functional Testing</h4>
                                <p>We conduct rigorous testing procedures to ensure that electronic products meet specified functionality requirements.</p>
                            </div>
                        </div>
                        <div class="environmental-testing row">
                            <div class="test-left col-12 col-md-5 p-1">
                                <h4>Environmental Testing</h4>
                                <p>Our team performs environmental tests to evaluate product performance under different conditions, such as temperature, humidity, and vibration.</p>
                            </div>
                            <div class="test-right col-12 col-md-5 p-1">
                                <img src="@/assets/picturebox.png" alt="">
                            </div>
                        </div>
                        <div class="compliance-testing row">
                            <div class="test-left col-12 col-md-5 p-1">
                                <img src="@/assets/picturebox.png" alt="">
                            </div>
                            <div class="test-right col-12 col-md-5 p-1">
                                <h4>Compliance testing</h4>
                                <p>We assist in obtaining certifications and compliance with industry standards, such as FCC, CE, and RoHS, ensuring regulatory compliance for your products.</p>
                            </div>
                        </div>
                    </div>
                    <div class="linkback">
                    <a href="#top">-- Back to top of page -- </a>
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
        name: 'EDMScontent',
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
    .sidebar {
        height: 680px;  
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
    .box, .EDMS {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;

}
.EDMS-content {
    background-color: rgba(138, 128, 196, 1);
}


.page-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.information {
    padding-left: 50px;
    padding-right: 50px;
}
 

.font {
        font-family: 'Montserrat', sans-serif;
        font-size: 1.7rem;
        text-shadow: 0.1px 1px 1px darkblue;
        /* font-weight: bold; */
    }

h2, h3 {
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    font-weight: bolder;
    text-shadow: 1px 1px purple;
    color: black;
    margin: 2em;
}

.intro {
    background-color: rgba(138, 128, 196, 0.5);
    margin-top: 3rem;
    margin-bottom: 10rem;
    padding: 2em;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
}

.design-services {

}

.design-info {
    display: flex;
    justify-content: space-around;
}
.design-info img {
    height: 100%;
    width: 100%;
}

.line {
    margin-top: 10rem;
    margin-bottom: 7rem;
    height: 1px;
    padding-left: 30px;
    padding-right: 30px;
    background-color: white;
}

.manufacturing-services {
    display: flex;
}
.manufacturing-services img {
    max-width: 100%;
}

.manu-right {
    display: flex;
    flex-direction: column;
    padding: 2em;
    justify-content: space-between;
}

.manu-right img {
    padding-top: 0.5em;
    width: 50px;
    height: 50px;
}

.manu-left img {
    height: 700px;
}

.pcb-assembly, .prototyping, .optimisation {
    display: flex;
    height: 33%;
}
.manufacturing-services p, .functional-testing p, h4, .environmental-testing p, .compliance-testing p {
    color: black;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
}

h4 {
    text-decoration: underline;
}

.manufacturing-services .manu-right {
    background-color: rgb(138, 128, 196);
    /* height: 700px; */
}

.functional-testing, .environmental-testing, .compliance-testing {
    /* height: 500px; */
    display: flex;
    justify-content: space-around;
    margin-bottom: 100px;
    padding: 5rem;
}

.functional-testing img, .environmental-testing img, .compliance-testing img {
    height: 500px;
    width: 100%;
}

.functional-testing .test-right {
    background: url("@/assets/newtestpicture1.png");
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.environmental-testing .test-left {
    background: url("@/assets/newtestpicture2.png");
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.compliance-testing .test-right {
    background: url("@/assets/newtestpicture3.png");
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
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