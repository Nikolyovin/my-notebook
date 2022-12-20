import React, { FC } from 'react'

const Menu: FC = () => {
    return (
        <div className='flex flex-col pt-52 items-center bg-slate-400 w-[100%] h-[100vh] '>
            <div className='menu-item'>Wish list</div>
            <div className='menu-item'>Road map</div>
            <div className='menu-item'>Buy in the store</div>
        </div>
    )
}

export default Menu
