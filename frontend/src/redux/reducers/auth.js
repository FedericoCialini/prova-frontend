import {createSlice} from "@reduxjs/toolkit";
const authSlice = createSlice({
    name:"auth",
    initialState:{
        logged : sessionStorage.getItem("logged") === "true" || false
    },
    reducers:{
        logUser : (state) =>{
            sessionStorage.setItem("logged","true");
            state.logged = true;
        },
        logoutUser : (state)=>{
            sessionStorage.setItem("logged","false");
            state.logged = false;
        }
    }
});

const {reducer} = authSlice;

export const {logUser,logoutUser} = authSlice.actions;

export default reducer;