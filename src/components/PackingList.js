import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, onDeleteHandler, onPackedHandler, onClearHandler }) {
    const [sortBy, setSortBy] = useState("input");
    let sortedItem;

    if (sortBy === "input") sortedItem = items;
    if (sortBy === "description") sortedItem = items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description)
        );

    if (sortBy === "packed") sortedItem = items.slice().sort((a, b) => Number(a.packed - b.packed));


    return (
        <div className="list">
            <ul>
                {sortedItem.map(i => <Item item={i}
                    key={i.id}
                    onDeleteHandler={onDeleteHandler}
                    onPackedHandler={onPackedHandler} />
                )}
            </ul>
            <div className="actions">
                <select value={sortBy} onChange={e => setSortBy(e.target.value)}>

                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed status</option>
                </select>
                <button onClick={onClearHandler}>Clear list</button>
            </div>
        </div>
    );
}
