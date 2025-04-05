import { Typography } from '@mui/material';
import React from 'react';

export default function StaticText({}) {
  return (
    <Typography
      variant="h1"
      gutterBottom
      sx={{
        fontSize: "48px", 
        fontWeight: 700,  
        fontFamily: "Roboto, sans-serif", 
        color: "#333333",        
        lineHeight: 1.2,         
        letterSpacing: "0.5px",  
        textTransform: "none",    
        textAlign: "center",    
        marginBottom: "20px",    
      }}
    >
      h1. Heading
    </Typography>
  );
}
