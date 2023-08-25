import { useCallback, useEffect, useState } from 'react'
import { useLoaderData, Outlet, Link, Navigate } from 'react-router-dom'
export default () => {
    const data = useLoaderData()

    const [count, setCount] = useState(0)

    // useEffect(() => {
    //     console.log('我是useEffect')
    // })
    console.log('我是loader过来的数据', data)

    useCallback(() => {

    }, [count])

    return (
        <>
            <div>用户页</div>
            <Link to='/news' state={{ msg: '我是来自于user界面的信息' }}>跳转去News</Link>
            <Outlet />
            {/* <Navigate to='/' /> */}
        </>
    )
}