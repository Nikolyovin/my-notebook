import React, { FC } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { IconButton } from '@mui/material'

const Header: FC = () => {
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    }

    return (
        <div className='flex justify-between items-center h-[80px] bg-slate-500 px-3'>
            <div></div>
            <h1 className='text-2xl font-serif'>Wish list</h1>
            <IconButton className='justify-self-end' onClick={onClick}>
                <MenuIcon fontSize='large' />
            </IconButton>
        </div>
    )
}

export default Header
