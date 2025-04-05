import { colors } from "@mui/material";
import React from "react";
import TreeControlers from "./TreeControlers";
import PageProperty from "./PageProperty";
import StaticTextProperties from "./StaticTextproperties";
import ImageProperties from "./ImageProperties";
import BodyGridProperties from "./BodyGridProperties";
import RectangleProperties from "./RectangleProperties";
import LineProperties from "./LineProperties";
import TableProperties from "./TableProperties";

const data = [
  {
    whNo: "WH001",
    itemCode: "ITM001",
    description: "Product A",
    packing: "12 x 500ml",
    quantity: 120,
    ctn: 10,
    box: 2,
    rate: 50.0,
    discountAmount: 5.0,
  },
  {
    whNo: "WH002",
    itemCode: "ITM002",
    description: "Product B",
    packing: "24 x 1L",
    quantity: 240,
    ctn: 20,
    box: 5,
    rate: 100.0,
    discountAmount: 10.0,
  },
];

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#06134B",
  color: "white",
  padding: "10px",
  alignItems: "center",
};

const invoiceContainer2 = {
  width: "40%",
  backgroundColor: "white",
  padding: "10px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  minHeight: "90vh",
};

const logoStyle = {
  width: "50px",
};

const detailsContainer = {
  display: "flex",
  justifyContent: "space-between",
  padding: "10px",
  border: "1px solid #ddd",
  color: "gray",
};

const tableStyle = {
  width: "100%",
  marginTop: "20px",
  borderCollapse: "collapse",
};

const tableHeaderRow = {
  backgroundColor: "#e4e4e4",
};

const tableHeaderCell = {
  padding: "8px",
  border: "1px solid #ddd",
  textAlign: "center",
  fontWeight: "bold",
};

const tableRowStyle = {
  borderBottom: "1px solid #ddd",
};

const tableCell = {
  padding: "8px",
  border: "1px solid #ddd",
  textAlign: "center",
};

const footerStyle = {
  textAlign: "center",
  marginTop: "20px",
  padding: "10px",
  borderTop: "1px solid #ddd",
};

export default function SettingsContainer({
  setPageSize,
  pageSize,
}) {
  return (
    <div style={invoiceContainer2}>
      <PageProperty setPageSize={setPageSize} pageSize={pageSize} />
      <TreeControlers setPageSize={setPageSize} pageSize={pageSize} />
      {pageSize?.control === 1 ? (
        <StaticTextProperties />
      ) : pageSize?.control === 2 ? (
        <ImageProperties />
      ) : pageSize?.control === 3 ? (
        <BodyGridProperties />
      ) : pageSize?.control === 4 ? (
        <RectangleProperties />
      ) : pageSize?.control === 5 ? (
        <LineProperties />
      ) : pageSize?.control === 6 ? (
        <TableProperties />
      ) : null}
    </div>
  );
}

const CompanyDetails = () => (
  <div style={{ textAlign: "center", margin: "10px 0", color: "gray" }}>
    <h3>RASTI LARI GENERAL TRADING CO. L.L.C (Br.)</h3>
    <p>
      Tel: 2291150, WH.Tel: 3479590, Fax: 2257800, P.O. Box – 65440,
      Dubai-U.A.E.
    </p>
    <p>Email: rasti@rastilari.com | Web: www.rastilari.com</p>
  </div>
);

const CustomerOrderDetails = () => (
  <div style={detailsContainer}>
    <div>
      <p>
        <strong>A/C NO:</strong> 123456789
      </p>
      <p>
        <strong>Cust. Name:</strong> John Doe
      </p>
      <p>
        <strong>Cust. TRN:</strong> TRN-987654321
      </p>
      <p>
        <strong>Mob:</strong> +971 50 123 4567
      </p>
    </div>
    <div>
      <p>
        <strong>Order Doc No:</strong> 987654
      </p>
      <p>
        <strong>Date:</strong> 26/03/2025
      </p>
      <p>
        <strong>Salesman Name:</strong> Gokul
      </p>
      <p>
        <strong>Location:</strong> Kannur
      </p>
    </div>
  </div>
);

const InvoiceTable = () => (
  <table style={tableStyle}>
    <thead>
      <tr style={tableHeaderRow}>
        <th style={tableHeaderCell}>W/H No.</th>
        <th style={tableHeaderCell}>Item Code</th>
        <th style={tableHeaderCell}>Description</th>
        <th style={tableHeaderCell}>Packing</th>
        <th style={tableHeaderCell}>Quantity</th>
        <th style={tableHeaderCell}>CTN</th>
        <th style={tableHeaderCell}>Box</th>
        <th style={tableHeaderCell}>Rate</th>
        <th style={tableHeaderCell}>Discount Amount</th>
      </tr>
    </thead>
    <tbody>
      {data.map((row, index) => (
        <tr key={index} style={tableRowStyle}>
          <td style={tableCell}>{row.whNo}</td>
          <td style={tableCell}>{row.itemCode}</td>
          <td style={tableCell}>{row.description}</td>
          <td style={tableCell}>{row.packing}</td>
          <td style={tableCell}>{row.quantity}</td>
          <td style={tableCell}>{row.ctn}</td>
          <td style={tableCell}>{row.box}</td>
          <td style={tableCell}>{row.rate.toFixed(2)}</td>
          <td style={tableCell}>{row.discountAmount.toFixed(2)}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const Footer = () => (
  <div style={footerStyle}>
    <p>
      Thank you for your business! For any inquiries, contact us at
      rasti@rastilari.com
    </p>
    <p>This is a system-generated invoice. No signature required.</p>
  </div>
);
