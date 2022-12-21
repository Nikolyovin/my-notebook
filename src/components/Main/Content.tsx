import { Button, Modal } from '@mui/material'
import { Box } from '@mui/system'
import React, { FC } from 'react'
import CardList from './CardList'
import InputPanel from './InputPanel'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 200,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3
}

const Content: FC = () => {
    return (
        <div className='flex flex-col items-center w-full'>
            <InputPanel />
            <CardList />
            <div>
                <Modal
                    open={true}
                    // onClose={handleClose}
                    aria-labelledby='parent-modal-title'
                    aria-describedby='parent-modal-description'
                >
                    <Box sx={{ ...style, width: 300 }}>
                        <h2 id='parent-modal-title'>Внимание!</h2>
                        <p id='parent-modal-description'>вы хотите удалить?</p>
                        <div>
                            <Button> Cancel</Button>
                            <Button>OK</Button>
                        </div>
                        {/* <ChildModal /> */}
                    </Box>
                </Modal>
            </div>
        </div>
    )
}

export default Content
