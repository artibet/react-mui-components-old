import React from "react"
import { Box } from "@mui/material"
import { SidebarLayout as SidebarLayoutImpl } from "../../layouts"

export default {
  title: 'Layouts/SidebarLayout',
  component: SidebarLayoutImpl
}

export const SidebarLayout = () => {
  return (
    <SidebarLayoutImpl>
      Page Content
    </SidebarLayoutImpl>
  )
}




