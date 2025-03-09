import { configureStore } from "@reduxjs/toolkit";
import userInfoSliceReducer from "./slices/userInfoSlice";


const store = configureStore({
    reducer: {
        userInfo: userInfoSliceReducer
    }
});

export default store;