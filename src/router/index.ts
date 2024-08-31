import {createRouter, createWebHistory} from 'vue-router'
import ListPage from '@/pages/ListPage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: ListPage,
        },
        // {
        //     path: '/',
        //     component: () => import('layouts/MainLayout.vue'),
        //     children: [
        //         {
        //             path: '',
        //             component: () => import('pages/MainPage.vue'),
        //             children: [
        //                 // {
        //                 //     path: '',
        //                 //     component: () => import('src/modules/ResearchListModule.vue'),
        //                 // },
        //                 {
        //                     path: 'research/',
        //                     component: () => import('src/modules/ResearchListModule.vue'),
        //                 },
        //                 {
        //                     path: 'reports/',
        //                     component: () => import('src/modules/ReportsListModule.vue'),
        //                 },
        //             ],
        //         },
        //         {
        //             path: 'report/:id',
        //             component: () => import('pages/ReportPage.vue'),
        //         },
        //     ],
        // },
    ],
})

export default router
