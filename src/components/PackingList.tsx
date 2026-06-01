import Item from "./Item";
import type { itemType } from "../types/itemType";
import { useState } from "react";

type packingListProps = {
  items: itemType[];
  onRemoveItem: (id: number) => void;
  onToggleItem: (id: number) => void;
};

function PackingList({ items, onRemoveItem, onToggleItem }: packingListProps) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems: itemType[] = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onRemoveItem={onRemoveItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
      </div>
    </div>
  );
}

export default PackingList;
