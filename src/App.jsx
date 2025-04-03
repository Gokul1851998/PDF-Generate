import React, { useState } from "react";
import SettingsContainer from "./Settings/SettingsContainer";
import ViewContainer from "./View/ViewContainer";

const InvoiceView = () => {
  const [selectedController, setSelectedController] = useState(0)
  const [pageSize, setPageSize] = useState({pageSize:"A4",Id:14, width:283, height:400})
  return (
    <div style={outerContainer}>
      <div style={invoiceWrapper}>
        <ViewContainer setPageSize={setPageSize} pageSize={pageSize} />
        <SettingsContainer setSelectedController={setSelectedController} />
      </div>
    </div>
  );
};

// Styles
const outerContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "97vh",
  backgroundColor: "gray",
  padding: "10px",
};

const invoiceWrapper = {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  gap: "20px",

};

export default InvoiceView;
