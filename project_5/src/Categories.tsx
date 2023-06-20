
import React from "react"

type Props = {
    categories: string[]
    filterItems: (item: string) => void;
}



const Categories: React.FC<Props> = ({ categories, filterItems }) => {
    return (
        <div className="btn-container">
            {categories.map((category, index) => {
                return (
                    <button
                        type="button"
                        className="filter-btn"
                        key={index}
                        onClick={() => filterItems(category)}
                    >
                        {category}
                    </button>
                );
            })}
        </div>
    )
}

export { Categories }