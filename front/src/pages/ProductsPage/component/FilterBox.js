import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import PriceSlider from "../component/PriceSlider";
import FilterCheckbox from "./FilterCheckbox";
import Characteristics from "./Characteristics";
import Categories from "./Categories";
import Category from "./Category";
import arrow from "../assets/blackArrow.svg";
import {
  getAllCategories,
  setCategoriesJackets,
} from "../../../redux/actions/categories";

const useStyles = makeStyles({
  root: {
    "&$checked": {
      color: "#000",
    },
  },
  checked: {},
  wrap: {
    margin: 0,
  },
});

function FilterBox({
  count,
  activeFilter,
  activeSorting,
  clearFilter,
  index,
  category1,
  changeCategory1,
  category2,
  changeCategory2,
  category3,
  changeCategory3,
  category4,
  changeCategory4,
  category5,
  changeCategory5,
  category6,
  changeCategory6,
  category7,
  changeCategory7,
  category8,
  changeCategory8,
  category9,
  changeCategory9,
  category10,
  changeCategory10,
  category11,
  changeCategory11,
  selectedPrice,
  changePrice,
  gender,
  changeGender,
  colors,
  changeColors,
  sizes,
  changeSizes,
  brands,
  changeBrands,
  changeSorting,
  sorting,
}) {
  const dispatch = useDispatch();
  const state = useSelector(({ products, brands, filters, categories }) => {
    return {
      products: products.items,
      brands: brands.items,
      filters: filters.items,
      categories: categories.items,
      categoriesLoad: categories.isLoaded,
      productsLoad: products.isLoaded,
      filtersLoad: filters.isLoaded,
    };
  });
  useEffect(() => {
    dispatch(getAllCategories());
  }, [state.categoriesLoad]);
  const classes = useStyles();
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  // const categories = state.categories?.map((el) =>
  //   el.subCategories.map((el) =>
  //     el ? { ...el, checked: false, label: el.subCategoryName } : el
  //   )
  // );
  const categories = [
    category1,

    category2,

    category3,

    category4,

    category5,

    category6,

    category7,

    category8,

    category9,

    category10,

    category11,
  ];
  // console.log(categories);
  const changeCategories = [
    changeCategory1,
    changeCategory2,
    changeCategory3,
    changeCategory4,
    changeCategory5,
    changeCategory6,
    changeCategory7,
    changeCategory8,
    changeCategory9,
    changeCategory10,
    changeCategory11,
  ];

  return (
    <FilterContent>
      <p className="filter-canceler" onClick={clearFilter}>
        Сбросить все фильтры
      </p>

      <div
        className={
          count === 0
            ? "filter nonactive1"
            : activeFilter
            ? "filter filter-nonactive"
            : "filter filter-active active1"
        }
      >
        <div className="laptop">
          <div className="filter-header1">
            <h6 className="filter-title">Категории</h6>
          </div>

          {index === 11 ? (
            <Categories
              categories={categories}
              changeCategories={changeCategories}
            />
          ) : (
            <Category
              index={index}
              categories={categories}
              changeCategories={changeCategories}
            />
          )}
        </div>

        <h6 className="filter-title">
          Цена <span className="mobile"> (KZT)</span>
        </h6>
        <div className="filter-items">
          <p className="filter-item">
            от <span>{selectedPrice[0]}</span>
          </p>
          <p className="filter-item">
            до <span>{selectedPrice[1]}</span>
          </p>
        </div>
        <PriceSlider value={selectedPrice} changePrice={changePrice} />

        <div className={isActive ? " section-close" : "section-open"}>
          <div className="filter-header">
            <p className="filter-title">Пол</p>
            <img
              src={arrow}
              alt="arrow icon"
              className="filter-icon"
              onClick={handleToggle}
            />
          </div>

          <ul className="category-items">
            {gender.map((sex) => (
              <FilterCheckbox
                key={sex.id}
                data={sex}
                changeChecked={changeGender}
              />
            ))}
          </ul>
        </div>

        <div className="laptop">
          <ul className="category-items">
            {gender.map((sex) => (
              <FilterCheckbox
                key={sex.id}
                data={sex}
                changeChecked={changeGender}
              />
            ))}
          </ul>
        </div>

        <div className="mobile">
          <div className="filter-header1">
            <h6 className="filter-title">Категории</h6>
          </div>

          {index === 11 ? (
            <Categories
              categories={categories}
              changeCategories={changeCategories}
            />
          ) : (
            <Category
              index={index}
              categories={categories}
              changeCategories={changeCategories}
            />
          )}
        </div>

        <div className="filter-header2">
          <h6 className="filter-title">Характеристики</h6>
        </div>
        <Characteristics
          colors={colors}
          changeColors={changeColors}
          sizes={sizes}
          changeSizes={changeSizes}
          brands={brands}
          changeBrands={changeBrands}
        />
      </div>

      <div className={activeSorting ? "sorting" : "sorting active"}>
        <h6 className="filter-title laptop">Сортировка</h6>
        {sorting.map((sort) => (
          <FilterCheckbox
            key={sort.id}
            data={sort}
            changeChecked={changeSorting}
          />
        ))}
      </div>
    </FilterContent>
  );
}

