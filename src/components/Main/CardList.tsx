import React, { FC } from 'react'
import { ActiveTab } from '../../common'
import { useAppSelector } from '../../hooks/redux'
import { IEntry } from '../../types/types'
import Card from './Card'

const CardList: FC = () => {
    const { withList, roadMap, buyInTheStore, activeTab } = useAppSelector(state => state.notebook)
    let array: IEntry[] = withList
    switch (activeTab) {
        case ActiveTab.WithList:
            array = withList
            break
        case ActiveTab.RoadMap:
            array = roadMap
            break
        case ActiveTab.BuyInTheStore:
            array = buyInTheStore
            break
    }

    return (
        <div className='p-5 w-full'>
            {array.map(({ id, entry, isHighlighted }) => (
                <Card key={id} id={id} entry={entry} isHighlighted={isHighlighted} />
            ))}
        </div>
    )
}

export default CardList
