<template>
    <div class="wholepage">
    <PageHeader />
    <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link to="/" type="button">Home</router-link></li>
                <li class="breadcrumb-item"><router-link to="/support" type="button">Support</router-link></li>
                <li class="breadcrumb-item active" aria-current="page">FAQ</li>
            </ol>
    </nav>
    <div class="page-content">
        <div class="sidebar col-md-3">
            <div class="sidebar-content">
                <div class="download-content effect"> 
                    <router-link to="/support/download" class="download box font">Download Center</router-link> 
                    <h2 class="color">></h2>
                </div>
                <div class="faq-content">
                    <router-link to="/support/FAQ" class="FAQ box font">FAQ</router-link>
                    <h2>></h2>
                </div>
                <div class="support-content effect">
                    <router-link to="/support/tech-support" class="support box font">Contact Tech Support</router-link>
                    <h2>></h2>
                </div>
                <div class="unknown1-content effect">
                    <router-link to="/support/unknown" class="unknown box font">unknown</router-link>
                    <h2>></h2>
                </div>
                <div class="unknown2-content effect">
                    <router-link to="/support/unknown" class="unknown box font">unknown</router-link>
                    <h2>></h2>
                </div>
                <div class="unknown3-content effect">
                    <router-link to="/support/unknown" class="unknown box font">unknown</router-link>
                    <h2>></h2>
                </div>
            </div>
        </div>
        <div class="information col-md-9">
            <h2>FAQ</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis mi risus. 
                Praesent lectus velit, vulputate nec risus vel, elementum laoreet ipsum. 
                Nulla non mi ac neque vestibulum vestibulum. Etiam pulvinar suscipit nunc sit amet feugiat. 
                Donec pretium urna eget interdum porttitor. Duis urna libero, tempor quis ex non, tristique porta magna. 
                Phasellus tempus rutrum urna id consectetur. Donec justo mi, posuere ac porttitor a, convallis sed arcu. 
                Nullam augue erat, viverra sed dui vel, convallis ullamcorper nunc. 
                Nullam scelerisque nunc sem, vel eleifend tortor scelerisque et.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dolor nisi, laoreet ut nisi id, suscipit tempus orci. Praesent congue, ex sit amet dapibus pharetra, purus turpis tincidunt elit, vitae condimentum lectus massa ac arcu. Ut quis sodales libero. Aliquam et interdum nisl. Mauris nec ligula augue. Fusce porttitor lectus eget nulla efficitur gravida. Donec ac magna turpis. Nulla cursus finibus ex. Morbi vestibulum tincidunt risus, eget pretium diam scelerisque in. Fusce nibh orci, tempus at purus non, commodo aliquet mi. Vivamus maximus ultrices velit ut finibus.

Proin suscipit sed ante sit amet venenatis. Etiam rutrum lorem mauris, vel volutpat purus dapibus quis. Proin sem metus, interdum quis scelerisque at, laoreet posuere lorem. Cras et libero condimentum, convallis turpis ut, consequat dolor. Mauris bibendum ipsum quis tellus dignissim, nec convallis tellus volutpat. Nam molestie vitae lacus eu tempor. Donec eleifend felis ac ex malesuada, sit amet finibus ante aliquam. Donec tristique justo mauris, sodales ullamcorper mauris interdum eget. Vivamus fermentum orci quis dolor gravida, cursus convallis elit congue.

Donec vulputate lacinia orci, eget commodo purus faucibus id. Vivamus scelerisque nisi ut purus commodo, elementum congue mauris eleifend. Vestibulum at elit id velit suscipit ultrices. Phasellus tincidunt cursus mauris, in semper sem aliquet eget. Praesent auctor massa ac dolor efficitur, et commodo nunc malesuada. Fusce porta, lorem in lacinia tempus, eros massa tempor odio, et dictum dui mauris et nisl. Fusce a venenatis turpis, a lobortis ante. Proin ut tellus est. Aliquam vulputate, dolor nec interdum hendrerit, purus lorem posuere dolor, quis fermentum libero eros sit amet ligula. Suspendisse nec turpis accumsan, sagittis arcu et, posuere enim. Sed imperdiet turpis id augue commodo, sit amet sagittis enim elementum.

