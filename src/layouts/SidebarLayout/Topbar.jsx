import { AppBar, Box, Toolbar } from '@mui/material'
import React from 'react'

export const Topbar = () => {
  return (
    <Box >
      <AppBar
        position='fixed'
        elevation={1}
      >
        <Toolbar>
          topbar
        </Toolbar>
      </AppBar>
    </Box >
  )
}
