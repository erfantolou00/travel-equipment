import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {

    const [items, setItems] = useState([])

    function itemsHandler(newItem) {
        setItems((items) => [...items, newItem])

    }

    function deleteHandler(id) {
        setItems(items => items.filter(
            (item) => item.id !== id
        ))
    }

    function packedHandler(id) {
        setItems(items => items.map(
            item => item.id === id ? { ...item, packed: !item.packed }
                : item

        ))
    }
    function clearHandler() {
        const confirmed = window.confirm('Are you sure want to delete all items?')

        if (confirmed) setItems([])
    }



    return (
        <div className="app">
            <Logo />
            <Form onAddHandler={itemsHandler} />
            <PackingList items={items} onDeleteHandler={deleteHandler} onPackedHandler={packedHandler} onClearHandler={clearHandler} />
            <Stats items={items} />

        </div>
    )
}


