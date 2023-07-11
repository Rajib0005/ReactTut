import { ReactNode, createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ICredential } from '../interfaces/ICredentials'

type Props = {
    children ?: ReactNode;
}
interface IAuthProps {
    authenticated: ICredential,
    setAuthenticated: (newState: ICredential) => void
}

const initialValues={
    authenticated : {} as ICredential,
    setAuthenticated : ({} : ICredential)=>{}
}

const AuthContext = createContext<IAuthProps>(initialValues);

const AuthProvider = ()=>{
    const [authenticated, setAuthenticated] = useState(()=>{
       var storeData : ICredential = JSON.parse(localStorage.getItem("user") as string)
       return storeData
    });
    return (
        <AuthContext.Provider value={{authenticated, setAuthenticated}}>
            <Outlet />
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider};
