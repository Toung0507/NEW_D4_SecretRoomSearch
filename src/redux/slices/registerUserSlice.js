import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user_id: 0,
    user_role: "",
    user_reg_method: "信箱",
    user_name: "",
    user_email: "",
    user_img: "",
    user_bhd: "",
    user_tel: "",
    user_password: "",
    user_create_at: "",
    user_update_at: "",
    user_sex: ""
};

const registerUserSlice = createSlice({
    name: 'registerUser',
    initialState,
    reducers: {

    }

});

export default registerUserSlice.reducer;