import React, { useEffect } from 'react'
import { Box, useTheme } from '@mui/material'
import { LeftBar } from './LeftBar'
import { Topbar } from './Topbar'

export const SidebarLayout = ({ children }) => {

  // Hold current toolbar height
  const [toolbarHeight, setToolbarHeight] = React.useState()

  useEffect(() => {

    // Set toolbar height on mount and on windows size change
    const handleResize = () => {
      const toolbarElement = Array.from(document.getElementsByClassName('MuiToolbar-root'))[0]
      setToolbarHeight(toolbarElement.clientHeight)
    }

    // Set once on mount
    handleResize()

    // set on resize
    window.addEventListener('resize', handleResize)
  }, [])


  // small screen flag
  const [isSmall, setIsSmall] = React.useState(false)

  // toggle small state
  const toggleIsSmall = () => setIsSmall(!isSmall)

  // JSX
  return (
    <Box sx={{ display: 'flex' }}>

      {/* Left bar */}
      <LeftBar isSmall={isSmall} />

      {/* Top bar */}
      <Topbar />

      {/* page Content */}
      <Box sx={{ marginTop: `${toolbarHeight}px` }}>
        {children}
      </Box>
    </Box>
  )
}

