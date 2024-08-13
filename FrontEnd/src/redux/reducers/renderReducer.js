import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS, GET_DATA } from "../actionTypes";

let init = {
    loading: false,
    data: [],
    error: null
}


export default function renderReducer(state = init, action) {
    // console.log(state, "Rendder reducer")
    switch (action.type) { 
        case FETCH_REQUEST:{
            return {...state , loading : true}
        }
        case FETCH_SUCCESS:{
            return {...state , loading : false ,  data : action.payload}
        }
        case FETCH_FAILURE:{
            return {...state , loading : false , error : true}
        }
        
        default:
            return state;
    }
}
// export default function renderReducer(state = [], action) {
//     // console.log(state, "Rendder reducer")
//     switch (action.type) {
//         case GET_DATA:{
//             return [...action.payload]
//         } 
        
//         default:
//             return state;
//     }
// }