import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/',
        children: [
            {
                path: '/',
                component: () => import('../components/Computed.vue'),
            },
            {
                path: '/ClassAndStyle',
                component: () => import('../components/ClassAndStyle.vue'),
            },
            {
                path: '/Watch',
                component: () => import('../components/Watch.vue'),
            },
            {
                path: '/PropsAndEmit',
                component: () => import('../components/PropsAndEmit.vue'),
            },
            {
                path: '/Directive',
                component: () => import('../components/Directive.vue'),
            },
            {
                path: '/Plugins',
                component: () => import('../components/Plugins.vue'),
            },
            {
                path: '/Teleport',
                component: () => import('../components/Teleport.vue'),
            },
            {
                path: '/Suspense',
                component: () => import('../components/Suspense.vue'),
            },
            {
                path: '/Touch',
                component: () => import('../components/Touch.vue'),
            }
        ]
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router
