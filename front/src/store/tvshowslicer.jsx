import { createSlice } from "@reduxjs/toolkit";

const tvshowslicer=createSlice({
    name:'show',
    initialState:[],
    reducers:{
               add_show:(state,action)=>{state.push(action.payload)}    }
})


export const{add_show}=tvshowslicer.actions
export default tvshowslicer.reducer