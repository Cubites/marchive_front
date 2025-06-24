import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

interface headerState {
    menuOn: boolean,
    isLogin: boolean
}

const initialState: headerState = {
    menuOn: false,
    isLogin: false
} 

const headerSlice = createSlice({
    name: 'headerSlice',
    initialState: initialState,
    reducers: {
        onOff: (state, action) => {
            state.menuOn = action.payload;
        }, 
        checkLogin: (state, action) => {
            state.isLogin = action.payload;
        }
    }
});

export const headerActions = headerSlice.actions;
export const selectHeader = (state: RootState) => state.header;
export default headerSlice.reducer;