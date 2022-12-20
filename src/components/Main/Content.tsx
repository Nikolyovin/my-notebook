import React, { FC } from 'react'
import CardList from './CardList'
import InputPanel from './InputPanel'

const Content: FC = () => {
    return (
        <div className='flex flex-col items-center w-[100%]'>
            <InputPanel />
            <CardList />
        </div>
    )
}

export default Content
