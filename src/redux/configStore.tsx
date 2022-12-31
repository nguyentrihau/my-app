import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductReducer/productReducer";

export const store = configureStore({
    reducer:{
        producReducer:productReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type DispatchType = typeof store.dispatch;