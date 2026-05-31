type itemProps = {
  item: {
    id: number;
    description: string;
    quantity: number;
    packed: boolean;
  };
  onRemoveItem: (id: number) => void;
};

function Item({ item, onRemoveItem }: itemProps) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onRemoveItem(item.id)}>❌</button>
    </li>
  );
}

export default Item;
