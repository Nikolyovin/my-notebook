import React from 'react'
import { Button, Modal } from '@mui/material'
import { Box } from '@mui/system'
import { useAppSelector } from '../../hooks/redux'
import { useActions } from '../../hooks/action'

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

const ModalRemove = () => {
    const { isModalRemove, removeObject, removeArray } = useAppSelector(state => state.notebook)
    const { isToOpenModal, removeThisObject, removeEntry, removeThisArray, removeAllArray } = useActions()

    const clear: () => void = () => {
        isToOpenModal(false)
        removeThisObject(null)
        removeThisArray(null)
    }

    const onCancel: () => void = () => clear()
    const onRemove: (id: string) => void = id => removeEntry(id) && clear()
    const onRemoveAll: (id: string) => void = id => removeAllArray(id) && clear()

    return (
        <Modal open={isModalRemove} aria-labelledby='parent-modal-title' aria-describedby='parent-modal-description'>
            <Box sx={{ ...style }}>
                <h2 id='parent-modal-title' className='flex justify-center  text-2xl'>
                    Attention!
                </h2>
                <p id='parent-modal-description' className='flex justify-center font-medium text-ms break-normal'>
                    Do you really want to delete the entry: {removeObject ? removeObject?.entry : removeArray}?
                </p>
                <div className='flex justify-center pt-5 items-center'>
                    <Button onClick={onCancel} size='small' variant='outlined' color='primary' sx={{ mr: '10px' }}>
                        Cancel
                    </Button>
                    {removeObject && (
                        <Button
                            onClick={() => onRemove(removeObject.id)}
                            size='small'
                            variant='contained'
                            color='primary'
                        >
                            Yes
                        </Button>
                    )}
                    {removeArray && (
                        <Button
                            onClick={() => onRemoveAll(removeArray)}
                            size='small'
                            variant='contained'
                            color='primary'
                        >
                            Yes
                        </Button>
                    )}
                </div>
            </Box>
        </Modal>
    )
}

export default ModalRemove
