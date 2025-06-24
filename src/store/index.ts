import { configureStore } from "@reduxjs/toolkit";
import headerReducer from './header';
import skillReducer from './skill';
import baltaneReducer from './baltane';
import enchantReducer from './enchant';
import dyeReducer from './dye';
import bagReducer from './bag';
import loginReducer from './login';

const store = configureStore({
    reducer: {
        header: headerReducer,
        skill: skillReducer,
        baltane: baltaneReducer,
        enchant: enchantReducer,
        dye: dyeReducer,
        bag: bagReducer,
        login: loginReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;