Fusce nec elementum erat. Aliquam dictum elit et leo feugiat volutpat. Curabitur hendrerit consequat nibh, non elementum velit viverra sed. Nulla sed feugiat massa. Pellentesque eu faucibus nisi. Duis feugiat hendrerit augue, eget tincidunt nisl rhoncus id. Donec dignissim, arcu id hendrerit suscipit, nibh purus tincidunt lorem, vitae pulvinar nulla lacus sed augue. Aenean turpis felis, tempor at velit non, cursus fringilla tortor. Proin ac ipsum purus. Morbi sit amet bibendum mi, eget lacinia odio. Donec vel tellus vitae erat accumsan varius. Etiam rhoncus, mi in tempus ullamcorper, arcu erat imperdiet orci, sit amet consequat felis lacus vitae mi. Duis risus massa, dictum in magna sit amet, lacinia interdum leo.

Vestibulum venenatis, urna at imperdiet suscipit, nisl dolor rhoncus urna, ut gravida nunc mi ut eros. Proin tempor, elit tempus ullamcorper sagittis, dui lacus convallis eros, vel posuere sem lectus in enim. Vivamus luctus eget ante vel fermentum. Suspendisse sodales eros felis, ac sollicitudin diam mattis eu. Cras volutpat hendrerit pulvinar. Aenean sit amet elit mollis, blandit dolor eleifend, ornare erat. Nunc at metus leo. Nullam bibendum ut ligula ut luctus. Fusce ipsum elit, ultrices a porttitor ac, faucibus sit amet libero. Morbi ac orci vitae augue mattis mollis. In imperdiet hendrerit rutrum. Pellentesque ut tincidunt nulla.
            </p>
        </div>
    </div>
    <div class="footer">
    <PageFooter />
    </div>
</div>
</template>

<script>
import PageHeader from '@/components/Headers/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'
    export default {
        name: 'FAQContent',
        components: {
            PageHeader,
            PageFooter,
        }
    }
</script>

<style scoped>
    .wholepage {
        overflow-x: hidden;
        background-color:#FFF5EE
    }
    .download-content, .faq-content, .support-content, .unknown1-content, .unknown2-content, .unknown3-content {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width:100%;
        height: 110px;
    }
    .sidebar {        
        background-color: #f7f7f7;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        transition: box-shadow 0.3s ease-in-out;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 2rem;
    }
    .sidebar-content {
        width: 100%;
    }
    .sidebar, .col-md-3 {
        height: 680px;  
    }

    .sidebar:hover {
        box-shadow: 0px 0px 20px rgba(200, 100, 100, 0.3);
    }

    .download, .FAQ, .support, .unknown {
    font-size:xx-large;
    text-align: center;
    flex:1
    }
    .sidebar a {
        color: black;
        text-decoration: none;
    }

    .effect {
        background-color: transparent;
        background-image: linear-gradient(to right, transparent 50%,rgba(137, 196, 244, 0.5));
        background-size: 200% 100%;
        transition: background-position 0.3s ease-in-out;
    }

    .effect:hover {
        background-position: 100% 0;
    }
    .box, .FAQ {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .box:hover {
    background-color:rgba(236, 240, 241, 0.1);
    }

    .faq-content {
        background-color: rgba(137, 196, 244, 0.5);
    }

    .page-content {
        display: flex;
        flex-direction: row;
        }
    .information {
        padding-left: 50px;
        padding-right: 50px;
    }

    .information h2 {
        color: #CCB17B
    }   
    .font {
        font-family: 'Bree Serif', serif;
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