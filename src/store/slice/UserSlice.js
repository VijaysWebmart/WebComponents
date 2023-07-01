import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:[],
    reducers:{
        addUser(state,action)
        {
            state.push(action.payload)
        }
    }
})
