import { useState } from "react";

import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItems,
  onToggleitems,
  clearlist,
}) {
  const [sortBy, setSortby] = useState("input");
  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItems={onDeleteItems}
            onToggleitems={onToggleitems}
            key={item.id}
          />
        ))}
      </ul>

      <li className="actions">
        <select value={sortBy} onChange={(e) => setSortby(e.target.value)}>
          <option value="input"> Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
      </li>

      <button onClick={clearlist}>Clear List</button>
    </div>
  );
}
