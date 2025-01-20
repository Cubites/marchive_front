import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

interface baltaneState {
    unlock: boolean,
    favor: number,
    script: number
}

const initialState: baltaneState[] = [
    { unlock: false, favor: 0, script: 1 }, // kanna
    { unlock: false, favor: 0, script: 1 }, // logan
    { unlock: false, favor: 0, script: 1 }, // dai
    { unlock: false, favor: 0, script: 1 }, // elsie
    { unlock: false, favor: 0, script: 1 }, // erlys
    { unlock: false, favor: 0, script: 1 }, // kaour
]

const baltaneSlice = createSlice({
    name: 'baltaneSlice',
    initialState: initialState,
    reducers: {
        unlock: (state, action) => {
            state[action.payload.member].unlock = action.payload.unlock;
        }
    }
});

export const baltaneActions = baltaneSlice.actions;
export const selectBaltane = (state: RootState) => state.baltane;
export default baltaneSlice.reducer;