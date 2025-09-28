import { useState } from "react";
import "./App.css";
import "./Index.css";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import AddItemForm from "./Components/AddItemForm";
import NoItem from "./Components/NoItem";
import FilterButtons from "./Components/FilterButtons";
import ListItems from "./Components/ListItems";

const urunler = [
  { id: 1, name: "Yumurta", completed: true },
  { id: 2, name: "Peynir", completed: true },
  { id: 3, name: "Zeytin", completed: false },
];

function App() {
  const [items, setItems] = useState(urunler);
  const [filterButton, setFilterButtons] = useState("all");
  function handleAddItem(item) {
    setItems((items) => [...items, item]);
    setFilterButtons("all");
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((i) => i.id != id));
  }
  function handleUpdateItem(id) {
    const updatedItems = (items) =>
      items.map((item) =>
        item.id == id ? { ...item, completed: !item.completed } : item
      );
    setItems(updatedItems);
  }
  function handleClearItems() {
    setItems([]);
  }
  return (
    <div className="container">
      <Header />
      <AddItemForm onAddItem={handleAddItem} />

      {items.length > 0 && (
        <FilterButtons
          filterButton={filterButton}
          setFilterButtons={setFilterButtons}
          onClearItems={handleClearItems}
        />
      )}

      <ListItems
        urunler={items}
        onDeleteItems={handleDeleteItem}
        onUpdateItem={handleUpdateItem}
        filterButton={filterButton}
      />
    </div>
  );
}

export default App;
