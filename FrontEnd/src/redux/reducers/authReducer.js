import { LOGIN, LOGOUT } from "../actionTypes";

export default function authReducer(state = {}, action) {
    switch (action.type) {
        case LOGIN:
            return { ...state, isAuth: true, user: action.payload };
        case LOGOUT:
            return { ...state, isAuth: false , user: null };
        default:
            return state;
    }
}