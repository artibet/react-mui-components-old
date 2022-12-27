import React from 'react'
import { Box, Drawer, Hidden, useMediaQuery, useTheme } from '@mui/material'
import { SidebarDesign } from './SidebarDesign'
import { SidebarLayoutContext } from './SidebarLayout'

export const Sidebar = () => {

  // ---------------------------------------------------------------
  // SidebarLayoutContext data
  // ---------------------------------------------------------------
  const {
    sidebarWidth,
    sidebarPosition,
    openSidebar,
    toggleSidebar,
    breakpoint
  } = React.useContext(SidebarLayoutContext)

  // ---------------------------------------------------------------
  // STYLES
  // ---------------------------------------------------------------
  const theme = useTheme()
  const styles = {
    root: {
      display: 'flex',
      width: useMediaQuery(theme.breakpoints.up({ breakpoint })) ? `${sidebarWidth}px` : 0
    },
    drawerPaper: {
      width: `${sidebarWidth}px`,
      color: 'white',
      backgroundColor: '#00695c'
    }

  }

  // ---------------------------------------------------------------
  //  JSX
  // ---------------------------------------------------------------
  return (
    <Box sx={styles.root}>

      {/* Permanent drawer */}
      <Hidden smDown>
        <Drawer
          variant='permanent'
          open
          anchor={sidebarPosition}
          PaperProps={{ sx: styles.drawerPaper }}
        >
          <SidebarDesign />
        </Drawer>
      </Hidden>

      {/* temporary drawer  */}
      <Drawer
        variant='temporary'
        open={openSidebar}
        anchor={sidebarPosition}
        PaperProps={{ sx: styles.drawerPaper }}
        onClick={toggleSidebar}
      >
        <SidebarDesign />
      </Drawer>
    </Box >
  )
}
