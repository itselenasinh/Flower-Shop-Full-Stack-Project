import { Box, Button, Dialog, DialogContent, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import popupBackground from '../../assets/popup/popupBackground.png'
import { height } from '@mui/system'
import { HighlightOffOutlined } from '@mui/icons-material'

function PromoPopup() {

    const [open, setOpen] = useState(false)

    useEffect(() => {
        setOpen(true)
    }, [])

    const handleClose = () => {
        setOpen(false)
    }

  return (
    <Dialog open={open} onClose={handleClose}>
        <DialogContent sx={{backgroundImage:`url(${popupBackground})`, backgroundSize:'cover', height: '300px', border: 'solid white'}}>
            <Box sx={{ fontSize: 'large', color: 'white' }}>
             <Button  onClick={handleClose} sx={{position: 'absolute', top: 6, right: 0, color: 'white' }}>
                <HighlightOffOutlined />
            </Button>   
            </Box>
            <br></br>
            <br></br>
            <br></br>
            <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center', color: '#31231E'}}>
            <Typography variant='h4'>BECOME A YOUR FLOWER'S MEMBER!</Typography>
            <br></br>
            <Typography variant='h5'>Get a 20% discount on your first purchase</Typography>
            <Typography variant='h5'>& more member's benefits!</Typography>
            </Box>
        </DialogContent>
    </Dialog>
  )
}

export default PromoPopup