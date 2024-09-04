import { createSlice } from "@reduxjs/toolkit";


const numberslice=createSlice({
    name:'counter',
    initialState:5,
    reducers:{
        plus:(state,action)=>state+action.payload,
        minus:(state,action)=>state-action.payload,
    }
})

export const{plus,minus}=numberslice.actions
export default numberslice.reducer