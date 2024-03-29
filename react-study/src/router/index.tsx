import { RouteObject, createBrowserRouter, Routes, Route, createRoutesFromElements, Navigate, useRoutes } from 'react-router-dom'
import { lazy, Fragment } from 'react'

import Index from '../views/Index/Index'
import User from '../views/User/User'
import { Guard } from '../utils/permission'
// 路由懒加载  --- 通过 routeOptions 下面的 lazy 属性去配置，会报错，暂不清楚原因
const News = lazy(() => import('../views/News/News'))
const Hook = lazy(() => import('../views/Hooks/UseMemoTest'))

const Child01 = lazy(() => import('../views/User/child/Child01'))
/* [
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
        // Component: News
        element: Guard(<News />)
        // lazy: () => import('../views/Index/Index'), // 会报错 暂不清楚原因
    },
    {
        path: '/hook',
        element: Guard(<Hook />)
    },
    {
        // 路由嵌套
        path: '/user',
        element: Guard(<User />),
        loader: ({ request, params }) => {
            console.log('request', request)
            console.log('params', params)
            return { data: 1 }
        },
        children: [
            {
                path: 'child01',
                element: <Child01 />
            }
        ]
    }
] */

function Root() {
    return (
        <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/news' element={
                <AuthRoute element={<News></News>}></AuthRoute>
                // <News></News>
            } />

            <Route path='/hook' element={<Hook />} />
            <Route path='/user' element={<User />}>
                {/* <Route path='child01' element={<Child01 />}></Route> */}
            </Route>
        </Routes>
    )
}


function AuthRoute({ element: Component, ...rest }) {
    console.log('路由拦截', Component, rest)
    const isAuth = true
    return (
        <Route {...rest} element={
            isAuth ? (Component) : (<Navigate to='/' replace />)
        }></Route>
    )
}


// const router = createBrowserRouter(RoutesHandler(routes))


export default Root