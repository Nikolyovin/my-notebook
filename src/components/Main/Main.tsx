import React, { FC } from 'react'

const Main: FC = () => {
    return (
        <div className='flex justify-between items-center'>
            {/* <div>main</div> */}
            <div className='flex flex-col pt-52 items-center bg-slate-400 w-[100%] h-[100vh] '>
                <div className='menu-item'>Wish list</div>
                <div className='menu-item'>Roadmap</div>
                <div className='menu-item'>Buy in the store</div>
            </div>
        </div>
    )
}

export default Main
