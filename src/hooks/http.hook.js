import {useState, useCallback} from 'react'

export const useHttp = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {

        setLoading(true)

        try {
            const data = await fetch(url,{
                method, body, headers
            })

            if (!data.ok) {
                throw new Error('Something gone wrong...')
            }

            const response_body = await data.json()

            return response_body
        }

        catch (e) {
            setLoading(false)
            setError(e.message)
            throw e
        }

    }, [])

    const clearError = useCallback(() => {setError(null)}, [])

    return {loading, request, error, clearError, setError}

}