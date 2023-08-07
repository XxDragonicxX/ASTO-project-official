import { createWebHistory, createRouter } from 'vue-router';
import App from '@/App.vue'
import AboutUs from '@/components/AboutUs.vue'
import MainLayout from '@/components/MainLayout.vue'
import ContactForm from '@/components/ContactForm.vue'
import SupportForm from '@/components/support/SupportForm.vue'
import DownloadForm from '@/components/support/DownloadForm.vue'
import FAQContent from '@/components/support/FAQContent.vue'
import TechSupport from '@/components/support/TechSupport.vue'
import RPAcontent from '@/components/content/RPAcontent.vue'
import TScontent from '@/components/content/TScontent.vue'
import EDMScontent from '@/components/content/EDMScontent.vue'
import SDcontent from '@/components/content/SDcontent.vue'
import ProductsnServices from '@/components/PrdtsSvcs.vue'

const routes = [
	{
		path: '/',
		name:'home',
		component: App,
		children:[{
				path: '',
				component: MainLayout,},],
	},
	{
		path: '/about-us',
		name: 'AboutUs',
		component: AboutUs,
	},
	{
		path: '/Contact',
		name: 'Contact',
		component: ContactForm,
	},
	{
		path: '/support',
		name: 'Support',
		component: SupportForm,
	},
	{
		path: '/support/download',
		name: 'Download',
		component: DownloadForm,
	},
	{
		path: '/support/FAQ',
		name: 'FAQ',
		component: FAQContent,
	},
	{
		path: '/support/tech-support',
		name: 'TechSupport',
		component: TechSupport,
	},
	{
		path: '/products-and-services/RPA',
		name: 'RPAcontent',
		component: RPAcontent,
	},
	{
		path: '/products-and-services/TS',
		name: 'TScontent',
		component: TScontent,
	},
	{
		path: '/products-and-services/EDMS',
		name: 'EDMScontent',
		component: EDMScontent,
	},
	{
		path: '/products-and-services/Software-Documentation',
		name: 'SDcontent',
		component: SDcontent,
	},
	{
		path: '/products-and-services',
		name: 'ProductsnServices',
		component: ProductsnServices,
	}

]

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;