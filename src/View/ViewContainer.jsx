import { colors, Typography } from '@mui/material';
import React from 'react'
import Page from './Page';

  const invoiceContainer1 = {
    width:"60%",
    backgroundColor: "gray",
    padding: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    height: "90vh",
  }; 
  

export default function ViewContainer({pageSize,elements, setElements}) {
  console.log(elements);
  
  return (
    <div style={invoiceContainer1}>
  <Page pageSize={pageSize} elements={elements} setElements={setElements}>
  <Typography variant="h1" gutterBottom>
        h1. Heading
      </Typography>
      <Typography variant="h2" gutterBottom>
        h2. Heading
      </Typography>
      <Typography variant="h3" gutterBottom>
        h3. Heading
      </Typography>
      <Typography variant="h4" gutterBottom>
        h4. Heading
      </Typography>
    </Page>

  </div>
  )
}

