import { createContext } from "react";
import * as authService from '../services/authService'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import usePersistedState from "../hooks/usePersistedState";

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
    //authentication data shte q durjim tuk (za lognatiq user)

    // const [auth, setAuth] = useState(() => {
    //     //kogato se prezaredi komponentata(applicationa) da se podsigurim che shte iztriem local storage!!!
    //     localStorage.removeItem('token')
    //     return {}
    // })
    const [auth, setAuth] = usePersistedState('auth', {})

    const [serverError, setError] = useState()
    const navigate = useNavigate()

    //callback koito chaka da bude izvikan ot login i da mu podade values i da zapochne da se izpulnqva logikata tuk
    const loginSubmitHandler = async (values) => {
        try {
            const data = await authService.login(values.email, values.password)
            //danni koito survura vrushta kato se lognem i koito iskame da zapazim
            setAuth(data)
            localStorage.setItem('token', data.accessToken)
            setError(errors => ({ ...errors, loginErrorMsg: undefined }))
            navigate('/')
        } catch (error) {
            navigate('/login')
            setError(errors => ({ ...errors, loginErrorMsg: error.message }))
        }
    }

    const registerSubmitHandler = async (values) => {
        try {
            const data = await authService.register(values.email, values.password)
            setAuth(data)
            localStorage.setItem('token', data.accessToken)
            setError(errors => ({ ...errors, registerErrorMsg: undefined }))
            navigate('/')
        } catch (error) {
            setError(errors => ({ ...errors, registerErrorMsg: error.message }))
        }
    }

    const logoutHandler = () => {
        setAuth({})
        localStorage.removeItem('token')
        navigate('/')
    }

    const authContextValues = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        serverError,
        email: auth.email,
        username: auth.username || auth.email,
        token: auth.accessToken,
        _id: auth._id,
        isAuthenticated: Boolean(auth.accessToken)
    }

    return (
        <AuthContext.Provider value={authContextValues}>
            {children}
        </AuthContext.Provider>
    )
}

