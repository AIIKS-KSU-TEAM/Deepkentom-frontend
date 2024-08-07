import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '@/components/Welcome.vue'
import Contact from '@/components/Contact.vue'
import Services from '@/components/Services.vue'
import SoftwareSolutions from '@/components/SoftwareSolutions.vue'
import ConsultancyAndResearch from '@/components/ConsultancyAndResearch.vue'
import EnterpriseArchitecture from '@/components/EnterpriseArchitecture.vue'
import ERPSolutions from '@/components/ERPSolutions.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
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
  ]
})

export default router
