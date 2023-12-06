import { useEffect } from "react";
import * as authService from '../../services/authService'


export default function Logout({logoutHandler}) {

    useEffect(() => {
        authService.logout()
        .then(logoutHandler())
        .catch(err => console.log(err))
    },[])
}