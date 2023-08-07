<template>
    <div class="check">
    <PageHeader />
        <div class="main">
            <div class="picture">
                <div>
                    <nav class="topbar">
                        <router-link to="/" class="topbarlinks">
                            <p class="blue">Home</p>
                        </router-link>
                        <p class="topbarlinks">/ About us </p>
                    </nav>
                </div>
            </div>
            <div class="who-are-we scroll-trigger">
                <div class="row">
                    <div class="left col-md-6 px-5">
                    <div class="heading">
                        <h2>
                            <strong>Who</strong>
                            We are
                        </h2>
                    </div>
                    <div class="justify">
                        <p>Welcome to Asto Systems Pte Ltd, 
                            <br>    
                        your trusted partner in delivering cutting-edge technological solutions for businesses operating in the hotel and semiconductor industries.
                            <br>
                        Since our inception in 2002, we have been at the forefront of innovation, continuously evolving our solutions to stay ahead of the rapidly changing technological landscape.
                            <br>
                        We have tailored our services to cater specifically to the unique needs and challenges faced by organizations in the hotel and semiconductor sectors.
                        </p>
                    </div>
                    </div>
                    <div class="right col-md-6 px-5">
                    <h2 class="heading">
                        <strong>What</strong>
                        We Do
                    </h2>
                    <div class="justify">
                        <p>
                        Whether you're looking to automate repetitive tasks, enhance system documentation, optimize your technological infrastructure, or leverage our expertise in electronics design and manufacturing,
                            <br>
                        we have the solutions to help you achieve your goals.
                            <br>
                        With over two decades of experience, we specialize in providing a wide range of services, including 
                            <br>
                            <ul>
                                <li>Robotic Process Automation (RPA), </li>
                                <li>Systems Documentation, </li>
                                <li>Technology Services, </li>
                                <li>Electronics Design </li>
                                <li>Manufacturing Services.  </li>
                            </ul>
                        </p>
                    </div>
                    </div>
                </div>
            </div>
            <div class="why-us scroll-trigger">
                <div class="heading">
                    <h2>
                        <strong>Why</strong>
                        Us
                    </h2>
                </div>
                <div class="justify">
                    <p>At Asto Systems, we <strong>understand the dynamic nature of today's business environment and the ever-increasing demand for streamlined and efficient processes.</strong>
                            <br>
                        That's why we have tailored our services to cater specifically to the <strong>unique needs and challenges faced by organizations in the hotel and semiconductor sectors.</strong>
                            <br>
                        Whether you're looking to automate repetitive tasks, enhance system documentation, optimize your technological infrastructure, 
                            <br>
                        or leverage our expertise in electronics design and manufacturing, we have the solutions to help you achieve your goals.</p>
                </div>
            </div>
            <div class="elaboration scroll-trigger">
                <div class="heading">
                    <h2>
                        <strong>How</strong>
                        We Can Help
                    </h2>
                </div>
                <div class="justify">
                    <div class="first">
                        <div class="content-heading">
                            <h4>
                                <strong>RPA</strong>
                            </h4>
                        </div>
                        <div class="justify">
                            <p>
                            One of our core offerings is Robotic Process Automation (RPA), a transformative technology that automates repetitive and rule-based tasks, 
                                <br> 
                            freeing up valuable human resources to focus on more strategic initiatives. By implementing RPA, businesses can significantly enhance <strong>operational efficiency,
                                <br>
                            reduce errors, and accelerate task completion, ultimately leading to improved customer satisfaction and increased profitability.</strong>
                            </p>
                        </div>
                    </div>
                    <div class="second">
                        <div class="content-heading">
                            <h4>
                                <strong>Systems Documentation Services</strong>
                            </h4>
                        </div>
                        <div class="justify">
                            <p>
                               Our comprehensive Systems Documentation Services help organizations <strong>effectively capture, organize, 
                               and maintain critical information related to their systems and processes. </strong>
                                <br>
                               Our documentation experts work closely with your team to ensure that all essential knowledge is accurately documented, 
                                <br>
                               enabling seamless knowledge transfer, process optimization, and enhanced decision-making.
                            </p>
                        </div>
                    </div>
                    <div class="third">
                        <div class="content-heading">
                            <h4>
                                <strong>Technology Services</strong>
                            </h4>
                        </div>
                        <div class="justify"></div>
                            <p>
                                Our Technology Services encompass a wide range of solutions tailored to your specific needs. 
                                    <br>
                                From IT infrastructure design and implementation to network security, software development, and system integration, we provide end-to-end technology services 
                                    <br>
                                that <strong>empowers your organization to thrive in the digital era.</strong>
                            </p>
                    </div>
                    <div class="fourth">
                        <div class="content-heading">
                            <h4>
                                <strong>Electronics Design and Manufacturing Services (EDMS)</strong>
                            </h4>
                        </div>
                        <div class="justify">
                            <p>
                                Our Electronics Design and Manufacturing Services (EDMS) enable businesses to leverage our expertise in designing and manufacturing high-quality electronic components
                                and systems.
                                    <br>
                                <strong>With a focus on innovation, quality, and reliability, we assist our clients in bringing their electronic products to market efficiently and effectively.</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="get-in-contact scroll-trigger">
                <div class="heading">
                    <h2>
                        <strong>Join Us</strong>
                        Today
                    </h2>
                </div>
                <div class="justify">
                    <p>
                        At Asto Systems, we take pride in our strong partnerships with industry-leading companies, enabling us to deliver the most innovative and reliable solutions to our clients. 
                            <br>
                        With our deep understanding of the hotel and semiconductor sectors, we are committed to helping businesses leverage technology to drive growth, 
                            <br>
                        streamline operations, and stay ahead of the competition.
                            <br>
                        
                        Whether you're a hotel chain looking to enhance guest experiences or a semiconductor manufacturer seeking to optimize production processes, 
                            <br>
                        Asto Systems is here to support your digital transformation journey. 
                            <br>
                            <br>
                        <strong>Contact us today to learn more about our comprehensive range of services and how we can empower your business to thrive in the digital age!</strong>
                    </p>
                </div>
            </div>
            <div class="bottom-link">
                <router-link to="/contact" type="button" class="btn">
                    Contact Us Today!
                </router-link>
            </div>
        </div>
    <PageFooter />
    </div>
    <router-view></router-view>
