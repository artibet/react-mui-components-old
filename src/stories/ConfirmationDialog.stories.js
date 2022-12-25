import React from "react"
import { storiesOf } from "@storybook/react"

import { ConfirmationDialog } from "../components"

const stories = storiesOf('RMC Test', module)

stories.add('ConfirmationDialog', () => {
  return (
    <ConfirmationDialog
      open={true}
      title='Διαγραφή'
      message='Να γίνει η διαγραφή;'
      onCancel={() => console.log('cancle')}
      onConfirm={() => console.log('confirm')}
      confirmText='OK'
      cancelText="Cancel"
    />
  )
})