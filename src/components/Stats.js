export default function Stats({ items }) {
    if (!items.length) return (
        <footer className="stats">
            Start adding some items to your packing list🚀
        </footer>
    );

    const numItems = items.length;
    const numItemsPacked = items.filter((item) => item.packed).length;
    const precentageItem = Math.round(numItemsPacked / numItems * 100);

    return <footer className="stats ">
        {precentageItem !== 100 ?
            <em>
                👜 You have {numItems} items on your list, and you already packed {numItemsPacked} items (%{precentageItem})
            </em> :

            <em>
                You Got Everything! Ready To Go ✈
            </em>}
    </footer>;
}
