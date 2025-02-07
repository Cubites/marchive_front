import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

interface enchant {
    searchType: string,
    searchWord: string,
    location: string,
    status: string,
    statusDetail: string,
    part: string,
    partDetail: string
}

const initialState: enchant = {
    searchType: "name",
    searchWord: "",
    location: "",
    status: "",
    statusDetail: "",
    part: "",
    partDetail: ""
}

const enchantSlice = createSlice({
    name: 'enchantSlice',
    initialState: initialState,
    reducers: {
        updateSearchType: (state, action) => { state.searchType = action.payload },
        updateSearchWord: (state, action) => { state.searchWord = action.payload },
        updateLocation: (state, action) => { state.location = action.payload },
        updateStatus: (state, action) => {
            state.status = action.payload;
            state.statusDetail = "";
        },
        updateStatusDetail: (state, action) => { state.statusDetail = action.payload },
        updatePart: (state, action) => {
            state.part = action.payload;
            state.partDetail = "";
        },
        updatePartDetail: (state, action) => { state.partDetail = action.payload },
        reset: (state) => {
            state.searchType = "name";
            state.searchWord = "";
            state.location = "";
            state.status = "";
            state.statusDetail = "";
            state.part = "";
            state.partDetail = "";
        }
    }
});

export const enchantActions = enchantSlice.actions;
export const selectEnchant = (state: RootState) => state.enchant;
export default enchantSlice.reducer;