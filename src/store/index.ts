import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { notebookReducer } from "./notebook/notebook.slice";

export const store = configureStore({
    reducer: {
        notebook: notebookReducer
    }
})

setupListeners(store.dispatch)

//создаем чтобы знать с какими данными работать в стейте
export type RootState = ReturnType<typeof store.getState>