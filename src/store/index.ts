import { configureStore } from "@reduxjs/toolkit";
import skillReducer from './skill';
import baltaneReducer from './baltane';
import enchantReducer from './enchant';
import dyeReducer from './dye';

const store = configureStore({
    reducer: {
        skill: skillReducer,
        baltane: baltaneReducer,
        enchant: enchantReducer,
        dye: dyeReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;