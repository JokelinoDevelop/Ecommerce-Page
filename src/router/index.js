import { createRouter, createWebHistory } from 'vue-router'
import Collections from '@/views/CollectionsView.vue'
import Men from '@/views/MenView.vue'
import Women from '@/views/WomenView.vue'
import About from '@/views/AboutView.vue'
import Contact from '@/views/ContactView.vue'
import ItemPage from '@/components/ItemPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/collections' },
    { path: '/collections', component: Collections },
    { path: '/collections/:itemId', component: ItemPage, props: true },
    { path: '/men', component: Men },
    { path: '/men/:itemId', component: ItemPage, props: true },
    { path: '/women', component: Women },
    { path: '/women/:itemId', component: ItemPage, props: true },
    { path: '/about', component: About },
    { path: '/contact', component: Contact }
  ]
})

export default router
