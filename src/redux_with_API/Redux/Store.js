import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Reducer } from "../Redux/Reducer";
import thunk from "redux-thunk";

const store = configureStore({
    reducer: Reducer, middleware: [thunk],

})

const rootreducer = combineReducers({
    user: Reducer,

})

export default store;