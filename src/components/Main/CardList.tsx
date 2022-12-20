import React, { FC } from 'react'
import { useAppSelector } from '../../hooks/redux'
import Card from './Card'

const CardList: FC = () => {
    const { withList } = useAppSelector(state => state.notebook)

    return (
        <div className='p-5 w-[100%]'>
            {withList.map(({ id, entry }) => (
                <Card key={id} id={id} entry={entry} />
            ))}
        </div>
    )
}

export default CardList
