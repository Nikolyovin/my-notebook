import { ITabs } from "../types/types";

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