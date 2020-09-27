import React, {useEffect, useContext} from 'react'
import {ProfileHeader} from "./childComponents/ProfileHeader"
import {ProfileBody} from "./childComponents/ProfileBody"
import {ProfileFooter} from "./childComponents/ProfileFooter"
import {AuthContext} from "../../context/auth/authContext";

export const ProfilePage = () => {

    const authObj = useContext(AuthContext)
    const {authData} = authObj
    const authFunctions = {
        loginFn: authObj.loginFn,
        logoutFn: authObj.logoutFn
    }

    useEffect(() => {
        document.title = "Профиль пользователя"
    }, [])

    return (
        <div>
            <ProfileHeader authData={authData} authFunctions={authFunctions}/>
            <ProfileBody productArray={authData.products}/>
            <ProfileFooter/>
       </div>
)
}
