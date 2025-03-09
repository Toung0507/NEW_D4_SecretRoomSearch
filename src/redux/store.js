import { configureStore } from "@reduxjs/toolkit";
import userInfoSliceReducer from "./slices/userInfoSlice";
import { registerReducer } from "./slices/register";
import { registerStoreReducer } from "./slices/registerStoreSlice";
import { registerUserReducer } from "./slices/registerUserSlice";

const store = configureStore({
    reducer: {
        userInfo: userInfoSliceReducer,
        register: registerReducer,
        registerStore: registerStoreReducer,
        registerUser: registerUserReducer
    }
});

export default store;