import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {  LogInReducer } from "./Reducers/logInReducer";


const reducer= combineReducers({
    logedUser:LogInReducer,
})


const midl=[thunk];


const initialState={
     
   logedUser:{
        user:"undefined"
    }
    
}


export const store=createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...midl))
)