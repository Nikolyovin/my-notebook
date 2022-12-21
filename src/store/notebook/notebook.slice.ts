import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ActiveTab } from '../../common'
import {  IEntry} from '../../types/types'

interface IInitialState {
    withList: IEntry[]
    roadMap: IEntry[]
    buyInTheStore: IEntry[]
    isMenu: boolean
    activeTab: string
}

const initialState: IInitialState = {
    withList: [],
    roadMap: [],
    buyInTheStore: [],
    isMenu: false,
    activeTab: ActiveTab.WithList
}

export const notebookSlice = createSlice({
    name: 'notebook',
    initialState,
    reducers: {
        addInWithList(state, action: PayloadAction<string>) {
            switch(state.activeTab) {
                case ActiveTab.WithList: state.withList?.push({ entry: action.payload, id: String(Date.now()), isHighlighted: false }) 
                    break
                case ActiveTab.RoadMap: state.roadMap?.push({ entry: action.payload, id: String(Date.now()), isHighlighted: false })
                    break
                case ActiveTab.BuyInTheStore: state.buyInTheStore?.push({ entry: action.payload, id: String(Date.now()), isHighlighted: false })
                    break
                default: state
            }
            
        },
        isOpenMenu(state, action: PayloadAction<boolean>) {
            state.isMenu = action.payload
        },
        updateActiveTab(state, action: PayloadAction<string>) {
            state.activeTab = action.payload
        },
        isHighlight(state, action: PayloadAction<string>) {
            switch(state.activeTab) {
                case ActiveTab.WithList:  state.withList = state.withList?.map(entry => entry.id === action.payload 
                    ? { ...entry, isHighlighted: !entry.isHighlighted} : entry)
                        break
                case ActiveTab.RoadMap:  state.roadMap = state.roadMap?.map(entry => entry.id === action.payload 
                    ? { ...entry, isHighlighted: !entry.isHighlighted} : entry)
                        break
                case ActiveTab.BuyInTheStore:  state.buyInTheStore = state.buyInTheStore?.map(entry => entry.id === action.payload 
                    ? { ...entry, isHighlighted: !entry.isHighlighted} : entry)
                        break
                default: state
            }
           
        },
        removeEntry(state, action: PayloadAction<string>) {
            switch(state.activeTab) {
                case ActiveTab.WithList: state.withList = state.withList?.filter(item => item.id !== action.payload) 
                    break
                case ActiveTab.RoadMap: state.roadMap = state.roadMap?.filter(item => item.id !== action.payload)
                    break
                case ActiveTab.BuyInTheStore: state.buyInTheStore = state.buyInTheStore?.filter(item => item.id !== action.payload)
                    break
                default: state
            }
        }
    }
})

export const notebookActions = notebookSlice.actions
export const notebookReducer = notebookSlice.reducer
