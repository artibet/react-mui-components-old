import React from 'react'
import { Box, Drawer, Hidden, useMediaQuery, useTheme } from '@mui/material'

export const LeftBar = ({ isSmall }) => {

  // STYLES
  const theme = useTheme()
  const styles = {
    root: {
      display: 'flex',
      width: useMediaQuery(theme.breakpoints.up('sm')) ? 200 : 0
    },
    drawerPaper: {
      width: 200,
      color: 'white',
      backgroundColor: '#00695c'
    }

  }

  //  JSX
  return (
    <Box sx={styles.root}>

      {/* Permanent drawer */}
      <Hidden smDown>
        <Drawer
          variant='permanent'
          open
          anchor='left'
          PaperProps={{ sx: styles.drawerPaper }}
        >
          I am the permanent drawer...
        </Drawer>
      </Hidden>

      {/* temporary drawer  */}
      <Drawer
        variant='temporary'
        open={isSmall}
        anchor='left'
        PaperProps={{ sx: styles.drawerPaper }}
      >
        I am temporary drawer...
      </Drawer>
    </Box >
  )
}
