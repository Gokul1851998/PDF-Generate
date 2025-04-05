import { Box, Typography } from '@mui/material'
import React from 'react'
import ManualAutoComplete from '../components/ManualAutoComplete'

const suggestionPage=[
    {"Id": 1, "Name": "9x11", "width": 392, "height": 480},
    {"Id": 2, "Name": "10x11", "width": 437, "height": 480},
    {"Id": 3, "Name": "10x14", "width": 343, "height": 480},
    {"Id": 4, "Name": "11x17", "width": 311, "height": 480},
    {"Id": 5, "Name": "12x11", "width": 480, "height": 439},
    {"Id": 6, "Name": "15x11", "width": 480, "height": 352},
    {"Id": 7, "Name": "6 3/4 Envelope", "width": 480, "height": 268},
    {"Id": 8, "Name": "A2", "width": 340, "height": 480},
    {"Id": 9, "Name": "A3 Assets", "width": 340, "height": 480},
    {"Id": 10, "Name": "A3 Extra", "width": 350, "height": 480},
    {"Id": 11, "Name": "A3 Extra Transverse", "width": 480, "height": 350},
    {"Id": 12, "Name": "A3 Rotated", "width": 480, "height": 340},
    {"Id": 13, "Name": "A3 Transverse", "width": 480, "height": 340},
    {"Id": 14, "Name": "A4", "width": 340, "height": 480},
    {"Id": 15, "Name": "A4 Extra", "width": 350, "height": 480},
    {"Id": 16, "Name": "A4 Plus", "width": 340, "height": 480},
    {"Id": 17, "Name": "A4 Rotated", "width": 480, "height": 340},
    {"Id": 18, "Name": "A4 Small", "width": 480, "height": 340},
    {"Id": 19, "Name": "A4 Transverse", "width": 480, "height": 340},
    {"Id": 20, "Name": "A5", "width": 338, "height": 480},
    {"Id": 21, "Name": "A5 Extra", "width": 336, "height": 480},
    {"Id": 22, "Name": "A5 Rotated", "width": 480, "height": 338},
    {"Id": 23, "Name": "A6", "width": 480, "height": 338},
    {"Id": 24, "Name": "A6 Rotated", "width": 480, "height": 338}
  ]
  

export default function PageProperty({setPageSize, pageSize}) {
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
        <Typography variant="body1">Page Properties</Typography>
        <Box
          sx={{
            borderBottom: "1px dotted",
            // borderBottmColor: getBorderColor(),
            marginLeft: "8px", // Adjust spacing to your preference
          }}
        />
      </Box>
      <ManualAutoComplete
              formData={pageSize}
              setFormData={setPageSize}
              autoId="pageSize"
              label="Page Size"
              formDataId="Id"
              required={false}
              suggestion={suggestionPage}
            />
      </Box>
      </Box>
  )
}
