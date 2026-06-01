import type { itemType } from "../types/itemType";

type statsProps = {
  items: itemType[];
};

function Stats({ items }: statsProps) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list🚀</em>
      </p>
    );
  }

  const numItems: number = items.length;
  const numPackedItems: number = items.filter((i) => i.packed).length;
  const packedPercentage: number =
    numItems === 0 ? 0 : Math.round((numPackedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "You got everything! Ready to go✈️"
          : `👜 You have ${numItems} items on your list, and you already packed ${numPackedItems} (${packedPercentage}%)`}
      </em>
    </footer>
  );
}

export default Stats;
