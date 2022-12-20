import { Checkbox, IconButton } from '@mui/material'
import React, { FC } from 'react'
import EditIcon from '@mui/icons-material/Edit'
import ClearIcon from '@mui/icons-material/Clear'
import { useActions } from '../../hooks/action'

interface IProps {
    entry: string
    id: string
}

const Card: FC<IProps> = ({ id, entry }) => {
    const { removeEntry } = useActions()

    const onHighlight: () => void = () => {}

    const onRemove: () => void = () => {
        removeEntry(id)
    }

    return (
        <div className='flex items-center bg-slate-300 rounded-md py-3 pr-3 pl-5 w-[100%] mb-3'>
            <span className='flex-1 text-2xl'>{entry}</span>
            <IconButton className='justify-end' onClick={onHighlight}>
                <EditIcon fontSize='large' />
            </IconButton>
            <IconButton onClick={onRemove}>
                <ClearIcon fontSize='large' />
            </IconButton>
        </div>
    )
}

export default Card
