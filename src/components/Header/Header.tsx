import React, { FC } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { IconButton } from '@mui/material'
import { useAppSelector } from '../../hooks/redux'
import { useActions } from '../../hooks/action'
import { TABS } from '../../common'
import MenuDesktop from './MenuDesktop'
import Button from '@mui/material/Button'

const Header: FC = () => {
    const { isMenu, activeTab } = useAppSelector(state => state.notebook)
    const { isOpenMenu } = useActions()

    const title: string = TABS.find(el => el.id === activeTab)?.title ?? 'Wish list'

    const onClick: () => void = () => isOpenMenu(!isMenu)

    return (
        <div className='flex justify-center bg-slate-500 px-3 '>
            <div className='flex justify-between items-center h-[80px] w-full md:w-[65%]'>
                <div className='pl-2 '>
                    <Button variant='text' sx={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>
                        <span className=''>remove</span>
                    </Button>
                </div>
                <h1 className='text-2xl font-serif'>{title}</h1>

                <div className='hidden md:block'>
                    <MenuDesktop />
                </div>
                <div className='md:hidden'>
                    <IconButton className='md:hidden' onClick={onClick}>
                        {!isMenu ? <MenuIcon fontSize='large' /> : <CloseIcon fontSize='large' />}
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Header
