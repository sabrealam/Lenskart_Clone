import { GET_DATA } from "../actionTypes";


export default function renderReducer(state = [], action) {
    console.log(state, "Rendder reducer")
    switch (action.type) {
        case GET_DATA:{
            return [...action.payload]
        } 
        
        default:
            return state;
    }
}