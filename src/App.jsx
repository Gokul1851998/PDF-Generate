import React, { useState } from "react";
import SettingsContainer from "./Settings/SettingsContainer";
import ViewContainer from "./View/ViewContainer";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const InvoiceView = () => {
  const [elements, setElements] = useState([]);
  const [pageSize, setPageSize] = useState({
    pageSize: "A4",
    Id: 14,
    width: 340,
    height: 480,
  });
  return (
    <div style={outerContainer}>
      <div style={invoiceWrapper}>
        <DndProvider backend={HTML5Backend}>
          <ViewContainer
            setPageSize={setPageSize}
            pageSize={pageSize}
            elements={elements}
            setElements={setElements}
          />
          <SettingsContainer setPageSize={setPageSize} pageSize={pageSize} />
        </DndProvider>
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
