import React from 'react'
import {useEffect} from 'react'
import AuthForm from "./childComponents/AuthForm";

export const AuthPage = () => {

    useEffect(() => {
        document.title = "Авторизация"
    }, [])

    return (
        <div className="card vertical-center">
            <div className="card-body">
                <h5 className="card-title">Привет.</h5>
                <h6 className="card-subtitle mb-2 text-muted">Авторизуйся, пожалуйста.</h6>
                <AuthForm/>

            </div>
        </div>

    )
}