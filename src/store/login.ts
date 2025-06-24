import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

interface login {
    nickname: string
}

const initialState: login = {
    nickname: "name"
}

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: initialState,
    reducers: {
        updateNickname: (state, action) => { state.nickname = action.payload }
    }
});

export const loginActions = loginSlice.actions;
export const selectLogin = (state: RootState) => state.login;
export default loginSlice.reducer;