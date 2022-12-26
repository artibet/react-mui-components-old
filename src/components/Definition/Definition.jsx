import React from 'react'
import { Stack, Typography } from '@mui/material'

export const Definition = ({ label, data, spacing = 1, separator = ":" }) => {
  return (
    <Stack direction="row" spacing={spacing}>
      <Typography sx={{ fontWeight: 700 }}>{`${label}${separator}`}</Typography>
      <Typography>{data}</Typography>
    </Stack>
  )
}
