import { ReactElement } from "react";
import { RouteObject } from "react-router-dom";

// 路由守卫
export const Guard = (element: ReactElement) => {
    console.log('路由拦截')
    return element
}

export const RoutesHandler = (router: RouteObject[]) => {
    const newRouter = router.map(route => {
        const { path, element, children } = route
        const guardElement = Guard(element)
        console.log('router', route)
        return {
            ...route,
            element: guardElement,
        }
    })
    return newRouter
}

