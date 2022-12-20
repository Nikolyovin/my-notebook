import { Checkbox, IconButton } from '@mui/material'
import React, { FC } from 'react'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import EditIcon from '@mui/icons-material/Edit'
import ClearIcon from '@mui/icons-material/Clear'

const Card: FC = () => {
    const onComplete: () => void = () => {}
    const onRemove: () => void = () => {}

    return (
        <div className='flex items-center bg-slate-300 rounded-md py-3 px-5 w-[100%] mb-3'>
            {/* <Checkbox defaultChecked size='medium' sx={{ '& .MuiSvgIcon-root': { fontSize: 35 } }} /> */}
            <span className='flex-1 text-2xl'>гамаши</span>
            <IconButton onClick={onComplete}>
                <EditIcon fontSize='large' />
            </IconButton>
            <IconButton onClick={onRemove}>
                <ClearIcon fontSize='large' />
            </IconButton>
        </div>
    )
}

export default Card
