import { Button } from "@mui/material"
import React from "react"
import { ConfirmationDialog as ConfirmationDialogImpl } from "../../dialogs"


export default {
  title: 'Dialogs/ConfirmationDialog',
  component: ConfirmationDialogImpl
}

export const ConfirmationDialog = () => {

  const [showDialog, setShowDialog] = React.useState(false)

  return (
    <>
      <Button variant='contained' onClick={() => setShowDialog(true)}>Show Confirmation Dialog</Button>
      <ConfirmationDialogImpl
        open={showDialog}
        title='Διαγραφή'
        message='Να γίνει η διαγραφή;'
        onCancel={() => setShowDialog(false)}
        onConfirm={() => setShowDialog(false)}
        confirmText='OK'
        cancelText="Cancel"
      />
    </>
  )
}

ConfirmationDialog.storyName = 'ConfirmationDialog'

