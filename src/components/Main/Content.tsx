import React, { FC } from 'react'
import CardList from './CardList'
import InputPanel from './InputPanel'
import ModalRemove from './ModalRemove'

const Content: FC = () => {
    return (
        <div className='flex flex-col justify-center items-center w-full md:w-[50%]'>
            <InputPanel />
            <CardList />
            <ModalRemove />
        </div>
    )
}

export default Content
