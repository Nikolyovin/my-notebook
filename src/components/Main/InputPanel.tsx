import React, { FC, ChangeEvent, useState } from 'react'
import { Fab, TextField } from '@mui/material'
import { useActions } from '../../hooks/action'
import AddIcon from '@mui/icons-material/Add'

const InputPanel: FC = () => {
    const { addInWithList } = useActions()
    const [value, setValue] = useState<string>('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)

    const submitForm: () => void = () => {
        addInWithList(value)
        setValue('')
    }

    return (
        <form className='flex flex-row justify-between w-[100%]  p-5'>
            <TextField
                className='flex-1'
                id='outlined-basic'
                label='New entry in notepad'
                variant='outlined'
                onChange={onChange}
                value={value}
            />

            <Fab sx={{ ml: '15px' }} color='primary' aria-label='add' onClick={submitForm} disabled={!value}>
                <AddIcon />
            </Fab>
        </form>
    )
}

export default InputPanel
