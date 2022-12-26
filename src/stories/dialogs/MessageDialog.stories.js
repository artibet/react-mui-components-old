import { Button } from "@mui/material"
import React from "react"
import { MessageDialog as MsgDialog } from "../../dialogs"


export default {
  title: 'Dialogs/MessageDialog',
  component: MsgDialog
}

export const MessageDialog = () => {

  const [showDialog, setShowDialog] = React.useState(false)

  return (
    <>
      <Button variant='contained' onClick={() => setShowDialog(true)}>Show Message Dialog</Button>
      <MsgDialog
        open={showDialog}
        title='Επιτυχής διαγραφή'
        message='Ο πελάτης διαγράφηκε με επιτυχία'
        onClose={() => setShowDialog(false)}
        closeText='ΚΛΕΙΣΙΜΟ'
      />
    </>
  )
}

MessageDialog.storyName = 'MessageDialog'

