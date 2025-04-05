import { Box, Typography } from '@mui/material'
import React from 'react'

export default function ImageProperties() {
  return (
    <Box
    sx={{
      width: "100%",
      ml: 2,
      overflowX: "auto",
      display: "flex",
      flexDirection: "column",
      overflowY: "auto",
      scrollbarWidth: "thin",
      paddingBottom: "30px",
    }}
  >
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start", // Changed from center to flex-start
        paddingBottom: 1,
        gap: 1,
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          alignItems: "center",
          width: "100%",
          paddingTop: 1,
          paddingRight:3
        }}
      >
        <Typography variant="body1">Image Properties</Typography>
        <Box
          sx={{
            borderBottom: "1px dotted",
            // borderBottmColor: getBorderColor(),
            marginLeft: "8px", // Adjust spacing to your preference
          }}
        />
      </Box>
   
      </Box>
      </Box>
  )
}
