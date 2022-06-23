import {createSlice} from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{
        searchedList : JSON.parse(localStorage.getItem("searched-list")) || []
    },
    reducers:{
        addSearchedLoc : (state,action) =>{
            state.searchedList.unshift(action.payload);
        },
        removeAllLocs : (state,action) =>{
            localStorage.removeItem("searched-list");
            state.searchedList = [];
        }
    }
})

const {reducer} = searchSlice;

export const {addSearchedLoc,removeAllLocs} = searchSlice.actions;
export default reducer;
