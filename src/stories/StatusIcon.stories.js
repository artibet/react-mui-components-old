import React from "react"
import { storiesOf } from '@storybook/react'

import { StatusIcon } from "../components"

const stories = storiesOf('RMC Test', module)

stories.add('StatusIcon', () => {
  return (
    <StatusIcon on={true} />
  )
})

