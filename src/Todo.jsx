import React, { useState } from "react";

function Todo() {
  const [name, setName] = useState("");
  const [items, setItem] = useState([]);

  let index = 0;

  function handleDelete(index) {
    const updatedList = items.filter((_, i) => i !== index);
    setItem(updatedList);
  }

  return (
    <div>
      <hr />
      <h3>The lists</h3>
      <input
        type="text"
        placeholder="Enter task"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          setItem([...items, { id: index++, name: name }]);
          setName("");
        }}
      >
        Add
      </button>

      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Todo;
