import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";

import TextFieldsIcon from "@mui/icons-material/TextFields";
import ImageIcon from "@mui/icons-material/Image";
import GridOnIcon from "@mui/icons-material/GridOn";
import RectangleIcon from "@mui/icons-material/Rectangle";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import TableViewIcon from "@mui/icons-material/TableView";

import { useDrag } from "react-dnd";

// Item type used for DnD
export const ItemTypes = {
  CONTROL: "control_item",
};

// Data list of control items
const data = [
  {
    id: 1,
    label: "Static Text",
    icon: TextFieldsIcon,
    fontSize: "48px",
    fontWeight: 700,
    fontFamily: "Roboto, sans-serif",
    color: "#333333",
    lineHeight: 1.2,
    letterSpacing: "0.5px",
    textTransform: "none",
    textAlign: "center",
    marginBottom: "20px",
  },
  { id: 2, label: "Image", icon: ImageIcon },
  { id: 3, label: "Body Grid", icon: GridOnIcon },
  { id: 4, label: "Rectangle", icon: RectangleIcon },
  { id: 5, label: "Line", icon: HorizontalRuleIcon },
  { id: 6, label: "Table", icon: TableViewIcon },
];

// Draggable list item component
function DraggableListItem({ item }) {
  const [{ isDragging }, dragRef] = useDrag(
    () => ({
      type: ItemTypes.CONTROL,
      item: () => {
        return { ...item };
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [item]
  );

  const Icon = item.icon;

  return (
    <ListItem
      ref={dragRef}
      sx={{
        opacity: isDragging ? 0.4 : 1,
        cursor: "move",
      }}
    >
      <ListItemAvatar>
        <Avatar>
          <Icon fontSize="inherit" />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={item.label} />
    </ListItem>
  );
}

// Main component
export default function ControlList() {
  return (
    <List
      dense
      sx={{
        cursor: "pointer",
        width: "100%",
        maxWidth: 280,
        bgcolor: "background.paper",
        "& .MuiListItem-root": {
          py: 0.3,
          minHeight: "32px",
          alignItems: "center",
        },
        "& .MuiListItemAvatar-root": {
          minWidth: "32px",
          marginRight: "4px",
        },
        "& .MuiAvatar-root": {
          width: 26,
          height: 26,
          fontSize: "1rem",
        },
        "& .MuiListItemText-primary": {
          fontSize: "0.75rem",
          lineHeight: 1.2,
        },
      }}
    >
      {data.map((item) => (
        <DraggableListItem key={item.id} item={item} />
      ))}
    </List>
  );
}
