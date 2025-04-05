// TreeControlers.js
import * as React from "react";
import clsx from "clsx";
import { styled, useTheme, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Label from "@mui/icons-material/Label";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import ImageIcon from "@mui/icons-material/Image";
import GridOnIcon from "@mui/icons-material/GridOn";
import RectangleIcon from "@mui/icons-material/Rectangle";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import TableViewIcon from "@mui/icons-material/TableView";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useDrag } from "react-dnd";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import {
  TreeItem2Content,
  TreeItem2IconContainer,
  TreeItem2Root,
  TreeItem2GroupTransition,
} from "@mui/x-tree-view/TreeItem2";
import { useTreeItem2 } from "@mui/x-tree-view/useTreeItem2";
import { TreeItem2Provider } from "@mui/x-tree-view/TreeItem2Provider";
import { TreeItem2Icon } from "@mui/x-tree-view/TreeItem2Icon";

// Drag item type
export const ItemTypes = {
  TREE_ITEM: "tree_item",
};

// Styled Components
const CustomTreeItemRoot = styled(TreeItem2Root)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

const CustomTreeItemContent = styled(TreeItem2Content)(({ theme }) => ({
  marginBottom: theme.spacing(0.2),
  color: theme.palette.text.secondary,
  borderRadius: theme.spacing(1),
  padding: theme.spacing(0.5),
  fontSize: "0.875rem",
  fontWeight: theme.typography.fontWeightMedium,
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
  "&.focused, &.selected": {
    backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
    color: "var(--tree-view-color)",
  },
}));

const CustomTreeItemIconContainer = styled(TreeItem2IconContainer)(() => ({
  marginRight: "4px",
  fontSize: "18px",
}));

const CustomTreeItemGroupTransition = styled(TreeItem2GroupTransition)(() => ({
  marginLeft: 0,
  "& .content": {
    paddingLeft: "8px",
  },
}));

// Draggable TreeItem Component
const CustomTreeItem = React.forwardRef(function CustomTreeItem(props, ref) {
  const {
    id,
    itemId,
    label,
    disabled,
    children,
    labelIcon: LabelIcon,
    labelInfo,
    allData,
    ...other
  } = props;

  const {
    getRootProps,
    getContentProps,
    getIconContainerProps,
    getLabelProps,
    getGroupTransitionProps,
    status,
  } = useTreeItem2({ id, itemId, children, label, disabled, rootRef: ref });

  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: ItemTypes.TREE_ITEM,
    item: { ...allData }, // Pass allData
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <TreeItem2Provider itemId={itemId}>
      <CustomTreeItemRoot {...getRootProps(other)}>
        <CustomTreeItemContent
          ref={dragRef} // drag handle
          {...getContentProps({
            className: clsx("content", {
              expanded: status.expanded,
              selected: status.selected,
              focused: status.focused,
            }),
          })}
          style={{
            opacity: isDragging ? 0.5 : 1,
            cursor: "move",
          }}
        >
          <CustomTreeItemIconContainer {...getIconContainerProps()}>
            <TreeItem2Icon status={status} />
          </CustomTreeItemIconContainer>
          <Box sx={{ display: "flex", flexGrow: 1, alignItems: "center" }}>
            <Box component={LabelIcon} sx={{ fontSize: 18, mr: 1 }} />
            <Typography {...getLabelProps({ variant: "body2", sx: { flexGrow: 1 } })}>
              {label}
            </Typography>
            {labelInfo && (
              <Typography variant="caption" sx={{ fontSize: "0.75rem" }}>
                {labelInfo}
              </Typography>
            )}
          </Box>
        </CustomTreeItemContent>
        {children && (
          <CustomTreeItemGroupTransition {...getGroupTransitionProps()} />
        )}
      </CustomTreeItemRoot>
    </TreeItem2Provider>
  );
});

// TreeControlers Component
export default function TreeControlers() {
  return (
    <SimpleTreeView
      aria-label="tree-view"
      defaultExpandedItems={["3"]}
      defaultSelectedItems="5"
      slots={{
        expandIcon: ArrowRightIcon,
        collapseIcon: ArrowDropDownIcon,
      }}
      sx={{
        flexGrow: 1,
        maxWidth: 300,
        backgroundColor: "white",
        borderRadius: "8px",
        padding: "8px",
      }}
    >
      <CustomTreeItem itemId={0} label="Control" labelIcon={Label}>
        {[
          {
            id: 1,
            label: "Static Text",
            icon: TextFieldsIcon,
            bgColor: "#ff8f00",
            color: "#333333",
          },
          {
            id: 2,
            label: "Image",
            icon: ImageIcon,
            bgColor: "#9035ff",
            color: "#ffffff",
          },
          {
            id: 3,
            label: "Body Grid",
            icon: GridOnIcon,
            bgColor: "#64ff6a",
            color: "#000000",
          },
          {
            id: 4,
            label: "Rectangle",
            icon: RectangleIcon,
            bgColor: "#ff8f00",
            color: "#000000",
          },
          {
            id: 5,
            label: "Line",
            icon: HorizontalRuleIcon,
            bgColor: "#9035ff",
            color: "#ffffff",
          },
          {
            id: 6,
            label: "Table",
            icon: TableViewIcon,
            bgColor: "#64ff6a",
            color: "#000000",
          },
        ].map((item) => (
          <CustomTreeItem
            key={item.id}
            itemId={item.id}
            label={item.label}
            labelIcon={item.icon}
            allData={item}
          />
        ))}
      </CustomTreeItem>
    </SimpleTreeView>
  );
}
