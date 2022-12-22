import { Button, Modal } from '@mui/material'
import { Box } from '@mui/system'
import React, { FC } from 'react'
import { useActions } from '../../hooks/action'
import { useAppSelector } from '../../hooks/redux'
import CardList from './CardList'
import InputPanel from './InputPanel'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'white',
    // border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3
}

const Content: FC = () => {
    const { isModalRemove, removeObject } = useAppSelector(state => state.notebook)
    const { isToOpenModal, removeThisObject, removeEntry } = useActions()

    const clear: () => void = () => {
        isToOpenModal(false)
        removeThisObject(null)
    }

    const onCancel: () => void = () => clear()

    const onRemove: (id: string) => void = id => {
        removeEntry(id)
        clear()
    }

    return (
        <div className='flex flex-col justify-center items-center w-full md:w-[65%]'>
            <InputPanel />
            <CardList />
            <Modal
                open={isModalRemove}
                // onClose={handleClose}
                aria-labelledby='parent-modal-title'
                aria-describedby='parent-modal-description'
            >
                <Box sx={{ ...style }}>
                    <h2 id='parent-modal-title' className='flex justify-center  text-2xl'>
                        Attention!
                    </h2>
                    <p id='parent-modal-description' className='flex justify-center text-ms'>
                        Do you really want to delete the entry: {removeObject?.entry}?
                    </p>

                    {removeObject && (
                        <div className='flex justify-center pt-5 items-center'>
                            <Button
                                onClick={onCancel}
                                size='small'
                                variant='outlined'
                                color='primary'
                                sx={{ mr: '10px' }}
                            >
                                Cancel
                            </Button>
                            <Button
                                onClick={() => onRemove(removeObject.id)}
                                size='small'
                                variant='contained'
                                color='primary'
                            >
                                Yes
                            </Button>
                        </div>
                    )}
                </Box>
            </Modal>
        </div>
    )
}

export default Content
