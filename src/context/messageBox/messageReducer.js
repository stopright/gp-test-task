import {SHOW_MESSAGE, HIDE_MESSAGE} from '../types'

const handlers = {
    DEFAULT: state => state,
    [SHOW_MESSAGE]: (state, {payload}) => ({...payload, visible: true}),
    [HIDE_MESSAGE]: state => ({...state, visible: false})
}

export const messageReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}