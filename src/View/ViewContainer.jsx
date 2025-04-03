import { colors } from '@mui/material';
import React from 'react'
import Page from './Page';
import ManualAutoComplete from '../components/ManualAutoComplete';

const suggestionPage=[
    {"Id": 1, "Name": "9x11", "width": 327, "height": 400},
    {"Id": 2, "Name": "10x11", "width": 364, "height": 400},
    {"Id": 3, "Name": "10x14", "width": 286, "height": 400},
    {"Id": 4, "Name": "11x17", "width": 259, "height": 400},
    {"Id": 5, "Name": "12x11", "width": 400, "height": 366},
    {"Id": 6, "Name": "15x11", "width": 400, "height": 293},
    {"Id": 7, "Name": "6 3/4 Envelope", "width": 400, "height": 223},
    {"Id": 8, "Name": "A2", "width": 283, "height": 400},
    {"Id": 9, "Name": "A3 Assets", "width": 283, "height": 400},
    {"Id": 10, "Name": "A3 Extra", "width": 292, "height": 400},
    {"Id": 11, "Name": "A3 Extra Transverse", "width": 400, "height": 292},
    {"Id": 12, "Name": "A3 Rotated", "width": 400, "height": 283},
    {"Id": 13, "Name": "A3 Transverse", "width": 400, "height": 283},
    {"Id": 14, "Name": "A4", "width": 283, "height": 400},
    {"Id": 15, "Name": "A4 Extra", "width": 292, "height": 400},
    {"Id": 16, "Name": "A4 Plus", "width": 283, "height": 400},
    {"Id": 17, "Name": "A4 Rotated", "width": 400, "height": 283},
    {"Id": 18, "Name": "A4 Small", "width": 400, "height": 283},
    {"Id": 19, "Name": "A4 Transverse", "width": 400, "height": 283},
    {"Id": 20, "Name": "A5", "width": 282, "height": 400},
    {"Id": 21, "Name": "A5 Extra", "width": 280, "height": 400},
    {"Id": 22, "Name": "A5 Rotated", "width": 400, "height": 282},
    {"Id": 23, "Name": "A6", "width": 400, "height": 282},
    {"Id": 24, "Name": "A6 Rotated", "width": 400, "height": 282}
  ]
  
  
  

  const invoiceContainer1 = {
    width:"60%",
    backgroundColor: "white",
    padding: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    minHeight: "90vh",
  };
  

export default function ViewContainer({setPageSize,pageSize}) {
  return (
    <div style={invoiceContainer1}>
  <Page pageSize={pageSize}>
      <h2>Invoice Title</h2>
      <p>Invoice details go here...</p>
    </Page>
    <ManualAutoComplete
              formData={pageSize}
              setFormData={setPageSize}
              autoId="pageSize"
              label="Page Size"
              formDataId="Id"
              required={false}
              suggestion={suggestionPage}
            />
  </div>
  )
}

