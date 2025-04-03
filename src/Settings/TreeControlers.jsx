import * as React from "react";
import clsx from "clsx";
import { styled, useTheme, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Label from "@mui/icons-material/Label";
import InfoIcon from "@mui/icons-material/Info";
import ForumIcon from "@mui/icons-material/Forum";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

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

// Styled components
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

// Custom Tree Item Component
const CustomTreeItem = React.forwardRef(function CustomTreeItem(props, ref) {
  const theme = useTheme();
  const {
    id,
    itemId,
    label,
    disabled,
    children,
    bgColor,
    color,
    labelIcon: LabelIcon,
    labelInfo,
    colorForDarkMode,
    bgColorForDarkMode,
    onSelect,
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

  const handleClick = () => {
    if (onSelect) {
      onSelect(itemId);
    }
  };

  return (
    <TreeItem2Provider itemId={itemId}>
      <CustomTreeItemRoot {...getRootProps(other)}>
        <CustomTreeItemContent
          {...getContentProps({
            className: clsx("content", {
              expanded: status.expanded,
              selected: status.selected,
              focused: status.focused,
            }),
            onClick: handleClick, // Call on selection
          })}
        >
          <CustomTreeItemIconContainer {...getIconContainerProps()}>
            <TreeItem2Icon status={status} />
          </CustomTreeItemIconContainer>
          <Box sx={{ display: "flex", flexGrow: 1, alignItems: "center", p: 0.3, pr: 0 }}>
            <Box component={LabelIcon} sx={{ fontSize: 18, mr: 1 }} />
            <Typography {...getLabelProps({ variant: "body2", sx: { flexGrow: 1 } })}>
              {label}
            </Typography>
            {labelInfo && <Typography variant="caption" sx={{ fontSize: "0.75rem" }}>{labelInfo}</Typography>}
          </Box>
        </CustomTreeItemContent>
        {children && <CustomTreeItemGroupTransition {...getGroupTransitionProps()} />}
      </CustomTreeItemRoot>
    </TreeItem2Provider>
  );
});

// End icon for tree items
function EndIcon() {
  return <div style={{ width: 20 }} />;
}

// Tree Control Component
export default function TreeControlers({ setSelectedController }) {
  const handleSelect = (itemId) => {
    setSelectedController(itemId);
  };

  return (
    <SimpleTreeView
      aria-label="tree-view"
      defaultExpandedItems={["3"]}
      defaultSelectedItems="5"
      slots={{
        expandIcon: ArrowRightIcon,
        collapseIcon: ArrowDropDownIcon,
        endIcon: EndIcon,
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
          { id: 1, label: "Static Test", icon: InfoIcon, color: "#FFE2B7", bgColor: "#ff8f00" },
          { id: 2, label: "Image", icon: ForumIcon, color: "#D9B8FB", bgColor: "#9035ff" },
          { id: 3, label: "Body Grid", icon: LocalOfferIcon, color: "#CCE8CD", bgColor: "#64ff6a" },
          { id: 4, label: "Rectangle", icon: InfoIcon, color: "#FFE2B7", bgColor: "#ff8f00" },
          { id: 5, label: "Line", icon: ForumIcon, color: "#D9B8FB", bgColor: "#9035ff" },
          { id: 6, label: "Table", icon: LocalOfferIcon, color: "#CCE8CD", bgColor: "#64ff6a" },
        ].map((item) => (
          <CustomTreeItem
            key={item.id}
            itemId={item.id}
            label={item.label}
            labelIcon={item.icon}
            colorForDarkMode={item.color}
            bgColorForDarkMode={alpha(item.bgColor, 0.2)}
            onSelect={handleSelect} // Pass function
          />
        ))}
      </CustomTreeItem>
    </SimpleTreeView>
  );
}
