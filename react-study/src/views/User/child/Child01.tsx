export default () => {
    return (
        <>
            <div>我是user的child01</div>
        </>
    )
}

/* import { Routes, Route, Navigate } from 'react-router-dom';//定义一个路由拦截函数
function PrivateRoute({ element: Component, ...rest }) {
    const isAuthenticated = true; //这里可以根据具体需求判断用户是否登录
    return (
        <Route{...rest} element={isAuthenticated ? (Component) : (<Navigate to="/" replace />)} />
    );
}
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <PrivateRoute path="/dashboard" element={<Dashboard />} />
                <Route path="/logout" element={<Navigate to="/" />} /></Routes>
        </div>);
} */