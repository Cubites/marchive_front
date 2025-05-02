import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

interface headerState {
    menuOn: boolean
}

const initialState: headerState = {
    menuOn: false
} 

const headerSlice = createSlice({
    name: 'headerSlice',
    initialState: initialState,
    reducers: {
        onOff: (state, action) => {
            state.menuOn = action.payload;
        }
    }
})


export const headerActions = headerSlice.actions;
export const selectHeader = (state: RootState) => state.header;
export default headerSlice.reducer;