import Cookies from 'js-cookie'
import { useCallback, useState } from 'react'

export const useCookie = (name, initialValue) => {
    const [value, setValue] = useState(() => {
        const cookie = Cookies.get(name)
        if(cookie) return cookie

        Cookies.set(name, initialValue)

        return initialValue
    })

    const updateCookie = useCallback((newValue, options) => {
        Cookies.set(name, newValue, options)
        setValue(newValue)
    }, [name])

    const deleteCookie = useCallback(() => {
        Cookies.remove(name)
        setValue(null)
    },[name])

    return [value, updateCookie, deleteCookie]
}