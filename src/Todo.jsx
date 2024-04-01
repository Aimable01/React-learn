import React, { useState } from "react";

function Todo() {
  const [name, setName] = useState("");
  const [items, setItem] = useState([]);

  let index = 0;

  return (
    <div>
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
        }}
      >
        Add
      </button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name} </li>
        ))}
      </ul>
    </div>
  );
}
export default Todo;
