import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'


export const MessageDialog = ({
  open,
  title,
  message,
  onClose,
  closeText = 'ΟΚ'
}) => {

  // ---------------------------------------------------------------
  // JSX
  // ---------------------------------------------------------------
  return (
    <Dialog
      open={open}
      onClose={() => { }}    // Prevent closing on backdrop click and esc
    // TransitionComponent={Transition}
    >
      <DialogTitle>
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="success" onClick={onClose}>{closeText}</Button>
      </DialogActions>
    </Dialog>
  )
}


