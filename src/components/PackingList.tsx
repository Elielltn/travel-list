import Item from "./Item";
import type { itemType } from "../types/itemType";

type packingListProps = {
  items: itemType[];
  onRemoveItem: (id: number) => void;
};

function PackingList({ items, onRemoveItem }: packingListProps) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} onRemoveItem={onRemoveItem} />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
