import React, { FC, useState } from 'react'
import { TABS } from '../../common'
import { useActions } from '../../hooks/action'
import { useAppSelector } from '../../hooks/redux'

const Menu: FC = () => {
    const { activeTab } = useAppSelector(state => state.notebook)
    const { updateActiveTab, isOpenMenu } = useActions()
    const [active, setActive] = useState<string>(activeTab)
    console.log('activeTab', activeTab)

    const onClick: (id: string) => void = id => {
        updateActiveTab(id)
        setActive(id)
        isOpenMenu(false)
    }

    return (
        <div className='flex flex-col pt-52 items-center bg-slate-400 w-[100%] h-[100vh] '>
            {TABS.map(({ id, title }) => (
                <div
                    key={id}
                    onClick={() => onClick(id)}
                    className={`menu-item ${active === id && 'border-b-4 text-white'}`}
                >
                    {title}
                </div>
            ))}
        </div>
    )
}

export default Menu
