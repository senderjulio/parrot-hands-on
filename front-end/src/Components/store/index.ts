import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import usersSlice from "./users";
import postsSlice from "./posts";

const persistConfig = {
    key: "@users",
    storage,
};

const persistedReducer = persistReducer(persistConfig, usersSlice);

export const store = configureStore({
    reducer: {
        persistedReducer,
        postsSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
      }),
})

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;