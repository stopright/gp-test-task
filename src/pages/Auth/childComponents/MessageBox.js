import React, {useContext, useRef} from 'react'
import {CSSTransition} from "react-transition-group"
import {MessageContext} from "../../../context/messageBox/messageContext";

export const MessageBox = () => {

    const nodeRef = useRef(null)

    const {hideMessage, message} = useContext(MessageContext)

    return (

        <CSSTransition
            nodeRef={nodeRef}
            in={message.visible}
            timeout={{enter: 500, exit: 350}}
            classNames="message"
            mountOnEnter
            unmountOnExit
        >
            <div className="alert alert-danger position-absolute" ref = {nodeRef} style={{top: 0, left: "50%", minWidth: "30%", transform: "translateX(-50%)"}} role="alert">
                {message.text}
                <button type="button" className="close" aria-label="Close" onClick={hideMessage}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </CSSTransition>

    )
}