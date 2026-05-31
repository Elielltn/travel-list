import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import type { itemType } from "./types/itemType";

function App() {
  const [items, setItems] = useState<itemType[]>([]);

  function handleAddItems(item: itemType) {
    setItems((items) => [...items, item]);
  }

  function handleRemoveItem(itemId: number) {
    setItems((items) => items.filter((i) => i.id !== itemId));
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onRemoveItem={handleRemoveItem} />
      <Stats />
    </div>
  );
}

export default App;
