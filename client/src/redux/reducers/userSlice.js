import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateUser: (state, action) => {
            state.currentUser = action.payload.user;
        },
        loginSuccess: (state, action) => {
            state.currentUser = action.payload.user;
            localStorage.setItem("Krist-app-token", action.payload.token);
        },
        logout: (state, action) => {
            state.currentUser = null;
            localStorage.removeItem("Krist-app-token");
        },
    },
});

export const { updateUser, loginSuccess, logout } = userSlice.actions;

export default userSlice.reducer;
