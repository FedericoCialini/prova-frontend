import {configureStore} from "@reduxjs/toolkit";
import searchReducer from "./reducers/search";
import authReducer from "./reducers/auth";

const store = configureStore({
    reducer:{
        search : searchReducer,
        auth : authReducer
    }
})

export default store;