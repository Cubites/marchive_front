import { configureStore } from "@reduxjs/toolkit";
import baltaneReducer from './baltane';
import enchantReducer from './enchant';

const store = configureStore({
    reducer: {
        baltane: baltaneReducer,
        enchant: enchantReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;