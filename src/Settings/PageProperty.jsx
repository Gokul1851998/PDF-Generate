import { Box, Typography } from "@mui/material";
import React from "react";
import ManualAutoComplete from "../components/ManualAutoComplete";
import TextBox from "../components/TextBox";

const suggestionPage = [
  { Id: 1, Name: "9x11", width: 470, height: 576 },
  { Id: 2, Name: "10x11", width: 524, height: 576 },
  { Id: 3, Name: "10x14", width: 412, height: 576 },
  { Id: 4, Name: "11x17", width: 373, height: 576 },
  { Id: 5, Name: "12x11", width: 576, height: 527 },
  { Id: 6, Name: "15x11", width: 576, height: 422 },
  { Id: 7, Name: "6 3/4 Envelope", width: 576, height: 322 },
  { Id: 8, Name: "A2", width: 408, height: 576 },
  { Id: 9, Name: "A3 Assets", width: 408, height: 576 },
  { Id: 10, Name: "A3 Extra", width: 420, height: 576 },
  { Id: 11, Name: "A3 Extra Transverse", width: 576, height: 420 },
  { Id: 12, Name: "A3 Rotated", width: 576, height: 408 },
  { Id: 13, Name: "A3 Transverse", width: 576, height: 408 },
  { Id: 14, Name: "A4", width: 408, height: 576 },
  { Id: 15, Name: "A4 Extra", width: 420, height: 576 },
  { Id: 16, Name: "A4 Plus", width: 408, height: 576 },
  { Id: 17, Name: "A4 Rotated", width: 576, height: 408 },
  { Id: 18, Name: "A4 Small", width: 576, height: 408 },
  { Id: 19, Name: "A4 Transverse", width: 576, height: 408 },
  { Id: 20, Name: "A5", width: 406, height: 576 },
  { Id: 21, Name: "A5 Extra", width: 403, height: 576 },
  { Id: 22, Name: "A5 Rotated", width: 576, height: 406 },
  { Id: 23, Name: "A6", width: 576, height: 406 },
  { Id: 24, Name: "A6 Rotated", width: 576, height: 406 },
  { Id: 25, Name: "Custom", width: 300, height: 300 },
];

export default function PageProperty({ setPageSize, pageSize }) {
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
            paddingRight: 3,
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

        <TextBox
          label="Width"
          disabled={pageSize?.Id !== 25}
          value={pageSize}
          setValue={setPageSize}
          type="number"
          name="width"
          maxLength={3}
          // direction={true}
        />

        <TextBox
          label="Height"
          disabled={pageSize?.Id !== 25}
          value={pageSize}
          setValue={setPageSize}
          type="number"
          name="height"
          // direction={true}
          maxLength={3}
        />
      </Box>
    </Box>
  );
}
