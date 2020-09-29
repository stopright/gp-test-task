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
                const resBody = await data.json()

                throw new Error(`Ошибка: ${resBody.error || 'Something gone wrong...'}`)
            }

            const responseBody = await data.json()

            return responseBody
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