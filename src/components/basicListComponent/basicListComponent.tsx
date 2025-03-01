import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function basicListComponent({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              onSelectItem(item);
              setSelectedIndex(index);
            }}
            style={{
              backgroundColor: index === selectedIndex ? "lightgray" : "white",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default basicListComponent;
