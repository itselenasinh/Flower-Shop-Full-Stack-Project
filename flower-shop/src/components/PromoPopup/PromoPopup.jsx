import { Box, Button, Dialog, DialogContent } from '@mui/material'
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
        <DialogContent sx={{backgroundImage:`url(${popupBackground})`, backgroundSize:'500px', height: '300px', border: 'solid #D5E7B8'}}>
            <Box sx={{ fontSize: 'large', color: 'white' }}>
             <Button  onClick={handleClose} sx={{position: 'absolute', top: 6, right: 0, color: 'white' }}>
                <HighlightOffOutlined />
            </Button>   
            </Box>
            <br></br>
            <br></br>
            <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center', color: 'white'}}>
            <h2>BECOME A YOUR FLOWER'S MEMBER!</h2>
            <p>Get a 20% discount on your first purchase</p>
            <p>& more member's benefits!</p>
            </Box>
        </DialogContent>
    </Dialog>
  )
}

export default PromoPopup