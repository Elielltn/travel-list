import Item from "./Item";
import type { itemType } from "../types/itemType";

type packingListProps = {
  items: itemType[];
  onRemoveItem: (id: number) => void;
  onToggleItem: (id: number) => void;
};

function PackingList({ items, onRemoveItem, onToggleItem }: packingListProps) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onRemoveItem={onRemoveItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