</template>

<script>
import PageHeader from '@/components/Headers/PageHeader.vue';
import PageFooter from '@/components/PageFooter.vue';

    export default {
        name: 'AboutUs',
        components: {
            PageHeader,
            PageFooter,
        }
    }
</script>

<style scoped>
.check {
    overflow-x: hidden;
    /* background:linear-gradient(to right, rgba(5, 61, 171, 0.3),rgba(125, 205, 255, 0.3), rgba(5, 61, 171, 0.3) ); */
    display: flex;
    flex-direction: column;
}
.main {
    height: 100%;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(211, 211, 211, 0.8);
}
.picture {
        padding-top: 1rem;
        width: 100%;
        left: auto;
        right: auto;
        display: flex;
        align-items: flex-end;
    }

    .topbarlinks {
        display: flex;
    }
    .topbar {
        display: flex;
        align-items: center;
        color: black;
    }
    .topbar p {
        padding-left: 10px;
        color: black;
    }
    .topbarlinks p {
        text-decoration: none;
    }
    .topbarlinks .blue {
        text-decoration: underline;
    }

    h2 {
        text-decoration: underline;
    }
    .who-are-we {
        width: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 5rem;
    }

    .why-us {
        width: 90%;
        margin-top: 5rem;
        padding: 1rem;
        border: 1px solid black;
        box-shadow: 0 0 10px rgba(138, 128, 196, 1);
    }
    .get-in-contact {
        width: 90%;
        padding: 1rem;
    }

    .elaboration {
        width: 90%;
        margin-top: 5rem;
    }
    .elaboration .heading {
        margin-bottom: 2rem;
    }
    .first, .second, .third, .fourth {
        width: 100%;
        border: 0.5px solid black;
        border-top: 3px solid rgba(138, 128, 196, 1);
        box-shadow: 0 0 10px rgba(138, 128, 196, 1);
        padding: 1rem;
        margin-bottom: 6rem;
    }
    .content-heading {
        text-align: center;
    }

    .bottom-link {
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    .btn {
        text-decoration: none;
        color: black;
        background-color: rgba(138, 128, 196, 1);
        transition: background-color 0.3s, color 0.3s;
    }

    .btn::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background-color: rgba(138, 128, 196, 0.5);
        z-index: -1;
        transition: left 0.3s;
    }
    .btn:hover {
        background-color: rgba(138, 128, 196, 0.5);
      color: #000;
    }

    .btn:hover::before {
      left: 0;
    }

    p, li {
        color: black;
        font-family: 'Open Sans', sans-serif;
        font-size: larger;
    }
    img {
        height: 100%;
        width: 100%;
    }
    
    .scroll-trigger {
    opacity: 0;
    transform: translateY(100px);
    animation: fade-in-up 2s forwards;
    scroll-margin-top: 200px; /* Adjust the value as needed */
    }
    
    @keyframes fade-in-up {
    0% {
      opacity: 0;
      transform: translateY(100px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>