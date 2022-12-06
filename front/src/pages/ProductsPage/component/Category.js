import React from "react";
import FilterCheckbox from "./FilterCheckbox";

function Categories({ index, categories, changeCategories }) {
  return index < 11 ? (
    <div key={index}>
      <ul className="category-items">
        {categories[index]?.map((filter) => (
          <FilterCheckbox
            key={filter.id}
            data={filter}
            changeChecked={changeCategories[index]}
          />
        ))}
      </ul>
    </div>
  ) : null;
}

export default Categories;
