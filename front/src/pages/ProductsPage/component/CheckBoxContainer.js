import React, { useState } from "react";
import FilterCheckbox from "./FilterCheckbox";
import arrow from "../assets/blackArrow.svg";

function CheckBoxContainer({ id, title, filters, changeCheckedFilters }) {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div key={id}>
      <div
        className={
          isActive
            ? "filter-category section-close"
            : "filter-category section-open"
        }
      >
        <div className="category-header">
          <p className="category-title">{title}</p>
          <img
            src={arrow}
            alt="arrow icon"
            className="filter-icon"
            onClick={handleToggle}
          />
        </div>

        <ul className="category-items">
          {filters?.map((filter) => (
            <FilterCheckbox
              key={filter.id}
              data={filter}
              changeChecked={changeCheckedFilters}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CheckBoxContainer;
