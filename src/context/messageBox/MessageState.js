import React, {useReducer, useCallback} from 'react'
import {MessageContext} from "./messageContext";
import {messageReducer} from "./messageReducer";
import {HIDE_MESSAGE, SHOW_MESSAGE} from "../types";

export const MessageState = ({children}) => {

    const [state, dispatch] = useReducer(messageReducer, {visible: false})

    const showMessage = useCallback((text) => {
        dispatch({
            type: [SHOW_MESSAGE],
            payload: {text}
        })
    }, [])

    const hideMessage = useCallback(() => {
        dispatch({
            type: [HIDE_MESSAGE]
        })
    }, [])

    return (
        <MessageContext.Provider value={{showMessage, message: state, hideMessage}}>
            {children}
        </MessageContext.Provider>
    )
}