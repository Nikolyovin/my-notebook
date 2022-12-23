import React, { FC } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { IconButton } from '@mui/material'
import { useAppSelector } from '../../hooks/redux'
import { useActions } from '../../hooks/action'
import { TABS } from '../../common'
import MenuDesktop from './MenuDesktop'
import Button from '@mui/material/Button'
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash'

const Header: FC = () => {
    const { isMenu, activeTab } = useAppSelector(state => state.notebook)
    const { isOpenMenu, isToOpenModal, removeThisArray } = useActions()

    const title: string = TABS.find(el => el.id === activeTab)?.title ?? 'Wish list'

    const onClick: () => void = () => isOpenMenu(!isMenu)
    const onClickRemove: () => void = () => isToOpenModal(true) && removeThisArray(activeTab)

    return (
        <div className='flex justify-center bg-slate-500 px-3 '>
            <div className='flex justify-between items-center h-[80px] w-full md:w-[65%]'>
                <div>
                    <IconButton className='md:hidden' onClick={onClickRemove}>
                        <RestoreFromTrashIcon fontSize='large' sx={{ color: 'white' }} />
                    </IconButton>
                </div>
                <h1 className='text-2xl heading  text-white'>{title}</h1>

                <div className='hidden md:block'>
                    <MenuDesktop />
                </div>
                <div className='md:hidden'>
                    <IconButton className='md:hidden' onClick={onClick}>
                        {!isMenu ? (
                            <MenuIcon fontSize='large' sx={{ color: 'white' }} />
                        ) : (
                            <CloseIcon fontSize='large' sx={{ color: 'white' }} />
                        )}
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Header
