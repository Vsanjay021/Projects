import React from "react";

import { ListType } from "./App";
import { FaEdit, FaTrash } from "react-icons/fa"
type Props = {
    items: ListType[],
    removeitem: (id: string) => void,
    edititem: (id: string) => void
}

const List: React.FC<Props> = ({ items, removeitem, edititem }) => {
    return (
        <div className="grocery-list">
            {items.map((item) => {
                const { id, title } = item;
                return (
                    <article key={id} className="grocery-item">
                        <p className="title">{title}</p>
                        <div className="btn-container">
                            <button type="button" className="edit-btn" onClick={() => edititem(id)}>
                                <FaEdit />
                            </button>
                            <button type="button" className="delete-btn" onClick={() => { removeitem(id) }}>
                                <FaTrash />
                            </button>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}

export { List }