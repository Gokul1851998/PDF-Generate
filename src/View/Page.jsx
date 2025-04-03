import React from "react";

const Page = ({ children, pageSize }) => {
    const a4SheetStyle = {
        width: pageSize?.width, // A4 width in pixels at 96 DPI
        height: pageSize?.height, // A4 height in pixels at 96 DPI
        backgroundColor: "white",
        padding: "20px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", // Adds paper-like effect
        margin: "20px auto", // Centers the sheet
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      };
  return <div style={a4SheetStyle}>{children}</div>;
};

// Styles for A4 sheet


export default Page;
