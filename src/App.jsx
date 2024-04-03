import AddTODO from "./components/Add";
import Item from "./components/Item";
import "./App.css";
import { useState } from "react";
function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDate) => {
    const newTodoItems = [
      ...todoItems,
      {
        name: itemName,
        date: itemDate,
      },
    ];
    setTodoItems(newTodoItems);
  };
  const handleDeleteItem = (itemTodoName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== itemTodoName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <h1>TODO Lists</h1>
      <AddTODO onNewItem={handleNewItem} />
      {todoItems.length === 0 && <p>Welcome to Todo App</p>}
      <div className="text-items">
        {todoItems.map((item) => (
          <Item
            key={item}
            todoName={item.name}
            DeleteButtonClick={handleDeleteItem}
            todoDate={item.date}
          />
        ))}
      </div>
    </center>
  );
}

export default App;
