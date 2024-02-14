
export default function Item({ item, onDeleteHandler, onPackedHandler }) {
    return <li>

        <input type="checkbox" value={item.packed} onChange={() => onPackedHandler(item.id)} />
        <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
            {item.quantity}  {item.description}
        </span>
        <button onClick={() => onDeleteHandler(item.id)}>❌</button>

    </li>;
}
