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
import ControlList from "./ControlList";

const invoiceContainer2 = {
  width: "40%",
  backgroundColor: "white",
  padding: "10px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  minHeight: "90vh",
};

export default function SettingsContainer({ setPageSize, pageSize }) {
  return (
    <div style={invoiceContainer2}>
      <PageProperty setPageSize={setPageSize} pageSize={pageSize} />
      <ControlList />
      {/* <TreeControlers setPageSize={setPageSize} pageSize={pageSize} /> */}
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
