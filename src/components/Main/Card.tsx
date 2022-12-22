import { IconButton } from '@mui/material'
import React, { FC } from 'react'
import EditIcon from '@mui/icons-material/Edit'
import ClearIcon from '@mui/icons-material/Clear'
import { useActions } from '../../hooks/action'

interface IProps {
    entry: string
    id: string
    isHighlighted: boolean
}

const Card: FC<IProps> = ({ id, entry, isHighlighted }) => {
    const { isHighlight, isToOpenModal, removeThisObject } = useActions()

    const onHighlight: () => void = () => isHighlight(id)

    const onRemove: () => void = () => {
        isToOpenModal(true)
        removeThisObject({ id, entry, isHighlighted })
    }

    const lineThrough: string = isHighlighted ? 'line-through' : ''

    return (
        <div className='flex items-center bg-slate-300 rounded-md py-3 pr-3 pl-5 mb-3 '>
            <div className='flex-1 w-[65%]'>
                <p className={`text-lg break-words ${lineThrough}`}>{entry}</p>
            </div>
            <IconButton onClick={onHighlight}>
                <EditIcon fontSize='large' />
            </IconButton>
            <IconButton onClick={onRemove}>
                <ClearIcon fontSize='large' />
            </IconButton>
        </div>
    )
}

export default Card
