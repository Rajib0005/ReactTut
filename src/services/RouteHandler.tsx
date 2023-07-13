import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext, AuthProvider } from '../contexts/AuthContext';
import { useContext } from 'react';
import { Routes as Router, Route } from 'react-router-dom'
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import About from '../pages/About';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import AuthGuard from './AuthGuard';
import Todo from '../pages/Todo';



type IRouteHandlerProps = {}

export const redirectPath = `/?redirect=${location.pathname}`
const PrivateRoute = () => {
    const { authenticated } = useContext(AuthContext)
    if (!authenticated) return <Navigate to={redirectPath} />
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

const RoutesHandler = (props: IRouteHandlerProps) => {
    return (
        <div className="Routecontainer">
            <Router>
                <Route element={<AuthProvider />}>
                    <Route index element={<Login />} />
                    <Route element={<PrivateRoute />} >
                        <Route element={<AuthGuard permission='user.dashboard' />}>
                            <Route path='dashboard' element={<Dashboard />} />
                        </Route>
                        <Route element={<AuthGuard permission='user.about' />}>
                            <Route path='about' element={<About />} />
                        </Route>
                        <Route element={<AuthGuard permission='user.home' />}>
                            <Route path='home' element={<Home />} />
                        </Route>
                            <Route path='todos' element={<Todo />} />
                    </Route>
                </Route>
            </Router>
        </div>
    )
}

export default RoutesHandler;
