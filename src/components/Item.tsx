type itemProps = {
  item: {
    id: number;
    description: string;
    quantity: number;
    packed: boolean;
  };
  onRemoveItem: (id: number) => void;
  onToggleItem: (id: number) => void;
};

function Item({ item, onRemoveItem, onToggleItem }: itemProps) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onRemoveItem(item.id)}>❌</button>
    </li>
  );
}

export default Item;
