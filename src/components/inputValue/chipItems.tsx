import React from "react";
import ListItem from "@/types/types";
import Image from "next/image";

interface ListItemProps {
  item: ListItem;
  onRemove: React.MouseEventHandler<HTMLParagraphElement>;
}

const ChipComponent: React.FC<ListItemProps> = ({ item, onRemove }) => {
  return (
    <div className="chip-container">
      <div
        style={{
          width: "25px",
          height: "25px",
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        <img
          src={item.photo}
          alt={item.name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>{" "}
      <p>{item.name}</p>
      <p onClick={onRemove} style={{ cursor: "pointer" }}>
        X
      </p>
    </div>
  );
};

export default ChipComponent;
