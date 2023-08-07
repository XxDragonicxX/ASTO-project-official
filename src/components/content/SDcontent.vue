<template>
    <div>
        <PageHeader />
        <div class="wholepage">
        <nav aria-label="breadcrumb">
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
                    <p class="topbarlinks"> Our Products </p>
                </nav>
            </div>
        </nav>
        <div class="page-content">
            <div class="sidebar col-md-2">
                <div class="sidebar-content">
                    <div class="RCPA-content effect"> 
                        <router-link to="/products-and-services/RPA" class="RCPA box font"><strong>RPA</strong></router-link> 
                        <h2>></h2>
                    </div>
                    <div class="TS-content effect">
                        <router-link to="/products-and-services/TS" class="TS box font"><strong>Technology Services</strong></router-link>
                        <h2>></h2>
                    </div>
                    <div class="EDMS-content effect">
                        <router-link to="/products-and-services/EDMS" class="EDMS box font"><strong>EDMS</strong></router-link>
                        <h2>></h2>
                    </div>
                    <div class="SD-content effect">
                        <router-link to="/products-and-services/Software-Documentation" class="SD font"><strong>Our Products</strong></router-link>
                        <h2>></h2>
                    </div>
                </div>
            </div>
            <div class="information col-md-9">
                <h2>Our Products</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a viverra risus. Sed nec lectus laoreet, mattis augue vel, hendrerit nisl. 
                    Suspendisse vulputate leo mi, in porta orci pulvinar ac. Aliquam ipsum nisl, posuere in rhoncus vitae, tincidunt sed augue. 
                    In a lorem vel ligula pellentesque pretium in sed purus. Nam vulputate sapien sit amet laoreet ullamcorper. Integer vel metus lacus. 
                    Vestibulum vulputate a ligula non tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                    Quisque id nulla a tortor fringilla ultrices. Proin vel quam a ante imperdiet molestie consectetur ac turpis. 
                    Proin pretium eu libero et volutpat. Praesent hendrerit auctor ligula vel laoreet. 
                    Aenean quis magna ut diam lacinia lacinia ac ornare tellus. Praesent eu massa et justo aliquam tincidunt. 
                    Donec magna augue, vulputate eget pharetra non, finibus sit amet nulla.
                </p>
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
        name: 'SDcontent',
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

    .box, .SD {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;

}
.SD-content {
    background-color: rgba(138, 128, 196, 1);
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

.page-content {
    display: flex;
    flex-direction: row;
}
.information {
    padding-left: 50px;
    padding-right: 50px;
}
.font {
        font-family: 'Open Sans', serif;
        font-size: 1.7rem;
        text-shadow: 0.5px 1px 5px black;
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
            margin-top: 20px; /* Add some space between the content and the footer */
        }
        .page-content {
            flex-direction: column;
            align-items: center;
        }
    }
</style>