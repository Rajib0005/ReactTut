import { useCallback, useContext } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import jsonData from '../data/EmployeeData';
import { AuthContext } from '../contexts/AuthContext';
import { ICredential } from '../interfaces/ICredentials';



export default function useAuthentication() {
    const { authenticated, setAuthenticated } = useContext(AuthContext);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    // authenticate user 
    const authValidation = useCallback((creadential: ICredential) => {
        const user = jsonData.find(ele => (creadential.email === ele.eamil && creadential.password === ele.password));
        return user;
    }, []);


    // login
    const login = useCallback((data: ICredential) => {
        const redirectedpath = searchParams.get("redirect") ?? '/dashboard';
        if (!authValidation(data))  throw Error('Wrong Email & Password')
            const userDetails = authValidation(data);
            setAuthenticated(data)
            localStorage.setItem("user", JSON.stringify(userDetails))
            navigate(redirectedpath);
    }, [searchParams])

    // logout 
    const logout = useCallback(() => {
        localStorage.removeItem("authState")
        navigate('/');
    }, [])

    return { login, authValidation, logout }
}
