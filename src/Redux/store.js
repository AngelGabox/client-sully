import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk"; //maneja todas las acciones que seas asincronicas, 
import rootReducer from "./reducers/index";

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));