import React from 'react'
import AuthForm from "./childComponents/AuthForm";

function AuthPage() {

    document.title = "Auth"

    return (
        <div>
            <h1>Привет.</h1>
            <h2>Авторизуйся, пожалуйста.</h2>

        <AuthForm/>
        </div>

    )
}

export default AuthPage