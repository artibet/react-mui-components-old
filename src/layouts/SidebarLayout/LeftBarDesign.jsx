import React from 'react'
import { Avatar, Box, ListItem, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material'
import { MdHome, MdInfo, MdViewList } from 'react-icons/md'

const menuItems = [
  {
    label: 'Home',
    path: '/home',
    icon: <MdHome />
  },
  {
    label: 'About',
    path: '/about',
    icon: <MdInfo />
  },
  {
    label: 'Products',
    path: '/products',
    icon: <MdViewList />
  }
]

export const LeftBarDesign = () => {

  const theme = useTheme()

  // STYLES
  const styles = {
    logo: {
      width: theme.spacing(14),
      height: theme.spacing(8)
    },
    logoBox: {
      display: 'flex',
      justifyContent: 'center',
      borderBottom: '1px solid #004d40',
      padding: theme.spacing(4),
    },
    activeMenuItem: {
      backgroundColor: '#004d40',
      borderBottom: '1px solid #004d40'
    },
    inactiveMenuItem: {
      borderBottom: '1px solid #004d40'
    },
    menuItemIcon: {
      color: '#ffb300'
    }
  }

  // JSX
  return (
    <Box>

      {/* Logo */}
      <Box sx={styles.logoBox}>
        <Avatar
          sx={styles.logo}
          // src={}
          alt='Logo'
          variant='square'
        />
      </Box>

      {/* Menu items */}
      {
        menuItems.map((item, index) => (
          <ListItemButton
            sx={'/about' == item.path ? styles.activeMenuItem : styles.inactiveMenuItem} // Use inertia.page hook to check current url
            key={index}
            onClick={() => console.log(item.path)}
          >
            <ListItemIcon sx={styles.menuItemIcon}>{item.icon}</ListItemIcon>
            <ListItemText>{item.label}</ListItemText>
          </ListItemButton>
        ))
      }

    </Box>
  )
}
