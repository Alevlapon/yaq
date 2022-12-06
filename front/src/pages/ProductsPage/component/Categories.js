import React from "react";
import CheckBoxContainer from "./CheckBoxContainer";
import { filterCategories } from "../../../data/filter";
import { useDispatch, useSelector } from "react-redux";

function Categories({ categories, changeCategories }) {
  const state = useSelector(({ categories }) => {
    return {
      categories: categories.items,
    };
  });

  return (
    <div>
      {state.categories?.map((el, i) => (
        <CheckBoxContainer
          key={el.id}
          title={el.categoryName}
          filters={categories[i]}
          changeCheckedFilters={changeCategories[i]}
        />
      ))}
      {/* {filterCategories.slice(0, 1).map((item) => {
        return (
          <CheckBoxContainer
            key={item.id}
            title={item.title}
            filters={categories[0]}
            changeCheckedFilters={changeCategories[0]}
          />
        );
      })}
      {filterCategories.slice(1, 2).map((item) => {
        return (
          <CheckBoxContainer
            key={item.id}
            title={item.title}
            filters={categories[1]}
            changeCheckedFilters={changeCategories[1]}
          />
        );
      })}
      {filterCategories.slice(2, 3).map((item) => {
        return (
          <CheckBoxContainer
            key={item.id}
            title={item.title}
            filters={categories[2]}
            changeCheckedFilters={changeCategories[2]}
          />
        );
      })}
      {filterCategories.slice(3, 4).map((item) => {
        return (
          <CheckBoxContainer
            key={item.id}
            title={item.title}
            filters={categories[3]}
            changeCheckedFilters={changeCategories[3]}
          />
        );
      })}
      {filterCategories.slice(4, 5).map((item) => {
        return (
          <CheckBoxContainer
            key={item.id}
            title={item.title}
            filters={categories[4]}
            changeCheckedFilters={changeCategories[4]}
          />
        );
      })}
      {filterCategories.slice(5, 6).map((item) => {
        return (
          <CheckBoxContainer
            key={item.id}
            title={item.title}
            filters={categories[5]}
            changeCheckedFilters={changeCategories[5]}
          />
        );
      })}
      {filterCategories.slice(6, 7).map((item) => {
        return (
          <CheckBoxContainer
            key={item.id}
            title={item.title}
            filters={categories[6]}
            changeCheckedFilters={changeCategories[6]}
          />
        );
      })}
      {filterCategories.slice(7, 8).map((item) => {
        return (
          <CheckBoxContainer
            key={item.id}
            title={item.title}
            filters={categories[7]}
            changeCheckedFilters={changeCategories[7]}
          />
        );
      })}
      {filterCategories.slice(8, 9).map((item) => {
        return (
          <CheckBoxContainer
            key={item.id}
            title={item.title}
            filters={categories[8]}
            changeCheckedFilters={changeCategories[8]}
          />
        );
      })}
      {filterCategories.slice(9, 10).map((item) => {
        return (
          <CheckBoxContainer
            key={item.id}
            title={item.title}
            filters={categories[9]}
            changeCheckedFilters={changeCategories[9]}
          />
        );
      })}
      {filterCategories.slice(10, 11).map((item) => {
        return (
          <CheckBoxContainer
            key={item.id}
            title={item.title}
            filters={categories[10]}
            changeCheckedFilters={changeCategories[10]}
          />
        );
      })} */}
    </div>
  );
}

export default Categories;
