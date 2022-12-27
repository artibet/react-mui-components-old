import React from 'react'
import { AppBar, Avatar, Box, IconButton, Toolbar, useMediaQuery, useTheme } from '@mui/material'
import { MdMenu } from 'react-icons/md'

export const Topbar = ({ height, toggleLeftBar }) => {
  console.log(height)
  const theme = useTheme()

  // STYLES
  const styles = {
    toolbar: {
      marginLeft: useMediaQuery(theme.breakpoints.up('sm')) ? '200px' : '0px',
      backgroundColor: '#00695c'
    },
    logo: {
      width: `${height * 1.4}px`,
      height: `${height - 10}px`,
      display: useMediaQuery(theme.breakpoints.up('sm')) ? 'none' : 'block'
    },
    menuIcon: {
      color: 'white',
      marginLeft: '-15px',
      display: useMediaQuery(theme.breakpoints.up('sm')) ? 'none' : 'block'
    }

  }

  // JSX
  return (
    <Box>
      <AppBar
        position='fixed'
        elevation={1}
      >
        <Toolbar sx={styles.toolbar}>

          {/* Side bar toggle icon */}
          <IconButton sx={styles.menuIcon} onClick={toggleLeftBar}>
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
