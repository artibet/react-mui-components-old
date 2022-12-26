import React from "react"
import { Definition as DefinitionImpl } from "../../components"

export default {
  title: 'Components/Definition',
  component: DefinitionImpl
}

export const Definition = () =>
  <DefinitionImpl
    label='label'
    data='data'
  />



