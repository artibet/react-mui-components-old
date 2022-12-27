import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import { LeftBar } from './LeftBar'
import { Topbar } from './Topbar'

export const SidebarLayout = ({ children }) => {

  // Local state
  const [toolbarHeight, setToolbarHeight] = React.useState()  // current toolbar's height
  const [openLeftBar, setOpenLeftBar] = React.useState(false)

  // Track toolbar height on window resize
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

  // toggle left bar visibility on small devices
  const toggleLeftBar = () => setOpenLeftBar(!openLeftBar)

  // JSX
  return (
    <Box sx={{ display: 'flex' }}>

      {/* Left bar */}
      <LeftBar openLeftBar={openLeftBar} toggleLeftBar={toggleLeftBar} />

      {/* Top bar */}
      <Topbar height={toolbarHeight} toggleLeftBar={toggleLeftBar} />

      {/* page Content */}
      <Box sx={{ marginTop: `${toolbarHeight}px` }}>
        {children}
      </Box>
    </Box>
  )
}

