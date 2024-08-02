
export default function authReducer(state = {}, action) {
    switch (action.type) {
        case "LOGIN":
            return { ...state, isAuth: true };
        case "LOGOUT":
            return { ...state, isAuth: false };
        default:
            return state;
    }
}