import { createSlice, current, PayloadAction } from '@reduxjs/toolkit'
import { ActiveTab, addEntryInState, isHighlightInState, removeEntryInState, setLocalStorage } from '../../common'
import { IEntry } from '../../types/types'

const LS_withList_KEY: string = ActiveTab.WithList
const LS_roadMap_KEY: string = ActiveTab.RoadMap
const LS_buyInTheStore_KEY: string = ActiveTab.BuyInTheStore
const LS_activeTab_KEY: string = 'activeTab'

interface IInitialState {
    withList: IEntry[]
    roadMap: IEntry[]
    buyInTheStore: IEntry[]
    isMenu: boolean
    activeTab: string
    isModalRemove: boolean,
    removeObject: IEntry | null
}

const initialState: IInitialState = {
    withList: JSON.parse(localStorage.getItem(LS_withList_KEY) ?? '[]'),
    roadMap: JSON.parse(localStorage.getItem(LS_roadMap_KEY) ?? '[]'),
    buyInTheStore: JSON.parse(localStorage.getItem(LS_buyInTheStore_KEY) ?? '[]'),
    isMenu: false,
    activeTab: JSON.parse(localStorage.getItem(LS_activeTab_KEY)!) ??  ActiveTab.WithList,               // ! восклицательный знак, чтобы успокоить tsz
    isModalRemove: false,
    removeObject: null
}

export const notebookSlice = createSlice({
    name: 'notebook',
    initialState,
    reducers: {
        addInWithList(state, action: PayloadAction<string>) {
            switch (state.activeTab) {
                case ActiveTab.WithList:
                    addEntryInState(state.withList, action.payload)
                    setLocalStorage(LS_withList_KEY, state.withList)
                    break
                case ActiveTab.RoadMap:
                    addEntryInState(state.roadMap, action.payload)
                    setLocalStorage(LS_roadMap_KEY, state.roadMap)
                    break
                case ActiveTab.BuyInTheStore:
                    addEntryInState(state.buyInTheStore, action.payload)
                    setLocalStorage(LS_buyInTheStore_KEY, state.buyInTheStore)
                    break
            }
            
        },

        isOpenMenu(state, action: PayloadAction<boolean>) {
            state.isMenu = action.payload
        },

        updateActiveTab(state, action: PayloadAction<string>) {
            state.activeTab = action.payload
            localStorage.setItem(LS_activeTab_KEY, JSON.stringify(state.activeTab))
        },

        isHighlight(state, action: PayloadAction<string>) {
            switch (state.activeTab) {
                case ActiveTab.WithList:
                    state.withList = isHighlightInState(state.withList, action.payload)
                    setLocalStorage(LS_withList_KEY, state.withList)
                    break
                case ActiveTab.RoadMap:
                    state.roadMap = isHighlightInState(state.roadMap, action.payload)
                    setLocalStorage(LS_roadMap_KEY, state.roadMap)
                    break
                case ActiveTab.BuyInTheStore:
                    state.buyInTheStore = isHighlightInState(state.buyInTheStore, action.payload)
                    setLocalStorage(LS_buyInTheStore_KEY, state.buyInTheStore)
                    break
            }
        },
        
        removeEntry(state, action: PayloadAction<string>) {
            switch (state.activeTab) {
                case ActiveTab.WithList:
                    state.withList = removeEntryInState(state.withList, action.payload)
                    setLocalStorage(LS_withList_KEY, state.withList)
                    break
                case ActiveTab.RoadMap:
                    state.roadMap = removeEntryInState(state.roadMap, action.payload)
                    setLocalStorage(LS_roadMap_KEY, state.roadMap)
                    break
                case ActiveTab.BuyInTheStore:
                    state.buyInTheStore = removeEntryInState(state.buyInTheStore, action.payload)
                    setLocalStorage(LS_buyInTheStore_KEY, state.buyInTheStore)
                    break
            }
        },

        isToOpenModal(state, action: PayloadAction<boolean>) {
            state.isModalRemove = action.payload
        },

        removeThisObject(state, action: PayloadAction<IEntry | null>){
            state.removeObject = action.payload
        }
    }
})

export const notebookActions = notebookSlice.actions
export const notebookReducer = notebookSlice.reducer
