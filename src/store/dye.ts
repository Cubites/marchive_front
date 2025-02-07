import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

interface Dye {
    searchWord: string,
    firstSource: string,
    secondSource: string,
    color: {
        rgb: { selected: boolean, r: number, g: number, b: number },
        hex: { selected: boolean, c: string }
    },
    type: string
}

const initialState: Dye = {
    searchWord: "",
    firstSource: "",
    secondSource: "",
    color: {
        rgb: { selected: false, r: 0, g: 0, b: 0 },
        hex: { selected: false, c: "" }
    },
    type: ""
}

const dyeSlice = createSlice({
    name: 'dyeSlice',
    initialState: initialState,
    reducers: {
        updateSearchWord: (state, action) => { state.searchWord = action.payload },
        updateFirstSource: (state, action) => {
            state.firstSource = action.payload;
            state.secondSource = "";
        },
        updateSecondSource: (state, action) => { state.secondSource = action.payload },
        updateRgbSelected: (state, action) => {
            state.color.hex.selected = false;
            state.color.rgb.selected = true;
        },
        updateRgbR: (state, action) => {
            state.color.hex.selected = false;
            state.color.rgb.selected = true;
            state.color.rgb.r = action.payload > 255 ? 255 : action.payload;
        },
        updateRgbG: (state, action) => {
            state.color.hex.selected = false;
            state.color.rgb.selected = true;
            state.color.rgb.g = action.payload > 255 ? 255 : action.payload;
        },
        updateRgbB: (state, action) => {
            state.color.hex.selected = false;
            state.color.rgb.selected = true;
            state.color.rgb.b = action.payload > 255 ? 255 : action.payload;
        },
        updateHexSelected: (state, action) => {
            state.color.rgb.selected = false;
            state.color.hex.selected = true;
        },
        updateHex: (state, action) => {
            state.color.rgb.selected = false; 
            state.color.hex.selected = true;
            state.color.hex.c = action.payload
        },
        updateType: (state, action) => { state.type = action.payload },
        reset: (state) => {
            state.searchWord = "";
            state.firstSource = "";
            state.secondSource = "";
            state.color.rgb.selected = false;
            state.color.rgb.r = 0;
            state.color.rgb.b = 0;
            state.color.rgb.g = 0;
            state.color.hex.selected = false;
            state.color.hex.c = "";
            state.type = "";
        }
    }
});

export const dyeActions = dyeSlice.actions;
export const selectDye = (state: RootState) => state.dye;
export default dyeSlice.reducer;