const FilterContent = styled.nav`
  width: 17.5vw;

  .MuiButtonBase-root.MuiIconButton-root.MuiCheckbox-root {
    padding: 0 15px 0 0;
  }

  .MuiSvgIcon-fontSizeSmall {
    width: 15px;
    height: 15px;
  }

  .MuiTypography-body1 {
    font-family: Jost;
  }

  .filter-canceler {
    color: var(--clr-primary-4);
    text-decoration: underline;
    margin-bottom: -0.625rem;
    cursor: pointer;
  }

  .filter-header {
    margin-top: 3.75rem;
  }

  .filter-title {
    font-size: 20px;
    font-weight: 500;
    margin-top: 2.5rem;
  }

  .filter-icon {
    cursor: pointer;
  }

  .section-close .category-items {
    height: 0;
    overflow: hidden;
    margin: 0;
  }

  .section-close .filter-icon {
    transform: rotate(-180deg);
  }

  .section-open .category-items {
    height: 100%;
  }

  .section-open .filter-icon {
    transform: rotate(0deg);
  }

  .category-header {
    width: 13.125rem;
    height: 1.875rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.625rem;
  }

  .category-title,
  .category-item {
    font-size: 16px;
    font-weight: 400;
  }

  .category-item {
    margin-top: 0.625rem;
  }

  .filter-items {
    display: flex;
    margin: 10px 0 16px;
  }

  .filter-items span {
    text-decoration: underline;
    color: var(--clr-black);
  }

  .filter-item {
    width: 6.25rem;
    font-size: 14px;
    font-weight: 400;
    color: var(--clr-primary-4);
  }

  .mobile,
  .filter-header .filter-icon {
    display: none;
  }

  @media (max-width: 1400px) {
    .filter-title {
      font-size: 19px;
    }

    .category-header {
      width: 11.875rem;
      height: 1.5625rem;
    }

    .filter-canceler,
    .category-title,
    .category-item span {
      font-size: 15px;
    }

    .filter-item {
      width: 5.625rem;
    }

    .MuiSlider-thumb {
      width: 18px;
      height: 18px;
      margin-top: -8px;
    }
  }

  @media (max-width: 1250px) {
    .filter-title {
      font-size: 17px;
      margin-top: 30px;
    }

    .category-header {
      width: 12.125rem;
      height: 1.25rem;
    }

    .category-item {
      margin-top: 7px;
    }

    .filter-canceler,
    .category-title,
    .category-item span {
      font-size: 13px;
    }

    .filter-item {
      width: 5.625rem;
    }
  }

  @media (max-width: 1100px) {
    .filter-title {
      font-size: 18px;
    }

    .category-header {
      width: 13.125rem;
    }

    .category-title,
    .filter-canceler,
    .category-item span {
      font-size: 14px;
    }

    .filter-item {
      width: 6.25rem;
    }

    .MuiSlider-thumb {
      width: 16px;
      height: 16px;
      margin-top: -7px;
    }
  }

  @media (max-width: 992px) {
    width: 32vw;

    .MuiButtonBase-root.MuiIconButton-root.MuiCheckbox-root {
      padding: 0 10px 0 0;
    }

    .filter-title {
      font-size: 16px;
    }

    .category-header {
      width: 11.875rem;
    }

    .category-item {
      margin-top: 5px;
    }

    .filter-icon {
      width: 5%;
    }

    .category-title,
    .filter-canceler,
    .category-item span {
      font-size: 13px;
    }

    .filter-item {
      width: 5.9375rem;
    }
  }

  @media (max-width: 768px) {
    .filter-title {
      font-size: 15px;
    }

    .category-header {
      width: 9rem;
      margin-top: 0.3125rem;
    }

    .category-title,
    .filter-canceler,
    .filter-item,
    .category-item span {
      font-size: 12px;
    }

    .filter-item {
      width: 5rem;
    }

    .MuiSlider-thumb {
      width: 14px;
      height: 14px;
      margin-top: -6px;
    }
  }

  @media (max-width: 740px) {
    width: 22vw;

    .MuiSvgIcon-fontSizeSmall {
      width: 12.5px;
      height: 12.5px;
    }

    .MuiButtonBase-root.MuiIconButton-root.MuiCheckbox-root {
      padding: 0 12px 0 0;
    }

    .filter-title {
      font-size: 16px;
    }

    .category-header {
      width: 20vw;
    }

    .category-title,
    .filter-canceler,
    .category-item span {
      font-size: 12px;
    }

    .filter-item {
      width: 14vw;
      font-size: 12px;
    }
  }

  @media (max-width: 740px) {
    width: 29vw;

    .category-header {
      width: 23vw;
    }
  }

  @media (max-width: 540px) {
    width: 24vw;

    .MuiSvgIcon-fontSizeSmall {
      width: 10px;
      height: 10px;
    }

    .category-header {
      width: 22vw;
    }

    .filter-title {
      font-size: 12px;
    }

    .category-title,
    .filter-canceler,
    .category-item span {
      font-size: 10px;
    }

    .category-item {
      margin-top: 0.325rem;
    }

    .filter-item {
      width: 12vw;
      font-size: 10px;
    }
  }

  @media (max-width: 480px) {
    max-width: max-content;

    .MuiButtonBase-root.MuiIconButton-root.MuiCheckbox-root {
      padding: 0 15px 0 0;
    }

    .MuiSvgIcon-fontSizeSmall {
      width: 15px;
      height: 15px;
    }

    @keyframes animateIn {
      0% {
        transform: translateY(600px);
        opacity: 0;
      }
      100% {
        transform: translateY(0px);
        opacity: 1;
      }
    }

    @keyframes animateOut {
      0% {
        transform: translateY(0px);
        opacity: 1;
      }
      100% {
        transform: translateY(600px);
        opacity: 0;
        position: absolute;
      }
    }

    .filter-canceler,
    .laptop,
    .laptop.filter-title {
      display: none;
    }

    .mobile,
    .filter-header .filter-icon {
      display: block;
    }

    .filter {
      position: absolute;
      width: 100%;
      left: 0;
      top: 20%;
      background: var(--clr-white);
      padding: 1.25rem 1.25rem 1.875rem;
      z-index: -1;
    }

    .active1 {
      z-index: 5;
    }

    .nonactive1 {
      display: none;
    }

    .filter-active {
      animation: animateIn 0.7s linear 0s;
    }

    .filter-nonactive {
      animation: animateOut 0.7s linear 0s;
    }

    .filter-title {
      display: flex;
      margin: 0 0 1.25rem;
    }

    .filter-item {
      font-size: 14px;
      width: 110px;
    }

    .filter-title span {
      margin-left: 0.3125rem;
    }

    .filter-header {
      display: flex;
      justify-content: space-between;
      margin-top: 2.5rem;
    }

    .filter-header .filter-title,
    .filter-header .filter-icon {
      margin: 0;
    }

    .section-close .category-items {
      height: 0;
      overflow: hidden;
      margin: 0;
    }

    .section-open .category-items {
      height: 100%;
    }

    .filter-header1,
    .filter-header2 {
      position: relative;
      align-items: center;
    }

    .filter-header1:after,
    .filter-header2:after,
    .filter-header1:before,
    .filter-header2:before {
      content: "";
      position: absolute;
      height: 1px;
      background: var(--clr-primary-5);
    }

    .filter-header1:after,
    .filter-header1:before {
      width: 31.25%;
    }

    .filter-header2:after,
    .filter-header2:before {
      width: 25%;
    }

    .filter-header1:after,
    .filter-header2:after {
      right: 0;
      top: 50%;
    }

    .filter-header1:before,
    .filter-header2:before {
      bottom: 50%;
    }

    .filter-header1 .filter-title,
    .filter-header2 .filter-title {
      width: 37.5%;
      text-align: center;
      margin: 1.25rem auto 0;
    }

    .filter-title {
      font-size: 18px;
      font-weight: 500;
    }

    .category-header {
      width: 100%;
      height: 1.875rem;
    }

    .category-title,
    .category-item span {
      font-size: 16px;
    }

    .filter-icon {
      width: 11px;
    }

    .sorting {
      position: absolute;
      width: 61.11%;
      background: var(--clr-white);
      top: 0;
      left: 0;
      padding: 1.25rem 0.625rem 1.25rem 0.938rem;
      z-index: -3;
    }

    .active {
      z-index: 3;
    }
  }
`;

export default FilterBox;
