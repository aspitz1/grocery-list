import React from 'react';

interface ListProps {
    groceryItems: string[]
}

const List: React.FC<ListProps> = ({ groceryItems }) => {
    const listItems = (listItems: string[]) => {
        return listItems.map((item: string, i) => {
            return (
                <li key={i} id={i.toString()}>{item}</li>
            )
        });
    }

    return (
        <ul>
            { listItems(groceryItems) }
        </ul>
    )
}

export default List;