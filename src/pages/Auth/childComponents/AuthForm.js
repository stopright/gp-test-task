import React, {useState, useEffect, useContext} from 'react'
import {useHttp} from "../../../hooks/http.hook";
import sha256 from "crypto-js/sha256";
import {MessageContext} from "../../../context/messageBox/messageContext";
import {AuthContext} from "../../../context/auth/authContext";

const MOCKUP_URL = "https://64e1e8ca-32f9-4742-97e7-fe71a2ffe82c.mock.pstmn.io"

function AuthForm() {

    const {loginFn} = useContext(AuthContext)

    const {showMessage} = useContext(MessageContext)

    const {loading, request, error, clearError, setError} = useHttp()

    const [formState, setForm] = useState({
        login: null,
        password: null
    })

    useEffect(() => {

        if (!error) return

        showMessage(error)
        clearError()

    }, [error, showMessage, clearError])

    const changeHandler = (event) => {
        setForm({...formState, [event.target.name]: event.target.value})
    }

    const loginHandler = async (event) => {

        event.preventDefault()

        if (!(formState.login && formState.password)) {
            setError("Укажи данные для входа!")
            return
        }

        const hashed_password = sha256(formState.password)

        const request_url = `${MOCKUP_URL}/auth/?login=${formState.login}&password_hash=${hashed_password}`

        try {

        const response = await request(request_url, 'GET')
        loginFn(response)

        }

        catch (e) {

            showMessage(e.message)

        }
    }

    return (
        <form>
            <div className="form-group">
                <label htmlFor="login">Логин:</label>
                <input type="text" className="form-control" id="login" name="login" onChange={changeHandler}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Пароль:</label>
                <input type="password" className="form-control" id="password" name="password" onChange={changeHandler}/>
            </div>
                <button type="submit" className="btn btn-primary" onClick={loginHandler}>

                    { loading ?
                        (<>
                        <div className="spinner-border spinner-border-sm" role="status">
                            <span className="sr-only"/>
                        </div>
                        <span> Входим... </span>
                        </>
                        ) : (
                        <span>Войти</span>
                        )
                }

                </button>
        </form>
    )
}

export default AuthForm