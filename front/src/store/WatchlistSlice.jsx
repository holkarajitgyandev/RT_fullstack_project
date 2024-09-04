import { createSlice } from "@reduxjs/toolkit";

const watchSlice= createSlice({
    name:'watchlist',
    initialState:[],
    reducers:{
        add_to_list:(state,action)=>{ state.push(action.payload);
            
        },
        remove_from_list :(state,action)=> state.filter(item=>item.id !== action.payload.id)
    }
})

export const{add_to_list,remove_from_list}=watchSlice.actions
export default watchSlice.reducer


