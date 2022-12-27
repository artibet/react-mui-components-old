import React from 'react'
import { AppBar, Avatar, Box, IconButton, Toolbar, useMediaQuery, useTheme } from '@mui/material'
import { MdMenu } from 'react-icons/md'
import { SidebarLayoutContext } from './SidebarLayout'

export const Topbar = () => {

  const theme = useTheme()

  // ---------------------------------------------------------------
  // SidebarLayoutContext data
  // ---------------------------------------------------------------
  const {
    sidebarWidth,
    topbarHeight,
    toggleSidebar,
    breakpoint
  } = React.useContext(SidebarLayoutContext)

  // ---------------------------------------------------------------
  // STYLES
  // ---------------------------------------------------------------
  const styles = {
    toolbar: {
      marginLeft: useMediaQuery(theme.breakpoints.up({ breakpoint })) ? `${sidebarWidth}px` : '0px',
      backgroundColor: '#00695c'
    },
    logo: {
      width: `${topbarHeight * 1.4}px`,
      height: `${topbarHeight - 10}px`,
      display: useMediaQuery(theme.breakpoints.up({ breakpoint })) ? 'none' : 'block'
    },
    menuIcon: {
      color: 'white',
      marginLeft: '-15px',
      display: useMediaQuery(theme.breakpoints.up(breakpoint)) ? 'none' : 'block'
    }

  }

  // ---------------------------------------------------------------
  // JSX
  // ---------------------------------------------------------------
  return (
    <Box>
      <AppBar
        position='fixed'
        elevation={1}
      >
        <Toolbar sx={styles.toolbar}>

          {/* Side bar toggle icon */}
          <IconButton sx={styles.menuIcon} onClick={toggleSidebar}>
            <MdMenu />
          </IconButton>

          {/* Logo */}
          <Box>
            <Avatar
              sx={styles.logo}
              variant='square'
              alt='Logo'
            // src={ }
            >
            </Avatar>
          </Box>

        </Toolbar>
      </AppBar>
    </Box >
  )
}
