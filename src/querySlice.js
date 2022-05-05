import { createSlice } from "@reduxjs/toolkit";

export const querySlice = createSlice({
    name: 'query',
    initialState: {
        value: "",
    },
    reducers: {
        changeQuery: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { changeQuery } = querySlice.actions

export default querySlice.reducer