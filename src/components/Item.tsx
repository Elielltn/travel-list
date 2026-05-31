type itemProps = {
  item: {
    id: number;
    description: string;
    quantity: number;
    packed: boolean;
  };
};

function Item({ item }: itemProps) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

export default Item;
