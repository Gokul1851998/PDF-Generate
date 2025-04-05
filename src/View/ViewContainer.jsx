import { colors } from '@mui/material';
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
  return (
    <div style={invoiceContainer1}>
  <Page pageSize={pageSize}>
      <h2>Invoice Title</h2>
      <p>Invoice details go here...</p>
    </Page>

  </div>
  )
}

