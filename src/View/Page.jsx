import React, { useRef } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../Settings/ControlList"; // adjust path as needed

const Page = ({ children, pageSize, setElements, elements }) => {
  const dropZoneRef = useRef(null); // useRef to get DOM rect

  const [{ isOver }, dropRef] = useDrop({
    accept: ItemTypes.CONTROL,
    drop: (item, monitor) => {
      const id = crypto.randomUUID();
      const offset = monitor.getClientOffset();

      if (!offset || !dropZoneRef.current) return;

      const canvasRect = dropZoneRef.current.getBoundingClientRect();

      const x = offset.x - canvasRect.left;
      const y = offset.y - canvasRect.top;
      setElements((prev) => [
        ...prev,
        { iId: id, ...item, position: { x, y } },
      ]);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  // Merge refs
  const combinedRef = (node) => {
    dropRef(node);
    dropZoneRef.current = node;
  };

  const a4SheetStyle = {
    position: "relative", // ⬅️ Required for positioning children absolutely
    width: pageSize?.width > 800 ? 800 : pageSize?.width,
    height: pageSize?.height > 600 ? 600 : pageSize?.height,
    backgroundColor: "white",
    padding: "20px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    margin: "20px auto",
    border: isOver ? "2px dashed #1976d2" : "2px dashed transparent",
    transition: "border 0.2s ease-in-out",
  };

  return (
    <div ref={combinedRef} style={a4SheetStyle}>
   
    {children}
  </div>
  );
};

export default Page;
