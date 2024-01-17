import React, { useState } from "react";
import ListItemComponent from "@/components/itemList/items";
import data from "@/dist/data";
import InputValue from "@/components/inputValue/chipItems";
import ChipComponent from "@/components/inputValue/chipItems";

import ListItem from "@/types/types";

const Home: React.FC = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [chipItems, setChipItems] = useState<ListItem[]>([]);

  const filteredData = data
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((item) => !chipItems.some((chipItem) => chipItem.id === item.id));

  const handleItemClick = (itemName: string) => {
    const selectedData: ListItem[] = data.filter((item) =>
      item.name.toLowerCase().includes(itemName.toLowerCase())
    );
    setChipItems((prevChipItems) => [...prevChipItems, ...selectedData]);
  };

  const handleChipRemove = (itemId: number) => {
    setChipItems((prevChipItems) =>
      prevChipItems.filter((item) => item.id !== itemId)
    );
  };

  return (
    <>
      <h2 style={{ color: "blue", textAlign: "center" }}>Pick User</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "100%",
        }}
      >
        <div>
          <div style={{ padding: "10px", maxWidth: "100%" }}>
            <div className="custom-container">
              <div className="chipComponent">
                {chipItems.map((item) => (
                  <ChipComponent
                    key={item.id}
                    item={item}
                    onRemove={() => handleChipRemove(item.id)}
                  />
                ))}
              </div>
              <input
                className="custom-input"
                type="text"
                placeholder="Add new user"
                onFocus={() => setIsInputFocused(true)}
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
              />
            </div>
          </div>

          {isInputFocused && (
            <div className="list-container">
              {filteredData.map((item) => (
                <ListItemComponent
                  key={item.id}
                  item={item}
                  onItemClick={handleItemClick}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
