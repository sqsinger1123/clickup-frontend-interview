export type ListItem = {
    id: number;
    name: string;
}

export type ListProps = {
    items: ListItem[];
    handleDeleteItem?: (id: number) => void;
}

function List({ items, handleDeleteItem }: ListProps) {
    return (
        <ul className="w-full">
            {items.map((item: ListItem) => (
                <li key={item.id} className="flex grow w-full justify-between">
                    {item.name}
                    {handleDeleteItem &&
                        <button
                            className="ml-4 px-2 justify-self-end text-slate-300 hover:text-black focus:text-black"
                            onClick={() => handleDeleteItem(item.id)}
                        >
                            x
                        </button>}
                </li>
            ))}
        </ul>
    );
}

export default List;