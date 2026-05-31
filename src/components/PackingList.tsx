import Item from "./Item";
import type { itemType } from "../types/itemType";

type packingListProps = {
  items: itemType[];
};

function PackingList({ items }: packingListProps) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
