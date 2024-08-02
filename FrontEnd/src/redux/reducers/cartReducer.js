import getData from "./functions/getData";

export default function cartReducer(state = [], action) {
    switch (action.type) {
        // case GET_DATA:{
        //     return [...state, ...action.payload];
        // }
            
        case "REMOVE_FROM_CART":
            return { ...state, cartItems: action.payload };
        case "UPDATE_QUANTITY":
            return { ...state, cartItems: action.payload };
        default:
            return state;
    }
}