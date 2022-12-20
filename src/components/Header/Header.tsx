import React, { FC } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { IconButton } from '@mui/material'
import { useAppSelector } from '../../hooks/redux'
import { useActions } from '../../hooks/action'

const Header: FC = () => {
    const { isMenu } = useAppSelector(state => state.notebook)
    const { isOpenMenu } = useActions()

    const onClick: () => void = () => {
        isOpenMenu(!isMenu)
    }

    return (
        <div className='flex justify-between items-center h-[80px] bg-slate-500 px-3'>
            <div className='w-[51px]'></div>
            <h1 className='text-2xl font-serif'>Wish list</h1>

            <IconButton className='justify-self-end' onClick={onClick}>
                {!isMenu ? <MenuIcon fontSize='large' /> : <CloseIcon fontSize='large' />}
            </IconButton>
        </div>
    )
}

export default Header
