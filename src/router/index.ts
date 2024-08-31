import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import ConverterPage from '@/pages/ConverterPage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'main',
            component: MainPage,
        },
        {
            path: '/converter',
            name: 'converter',
            component: ConverterPage,
        },
    ],
})

export default router
