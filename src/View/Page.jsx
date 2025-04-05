import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../Settings/TreeControlers";  // Adjust import path accordingly

const Page = ({ children, pageSize }) => {
  const [droppedItems, setDroppedItems] = useState([]);

  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: ItemTypes.TREE_ITEM,
    drop: (item, monitor) => {
      console.log("🔥 Dropped item:", item); // 👈 Your drop data here
      const clientOffset = monitor.getClientOffset();
      console.log("📍 Drop position:", clientOffset);

      setDroppedItems((prev) => [
        ...prev,
        {
          ...item,
          position: clientOffset,
        },
      ]);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const a4SheetStyle = {
    width: pageSize?.width > 800 ? 800 : pageSize?.width,
    height: pageSize?.height > 600 ? 600 : pageSize?.height,
    backgroundColor: isOver ? "#f0f8ff" : "white", // Highlight on hover
    padding: "20px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    margin: "20px auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative", // So child elements can be placed using absolute if needed
  };

  return (
    <div ref={dropRef} style={a4SheetStyle}>
      {children}
      {/* Optionally render dropped items */}
      {droppedItems.map((el, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: el.position?.y - 100 || 0,
            left: el.position?.x - 200 || 0,
            padding: "8px 12px",
            backgroundColor: el.bgColor,
            color: el.color,
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
          }}
        >
          {el.icon && <el.icon style={{ fontSize: 16 }} />}
          {el.label}
        </div>
      ))}
    </div>
  );
};

export default Page;
