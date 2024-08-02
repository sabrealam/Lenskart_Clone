import { combineReducers } from "redux";

import authReducer from "./reducers/authReducer";
import cartReducer from "./reducers/cartReducer";
import renderReducer from "./reducers/renderReducer";


export default combineReducers({
    auth: authReducer,
    cart: cartReducer,
    render: renderReducer
})