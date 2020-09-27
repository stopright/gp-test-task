import {useState, useCallback, useEffect} from 'react'

const storageName = "userData"

export const useAuth = () => {

    const [authData, setAuthData] = useState({isAuth: false})

    const loginFn = useCallback((responseData) => {

        const authObj = {...authData, ...responseData, isAuth: true}

        setAuthData({...authObj})
        localStorage.setItem(storageName, JSON.stringify({...authObj}))

    }, [authData])

    const logoutFn = useCallback(() => {

        setAuthData({...authData, isAuth: false})
        localStorage.removeItem(storageName)

    }, [authData])

    useEffect(() => {

        const authDataStorage = JSON.parse(localStorage.getItem(storageName))

        if (authDataStorage && authDataStorage.isAuth) {
            setAuthData({...authDataStorage})
        }

    }, [])

    return {loginFn, logoutFn, authData: {...authData}}

}

