import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IWishlist } from '../../types/types'

type initialStateType = {
    withList: IWishlist[]
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
        addInWithList(state, action: PayloadAction<string>) {
            state.withList?.push({ entry: action.payload, id: String(Date.now()), isHighlighted: false })
        },
        isOpenMenu(state, action: PayloadAction<boolean>) {
            state.isMenu = action.payload
        },
        isHighlight(state, action: PayloadAction<string>) {},
        removeEntry(state, action: PayloadAction<string>) {
            state.withList = state.withList?.filter(item => item.id !== action.payload)
        }
    }
})

export const notebookActions = notebookSlice.actions
export const notebookReducer = notebookSlice.reducer
