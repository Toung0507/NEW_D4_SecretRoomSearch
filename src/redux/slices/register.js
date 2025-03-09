import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    store: {}
};

const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {

    }

});

export default registerSlice.reducer;