import React from 'react';
import { Typography } from '@mui/material';

export default function StaticText({ element }) {
  return (
    <Typography
      variant="h1"
      gutterBottom
      sx={{
        fontSize: element.fontSize,
        fontWeight: element.fontWeight,
        fontFamily: element.fontFamily,
        color: element.color,
        lineHeight: element.lineHeight,
        letterSpacing: element.letterSpacing,
        textTransform: element.textTransform,
        textAlign: element.textAlign,
        marginBottom: element.marginBottom,
        position: "absolute",
        left: element.position?.x,
        top: element.position?.y,
      }}
    >
      h1. Heading
    </Typography>
  );
}
