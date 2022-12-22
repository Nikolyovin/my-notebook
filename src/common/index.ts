import { IEntry, ITabs } from "../types/types";

export enum ActiveTab {
    WithList = 'withList',
    RoadMap = 'roadMap',
    BuyInTheStore = 'buyInTheStore'
}

export const TABS: ITabs[] = [
    { id: ActiveTab.WithList, title: 'Wish list'},
    { id: ActiveTab.RoadMap, title: 'Road map'},
    { id: ActiveTab.BuyInTheStore, title: 'Buy in the store'},

]

export const setLocalStorage: (key: string, array: IEntry[]) => void = (key, array) => {
    localStorage.setItem(key, JSON.stringify(array))
}

export const removeEntryInState: (array: IEntry[], action: string) => IEntry[] = (array, action) => {
    return array?.filter(item => item.id !== action)
}

export const isHighlightInState: (array: IEntry[], action: string) => IEntry[] = (array, action) => {
    return array?.map(entry => entry.id === action ? { ...entry, isHighlighted: !entry.isHighlighted } : entry)
}

export const addEntryInState: (array: IEntry[], action: string) => void = (array, action) => {
    array.push({ entry: action, id: String(Date.now()), isHighlighted: false })
}