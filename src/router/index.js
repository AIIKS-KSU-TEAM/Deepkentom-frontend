import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '@/components/Welcome.vue'
import Contact from '@/components/Contact.vue'
import Services from '@/components/Services.vue'
import SoftwareSolutions from '@/components/SoftwareSolutions.vue'
import ConsultancyAndResearch from '@/components/ConsultancyAndResearch.vue'
import EnterpriseArchitecture from '@/components/EnterpriseArchitecture.vue'
import ERPSolutions from '@/components/ERPSolutions.vue'
import PostListComponent from '../components/PostList.vue'; 
import PostDetailComponent from '../components/PostDetail.vue'; 
import CreatePost from '../components/CreatePost.vue';
import About from '@/components/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/software-solutions',
      name: 'SoftwareSolutions',
      component: SoftwareSolutions,
    },
    {
      path: '/consultancy-and-research',
      name: 'ConsultancyAndResearch',
      component: ConsultancyAndResearch,
    },
    {
      path: '/enterprise-architecture',
      name: 'EnterpriseArchitecture',
      component: EnterpriseArchitecture,
    },
    {
      path: '/erp-solutions',
      name: 'ERPSolutions',
      component: ERPSolutions,
    },
    { 
      path: '/create-post', 
      name: 'CreatePost', 
      component: CreatePost 
    },
    {
      path: '/blog',
      name: 'PostList',
      component: PostListComponent,
    },
    {
      path: '/blog/post/:year/:month/:day/:slug',
      name: 'PostDetail',
      component: PostDetailComponent,
      props: true,
    },
  ]
})

export default router
