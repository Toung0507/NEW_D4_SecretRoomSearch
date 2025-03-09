import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    store_id: 1,
    user_id: 1,
    store_contact: "",
    store_method: "",
    store_tax_id: "",
    store_documentation: "",
    store_self_tel: "",
    store_self_address: "",
    store_website: "",
    store_name: "",
    store_address: "",
    store_email: "",
    store_tel: "",
    store_open_time: "",
};

const registerStoreSlice = createSlice({
    name: 'registerStore',
    initialState,
    reducers: {

    }

});

export default registerStoreSlice.reducer;