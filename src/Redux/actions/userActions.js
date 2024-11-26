import axios from "axios"
import { getUserById,  } from "../../utils/APIRoutes";
import { 
    CURRENT_CHAT,
    GET_USER, 
    SET_USER 
} from "../types";


export const getUser = (id) => dispatch => {
    try {
        return axios.get(`${getUserById}/${id}`)
        .then( res=>{
            if(res.status === 200){
                dispatch({type: GET_USER, payload: res.data})
                sessionStorage.setItem("user", res.data)
            }else if(res.status === 404) {
                alert(`${res.data}`)
            }
        })
    } catch (error) {
        console.log( error);
    }
}
export const setUser = user => {
    return {
        type: SET_USER,
        payload: user
    }
}
export const currentChat = (data) => {
    return {type: CURRENT_CHAT, payload: data}
}