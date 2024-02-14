import { useState } from "react";

export default function Form({ onAddHandler }) {

    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("1");

    function submitHandler(e) {
        e.preventDefault();

        if (!description) return;

        const newItems = {
            description, quantity, packed: false,
            id: Date.now()
        };

        onAddHandler(newItems);
        setDescription('');
        setQuantity(1);
    }

    return (
        <form className="add-form" onSubmit={submitHandler}>

            <h3>What do you need for your 😍 trip ?</h3>
            <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                {Array.from({ length: 20 }, (_, i) => i + 1).map(
                    num => <option value={num} key={num}>
                        {num}
                    </option>
                )}
            </select>
            <input type="text"
                placeholder="items..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}>

            </input>
            <button>Add</button>
        </form>
    );
}
