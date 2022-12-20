import React, { FC } from 'react'
import Card from './Card'

const CardList: FC = () => {
    return (
        <div className='p-5 w-[100%]'>
            <Card />
            <Card />
        </div>
    )
}

export default CardList
