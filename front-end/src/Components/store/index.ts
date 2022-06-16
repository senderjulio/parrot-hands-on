import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import usersSlice from "./users";

const persistConfig = {
    key: "@users",
    storage,
};

const persistedReducer = persistReducer(persistConfig, usersSlice);

export const store = configureStore({
    reducer: {
        persistedReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;