import {createContext} from 'react'

const noop = () => {}

export const AuthContext = createContext(
    {
        authData: {
                login: "",
                name: "Иван",
                role: "Администратор системы",
                department: "БДР",
                products: []
        },
        authFunctions: {
                loginFn: noop,
                logoutFn: noop,
        },
        isAuth: false
    })

