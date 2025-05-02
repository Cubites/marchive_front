import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

interface bag {
    name: string,
    bagWidth: number,
    bagHeight: number,
    innerWidth: number,
    innerHeight: number,
    effect: string,
    effectNum: number,
    category: string
}

const initialState: bag = {
    name: "",
    bagWidth: 0,
    bagHeight: 0,
    innerWidth: 0,
    innerHeight: 0,
    effect: "",
    effectNum: 0,
    category: ""
}

const bagSlice = createSlice({
    name: 'bagSlice',
    initialState: initialState,
    reducers: {
        updateName: (state, action) => { state.name = action.payload },
        updateBagWidth: (state, action) => {
            state.bagWidth = action.payload > 4 ? 4 : action.payload;
        },
        updateBagHeight: (state, action) => { 
            state.bagHeight = action.payload > 4 ? 4 : action.payload;
        },
        updateInnerWidth: (state, action) => { state.innerWidth = action.payload },
        updateInnerHeight: (state, action) => { state.innerHeight = action.payload },
        updateEffect: (state, action) => { state.effect = action.payload },
        updateEffectNum: (state, action) => { state.effectNum = action.payload },
        updateCategory: (state, action) => { state.category = action.payload },
        reset: (state) => {
            state.name = "";
            state.bagWidth = 0;
            state.bagHeight = 0;
            state.innerWidth = 0;
            state.innerHeight = 0;
            state.effect = "";
            state.effectNum = 0;
            state.category = "";
        }
    }
})

export const bagActions = bagSlice.actions;
export const selectBag = (state: RootState) => state.bag;
export default bagSlice.reducer;