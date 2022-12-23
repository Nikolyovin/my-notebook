import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import React, { FC, useState } from 'react'
import { TABS } from '../../common'
import { useActions } from '../../hooks/action'
import { useAppSelector } from '../../hooks/redux'

const MenuDesktop: FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const { activeTab } = useAppSelector(state => state.notebook)
    const { updateActiveTab } = useActions()
    const [active, setActive] = useState<string>(activeTab)
    const open = Boolean(anchorEl)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose: () => void = () => setAnchorEl(null)

    const onClick: (id: string) => void = id => {
        updateActiveTab(id)
        setActive(id)
        handleClose()
    }

    return (
        <div>
            <Button
                id='basic-button'
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                variant='text'
                sx={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}
            >
                <span className=''>Menu</span>
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button'
                }}
            >
                {TABS.map(({ id, title }) => (
                    <MenuItem key={id} onClick={() => onClick(id)} selected={active === id}>
                        {title}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    )
}

export default MenuDesktop
