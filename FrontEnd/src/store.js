import { legacy_createStore as createStore } from "redux";
import  rootReducer  from "./redux/rootReducer"







export const store = createStore( rootReducer )