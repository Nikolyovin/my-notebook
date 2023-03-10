import React, { FC } from 'react'
import { useAppSelector } from '../../hooks/redux'
import Content from './Content'
import Menu from './Menu'

const Main: FC = () => {
    const { isMenu } = useAppSelector(state => state.notebook)

    return (
        <div className='flex justify-center items-center w-full'>
            {!isMenu && <Content />}
            {isMenu && <Menu />}
        </div>
    )
}

export default Main
