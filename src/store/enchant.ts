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
        updateSearchType: (state, action) => { state.searchType = action.payload.searchType },
        updateSearchWord: (state, action) => { state.searchWord = action.payload.searchWord },
        updateLocation: (state, action) => { state.location = action.payload.location },
        updateStatus: (state, action) => { state.status = action.payload.status },
        updateStatusDetail: (state, action) => { state.statusDetail = action.payload.statusDetail },
        updatePart: (state, action) => { state.part = action.payload.part },
        updatePartDetail: (state, action) => { state.partDetail = action.payload.partDetail }
    }
});

export const enchantActions = enchantSlice.actions;
export const selectBaltane = (state: RootState) => state.baltane;
export default enchantSlice.reducer;