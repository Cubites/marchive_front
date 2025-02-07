import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

interface skillState {
    talent1: string,
    talent2: string,
    status1: string,
    status2: string,
    sort: string
}

const initialState: skillState = {
    talent1: "",
    talent2: "",
    status1: "",
    status2: "",
    sort: "name"
}

const skillSlice = createSlice({
    name: 'skillSlice',
    initialState: initialState,
    reducers: {
        updateTalent1: (state, action) => { 
            state.talent1 = action.payload;
            state.talent2 = "";
        },
        updateTalent2: (state, action) => { state.talent2 = action.payload },
        updateStatus1: (state, action) => {
            state.status1 = action.payload;
            state.status2 = "";
            if(action.payload === "") {
                state.sort = "name";
            }
            
        },
        updateStatus2: (state, action) => { state.status2 = action.payload },
        updateSort: (state, action) => { state.sort = action.payload }
    }
});

export const skillActions = skillSlice.actions;
export const selectSkill = (state: RootState) => state.skill;
export default skillSlice.reducer;