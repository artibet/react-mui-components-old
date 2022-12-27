import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import { Topbar } from './Topbar'
import { Sidebar } from './Sidebar'

// SidebarLayout Context
export const SidebarLayoutContext = React.createContext()

export const SidebarLayout = ({
  children,
  sidebarWidth = 200,
  sidebarLocation = 'left',
  breakpoint = 'sm'   // hide permanent sidebar on smaller screens
}) => {

  // ---------------------------------------------------------------
  // Local state
  // ---------------------------------------------------------------
  const [topbarHeight, setTopbarHeight] = React.useState()  // current toolbar's height
  const [openSidebar, setOpenSidebar] = React.useState(false) // On small screens

  // ---------------------------------------------------------------
  // Track topbar height on window resize
  // ---------------------------------------------------------------
  useEffect(() => {

    // Set topbar height on mount and on windows size change
    const handleResize = () => {
      const topbarElement = Array.from(document.getElementsByClassName('MuiToolbar-root'))[0]
      setTopbarHeight(topbarElement.clientHeight)
    }

    // Set once on mount
    handleResize()

    // set on resize
    window.addEventListener('resize', handleResize)
  }, [])

  // ---------------------------------------------------------------
  // toggle left bar visibility on small devices
  // ---------------------------------------------------------------
  const toggleSidebar = () => setOpenSidebar(!openSidebar)

  // ---------------------------------------------------------------
  // Context data to be exported
  // ---------------------------------------------------------------
  const context = {
    topbarHeight,
    sidebarWidth,
    sidebarLocation,
    openSidebar,
    toggleSidebar,
    breakpoint
  }


  // ---------------------------------------------------------------
  // JSX
  // ---------------------------------------------------------------
  return (
    <SidebarLayoutContext.Provider value={context} >
      <Box sx={{ display: 'flex' }}>

        {/* Left bar */}
        <Sidebar />

        {/* Top bar */}
        <Topbar />

        {/* page Content */}
        <Box sx={{ marginTop: `${topbarHeight}px` }}>
          {children}
        </Box>
      </Box>
    </SidebarLayoutContext.Provider >
  )
}

