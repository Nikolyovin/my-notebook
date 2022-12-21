import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ActiveTab } from '../../common'
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
}

const initialState: IInitialState = {
    withList: JSON.parse(localStorage.getItem(LS_withList_KEY) ?? '[]'),
    roadMap: JSON.parse(localStorage.getItem(LS_roadMap_KEY) ?? '[]'),
    buyInTheStore: JSON.parse(localStorage.getItem(LS_buyInTheStore_KEY) ?? '[]'),
    isMenu: false,
    activeTab: JSON.parse(localStorage.getItem(LS_activeTab_KEY) ?? '[]')
}

export const notebookSlice = createSlice({
    name: 'notebook',
    initialState,
    reducers: {
        addInWithList(state, action: PayloadAction<string>) {
            switch (state.activeTab) {
                case ActiveTab.WithList:
                    state.withList?.push({ entry: action.payload, id: String(Date.now()), isHighlighted: false })
                    localStorage.setItem(LS_withList_KEY, JSON.stringify(state.withList))
                    break

                case ActiveTab.RoadMap:
                    state.roadMap?.push({ entry: action.payload, id: String(Date.now()), isHighlighted: false })
                    localStorage.setItem(LS_roadMap_KEY, JSON.stringify(state.roadMap))
                    break
                case ActiveTab.BuyInTheStore:
                    state.buyInTheStore?.push({ entry: action.payload, id: String(Date.now()), isHighlighted: false })
                    localStorage.setItem(LS_buyInTheStore_KEY, JSON.stringify(state.buyInTheStore))
                    break
                // default: state
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
                    state.withList = state.withList?.map(entry =>
                        entry.id === action.payload ? { ...entry, isHighlighted: !entry.isHighlighted } : entry
                    )
                    localStorage.setItem(LS_withList_KEY, JSON.stringify(state.withList))
                    break
                case ActiveTab.RoadMap:
                    state.roadMap = state.roadMap?.map(entry =>
                        entry.id === action.payload ? { ...entry, isHighlighted: !entry.isHighlighted } : entry
                    )
                    localStorage.setItem(LS_roadMap_KEY, JSON.stringify(state.roadMap))
                    break
                case ActiveTab.BuyInTheStore:
                    state.buyInTheStore = state.buyInTheStore?.map(entry =>
                        entry.id === action.payload ? { ...entry, isHighlighted: !entry.isHighlighted } : entry
                    )
                    localStorage.setItem(LS_buyInTheStore_KEY, JSON.stringify(state.buyInTheStore))
                    break
                // default: state
            }
        },
        removeEntry(state, action: PayloadAction<string>) {
            switch (state.activeTab) {
                case ActiveTab.WithList:
                    state.withList = state.withList?.filter(item => item.id !== action.payload)
                    localStorage.setItem(LS_withList_KEY, JSON.stringify(state.withList))
                    break
                case ActiveTab.RoadMap:
                    state.roadMap = state.roadMap?.filter(item => item.id !== action.payload)
                    localStorage.setItem(LS_roadMap_KEY, JSON.stringify(state.roadMap))
                    break
                case ActiveTab.BuyInTheStore:
                    state.buyInTheStore = state.buyInTheStore?.filter(item => item.id !== action.payload)
                    localStorage.setItem(LS_buyInTheStore_KEY, JSON.stringify(state.buyInTheStore))
                    break
                // default: state
            }
        }
    }
})

export const notebookActions = notebookSlice.actions
export const notebookReducer = notebookSlice.reducer
