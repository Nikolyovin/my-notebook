import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type initialStateType = {
    withList: string[] 
    isMenu: boolean
}

const initialState: initialStateType = {
    withList: [],
    isMenu: false
}

export const notebookSlice = createSlice({
    name: 'notebook',
    initialState,
    reducers: {
        addInWithList(state, action: PayloadAction<string>){
            console.log('action',action.payload);
            
            state.withList?.push(action.payload)
        },
        isOpenMenu(state, action: PayloadAction<boolean>){
            state.isMenu = action.payload
        }
    }
})

export const notebookActions = notebookSlice.actions
export const notebookReducer = notebookSlice.reducer