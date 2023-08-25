import { useParams, useLocation } from 'react-router-dom'
export default () => {
    const params = useParams()

    console.log('params', params)

    const state = useLocation()

    console.log('state', state)

    return (
        <>
            <div>新闻页</div>
        </>
    )
}