import { createBrowserRouter } from 'react-router-dom'
import type { RouteProps } from 'react-router-dom'
import { lazy } from 'react'

import Index from '../views/Index/Index'
import User from '../views/User/User'
// 路由懒加载  --- 通过 routeOptions 下面的 lazy 属性去配置，会报错，暂不清楚原因
const News = lazy(() => import('../views/News/News'))

const Child01 = lazy(() => import('../views/User/child/Child01'))

const router = createBrowserRouter([
    {
        path: '/',
        element: <Index />
    },
    // {
    //     // 动态参数 在相应的页面可以通过 useParams 方法去获取 参数的 值
    //     path: '/news/:id?', // 在 动态参数 id 的后面添加 ? 表示该参数可传可不传，路由都可以匹配
    //     element: <News />
    // },
    {
        // 路由懒加载
        path: '/news/:id?',
        Component: News
        // lazy: () => import('../views/Index/Index'), // 会报错 暂不清楚原因
    },
    // {
    //     // 路由加载器 会在路由加载之前调用，可以通过 useLoaderData 获取 loader 返回的数据 
    //     path: '/user',
    //     // element: <User />,
    //     Component: User,
    //     loader: ({ request, params }) => {
    //         console.log('request', request)
    //         console.log('params', params)
    //         return { data: 1 }
    //     }
    // },
    {
        // 路由嵌套
        path: '/user',
        Component: User,
        loader: ({ request, params }) => {
            console.log('request', request)
            console.log('params', params)
            return { data: 1 }
        },
        children: [
            {
                path: 'child01',
                Component: Child01
            }
        ]
    }
])

export default router