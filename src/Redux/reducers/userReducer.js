import { CURRENT_CHAT, GET_USER, SET_USER } from "../types"

const initialState = {
    user: "",
    contacts: [],
    chat: "",
}
export const userReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_USER: {
            return {
            ...state,
            user: action.payload
            }
        } 
        case SET_USER: {
            return{
                ...state,
                user: action.payload
            }
        }
        case CURRENT_CHAT: {
            return {
                ...state,
                chat: action.payload
            }
        }
        default: return state
    }
}   
