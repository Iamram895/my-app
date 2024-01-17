// components/ListItem.tsx
import React from "react";
import ListItem from "@/types/types";
import Image from "next/image";

import styles from "./Home.module.css";
interface ListItemProps {
  item: ListItem;
  onItemClick: (itemName: string) => void;
}

const ListItemComponent: React.FC<ListItemProps> = ({ item, onItemClick }) => {
  return (
    <div className="list-item" onClick={() => onItemClick(item.name)}>
      <div className="listName-image">
        <div
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <img
            className="img"
            src={item.photo}
            alt={item.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>{" "}
        <p>{item.name}</p>
      </div>

      <div>
        <p> {item.email}</p>
      </div>
    </div>
  );
};

export default ListItemComponent;
