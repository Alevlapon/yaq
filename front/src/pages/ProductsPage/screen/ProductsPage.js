import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { filterGender, filterSorting } from "../../../data/filter";
import Error from "../../ErrorPage/screen/ErrorPage";
import ProductBox from "../../Home/components/ProductBox";
import FilterBox from "../component/FilterBox";
import SavedFilter from "../component/SavedFilter";
import sort from "../assets/sort.svg";
import filter from "../assets/filter.svg";
import { UserState } from "../../../context/UserContext";
import {
  getProductsByCategory,
  setProducts,
} from "../../../redux/actions/products";
import { getAllFilters } from "../../../redux/actions/filters";

import PopUp from "../../PopUp/screen/PopUp";

function ProductPage({ title, index, sex }) {
  const [modalActive, setModalActive] = useState(false);
  const [modalId, setModalId] = useState(null);
  console.log(modalActive, modalId);
  const { showLogin, showSignup } = UserState();
  const dispatch = useDispatch();
  useEffect(() => {
    if (showLogin || showSignup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showLogin, showSignup]);

  let genderItem;
  let categoryItem;
  function preLoad() {
    if (sex !== undefined) {
      genderItem = sex + 1;
    }

    let getCategories = (i) => {
      switch (i) {
        case 6:
          return (categoryItem = "Толстовки и свитера");
        case 5:
          return (categoryItem = "Шорты");
        case 4:
          return (categoryItem = "Рубашки");
        case 3:
          return (categoryItem = "Футболки");
        case 2:
          return (categoryItem = "Брюки");
        case 1:
          return (categoryItem = "Жилеты");
        case 0:
          return (categoryItem = "Куртки");
        case 7:
          return (categoryItem = "Обувь");
        case 9:
          return (categoryItem = "Снаряжение");

        case 8:
          return (categoryItem = "Аксессуары");

        case 10:
          return (categoryItem = "Бег");

        default:
          return categoryItem;
      }
    };
    getCategories(index);
  }

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
    preLoad();
    dispatch(
      getProductsByCategory({
        categoryName: categoryItem,
        genderId: genderItem,
      })
    );
  }, [index, sex, state.productsLoad]);

  useEffect(() => {
    preLoad();
    dispatch(
      getAllFilters({
        categoryName: categoryItem,
        genderId: genderItem,
      })
    );
  }, [index, sex, state.filtersLoad]);

  const categoryJacketsItems = state?.categories?.length
    ? state?.categories[0]?.subCategories?.map((el) =>
        el ? { ...el, checked: false, label: el.subCategoryName } : el
      )
    : [];
  const categoryVestsItems = state?.categories?.length
    ? state?.categories[1]?.subCategories?.map((el) =>
        el ? { ...el, checked: false, label: el.subCategoryName } : el
      )
    : [];
  const categoryPantsItems = state?.categories?.length
    ? state?.categories[2]?.subCategories?.map((el) =>
        el ? { ...el, checked: false, label: el.subCategoryName } : el
      )
    : [];
  const categoryTShirtsItems = state?.categories?.length
    ? state?.categories[3]?.subCategories?.map((el) =>
        el ? { ...el, checked: false, label: el.subCategoryName } : el
      )
    : [];
  const categoryShirtsItems = state?.categories?.length
    ? state?.categories[4]?.subCategories?.map((el) =>
        el ? { ...el, checked: false, label: el.subCategoryName } : el
      )
    : [];
  const categoryShortsItems = state?.categories?.length
    ? state?.categories[5]?.subCategories?.map((el) =>
        el ? { ...el, checked: false, label: el.subCategoryName } : el
      )
    : [];
  const categoryHoodiesSweatersItems = state?.categories?.length
    ? state?.categories[6]?.subCategories?.map((el) =>
        el ? { ...el, checked: false, label: el.subCategoryName } : el
      )
    : [];

  const categoryShoesItems = state?.categories?.length
    ? state?.categories[7]?.subCategories?.map((el) =>
        el ? { ...el, checked: false, label: el.subCategoryName } : el
      )
    : [];
  const categoryAccessoriesItems = state?.categories?.length
    ? state?.categories[8]?.subCategories?.map((el) =>
        el ? { ...el, checked: false, label: el.subCategoryName } : el
      )
    : [];
  const categoryEquipmentItems = state?.categories?.length
    ? state?.categories[9]?.subCategories?.map((el) =>
        el ? { ...el, checked: false, label: el.subCategoryName } : el
      )
    : [];
  const categoryRunItems = state?.categories?.length
    ? state?.categories[10]?.subCategories?.map((el) =>
        el ? { ...el, checked: false, label: el.subCategoryName } : el
      )
    : [];
  const brandItems = state?.products?.map((el, index) =>
    el
      ? {
          id: index,
          checked: false,
          label: el.brandName,
        }
      : el
  );
  const AllBrandsinCategory = brandItems
    ?.flat(Infinity)
    .filter(
      (item, index, arr) =>
        arr.findIndex((el) => el.label === item.label) === index
    );
  const allColorItems = state?.products?.map((el, index) =>
    el
      ? {
          id: el.id,
          checked: false,
          label: el.colorName,
        }
      : el
  );
  const allColorsInCategory = allColorItems.filter(
    (item, index, arr) =>
      arr.findIndex((el) => el.label === item.label) === index
  );

  const sizeItems = state?.products?.map((el, index) =>
    el.product_variations.length
      ? el.product_variations[1].prod_var_options.map((el) =>
          el
            ? {
                id: el.id,
                checked: false,
                label: el.optionName,
              }
            : el
        )
      : []
  );
  const allSizesInCategory = sizeItems
    ?.flat(Infinity)
    .filter(
      (item, index, arr) =>
        arr.findIndex((el) => el.label === item.label) === index
    );

  // for Filters

  const [categoryJackets, setCategoryJackets] = useState([]);
  const [categoryVests, setCategoryVests] = useState([]);
  const [categoryPants, setCategoryPants] = useState([]);
  const [categoryTShirts, setCategoryTShirts] = useState([]);
  const [categoryShirts, setCategoryShirts] = useState([]);
  const [categoryShorts, setCategoryShorts] = useState([]);
  const [categoryHoodiesSweaters, setCategoryHoodiesSweaters] = useState([]);
  const [categoryShoes, setCategoryShoes] = useState([]);
  const [categoryAccessories, setCategoryAccessories] = useState([]);
  const [categoryEquipment, setCategoryEquipment] = useState([]);
  const [categoryRun, setCategoryRun] = useState([]);
  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);

  // console.log(categoryJackets);
  useEffect(() => {
    setCategoryJackets(categoryJacketsItems);
    setCategoryVests(categoryVestsItems);
    setCategoryPants(categoryPantsItems);
    setCategoryTShirts(categoryTShirtsItems);
    setCategoryShirts(categoryShirtsItems);
    setCategoryShorts(categoryShortsItems);
    setCategoryHoodiesSweaters(categoryHoodiesSweatersItems);
    setCategoryShoes(categoryShoesItems);
    setCategoryAccessories(categoryAccessoriesItems);
    setCategoryEquipment(categoryEquipmentItems);
    setCategoryRun(categoryRunItems);
    setBrands(AllBrandsinCategory);
    setColors(allColorsInCategory);
    setSizes(allSizesInCategory);
  }, [state.categoriesLoad, state.productsLoad]);
  const [selectedPrice, setSelectedPrice] = useState([100, 1000000]);
  const [gender, setGender] = useState(filterGender);

  // for Sorting
  const [sortingOptions, setSortingOptions] = useState(filterSorting);
  // Final list
  const [resultsFound, setResultsFound] = useState(true);
  // Selected filters
  const [selectedFilters, setSelectedFilters] = useState([]);

  // While checked actions
  const handleChangeCheckedJackets = (id) => {
    const categoryStateList = categoryJackets;

    const changeCheckedCategory = categoryStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCategoryJackets(changeCheckedCategory);
  };

  const handleChangeCheckedVests = (id) => {
    const categoryStateList = categoryVests;
    const changeCheckedCategory = categoryStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCategoryVests(changeCheckedCategory);
  };

  const handleChangeCheckedPants = (id) => {
    const categoryStateList = categoryPants;
    const changeCheckedCategory = categoryStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCategoryPants(changeCheckedCategory);
  };

  const handleChangeCheckedTShirts = (id) => {
    const categoryStateList = categoryTShirts;
    const changeCheckedCategory = categoryStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCategoryTShirts(changeCheckedCategory);
  };

  const handleChangeCheckedShirts = (id) => {
    const categoryStateList = categoryShirts;
    const changeCheckedCategory = categoryStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCategoryShirts(changeCheckedCategory);
  };

  const handleChangeCheckedShorts = (id) => {
    const categoryStateList = categoryShorts;
    const changeCheckedCategory = categoryStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCategoryShorts(changeCheckedCategory);
  };

  const handleChangeCheckedHoodiesSweaters = (id) => {
    const categoryStateList = categoryHoodiesSweaters;
    const changeCheckedCategory = categoryStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCategoryHoodiesSweaters(changeCheckedCategory);
  };

  const handleChangeCheckedShoes = (id) => {
    const categoryStateList = categoryShoes;
    const changeCheckedCategory = categoryStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCategoryShoes(changeCheckedCategory);
  };

  const handleChangeCheckedAccessories = (id) => {
    const categoryStateList = categoryAccessories;
    const changeCheckedCategory = categoryStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCategoryAccessories(changeCheckedCategory);
  };

  const handleChangeCheckedEquipment = (id) => {
    const categoryStateList = categoryEquipment;
    const changeCheckedCategory = categoryStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCategoryEquipment(changeCheckedCategory);
  };

  const handleChangeCheckedRun = (id) => {
    const categoryStateList = categoryRun;
    const changeCheckedCategory = categoryStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCategoryRun(changeCheckedCategory);
  };

  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };

  const handleChangeCheckedGender = (id) => {
    const genderStateList = gender;
    const changeCheckedGender = genderStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setGender(changeCheckedGender);
  };

  const handleChangeCheckedColors = (id) => {
    const colorsStateList = colors;
    const changeCheckedColors = colorsStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setColors(changeCheckedColors);
  };

  const handleChangeCheckedSizes = (id) => {
    const sizesStateList = sizes;
    const changeCheckedSizes = sizesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setSizes(changeCheckedSizes);
  };

  const handleChangeCheckedBrands = (id) => {
    const brandsStateList = brands;
    const changeCheckedBrands = brandsStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    console.log(brands);
    setBrands(changeCheckedBrands);
  };

  // for Sorting
  const handleChangeCheckedSorting = (id) => {
    const sortingStateList = sortingOptions;
    const changeCheckedSorting = sortingStateList.map((item) =>
      item.id === id
        ? { ...item, checked: !item.checked }
        : { ...item, checked: false }
    );

    setSortingOptions(changeCheckedSorting);
    console.log(changeCheckedSorting);
  };

  const filterItems = [
    categoryJackets,
    categoryVests,
    categoryPants,
    categoryTShirts,
    categoryShirts,
    categoryShorts,
    categoryHoodiesSweaters,
    categoryShoes,
    categoryAccessories,
    categoryEquipment,
    categoryRun,
    selectedPrice,
    gender,
    colors,
    sizes,
    brands,
    sortingOptions,
  ];
  const handleDeleteSelectedFilters = (label) => {
    const selectedFilterList = filterItems;
    const deletePickedFilter = selectedFilterList.map((item) =>
      item.map((item) =>
        item.label === label ? { ...item, checked: !item.checked } : item
      )
    );
    setCategoryJackets(deletePickedFilter[0]);
    setCategoryVests(deletePickedFilter[1]);
    setCategoryPants(deletePickedFilter[2]);
    setCategoryTShirts(deletePickedFilter[3]);
    setCategoryShirts(deletePickedFilter[4]);
    setCategoryShorts(deletePickedFilter[5]);
    setCategoryHoodiesSweaters(deletePickedFilter[6]);
    setCategoryShoes(deletePickedFilter[7]);
    setCategoryAccessories(deletePickedFilter[8]);
    setCategoryEquipment(deletePickedFilter[9]);
    setCategoryRun(deletePickedFilter[10]);
    setSelectedPrice(deletePickedFilter[11]);
    setGender(deletePickedFilter[12]);
    setColors(deletePickedFilter[13]);
    setSizes(deletePickedFilter[14]);
    setBrands(deletePickedFilter[15]);
    setSortingOptions(deletePickedFilter[16]);
  };

  const applyFilters = () => {
    let updatedList = state.filters;

    // if (index !== 11) {
    //   if (sex === 0 || sex === 1 || sex === 2) {
    //     const genderLabel = gender[sex].label;
    //     updatedList = updatedList?.filter((item) =>
    //       genderLabel.includes(item.gender)
    //     );
    //   }

    //   const categoryLabelList = filterCategories[index].items.map(
    //     (item) => item.label
    //   );
    //   updatedList = updatedList?.filter((item) =>
    //     categoryLabelList.includes(item.category)
    //   );
    // }

    // Category Filter
    const categoryCheckedJackets = categoryJackets
      ?.filter((item) => item.checked)
      .map((item) => item.label);

    if (categoryCheckedJackets?.length) {
      updatedList = updatedList?.filter((item) =>
        categoryCheckedJackets.includes(item.subCategoryName)
      );
      console.log(updatedList);
    }
    // console.log(updatedList);
    const categoryCheckedVests = categoryVests
      ?.filter((item) => item.checked)
      .map((item) => item.label);

    if (categoryCheckedVests?.length) {
      updatedList = updatedList?.filter((item) =>
        categoryCheckedVests.includes(item.subCategoryName)
      );
    }

    const categoryCheckedPants = categoryPants
      ?.filter((item) => item.checked)
      .map((item) => item.label);

    if (categoryCheckedPants?.length) {
      updatedList = updatedList?.filter((item) =>
        categoryCheckedPants.includes(item.subCategoryName)
      );
    }

    const categoryCheckedTShirts = categoryTShirts
      ?.filter((item) => item.checked)
      .map((item) => item.label);

    if (categoryCheckedTShirts?.length) {
      updatedList = updatedList?.filter((item) =>
        categoryCheckedTShirts.includes(item.subCategoryName)
      );
    }

    const categoryCheckedShirts = categoryShirts
      ?.filter((item) => item.checked)
      .map((item) => item.label);

    if (categoryCheckedShirts?.length) {
      updatedList = updatedList?.filter((item) =>
        categoryCheckedShirts.includes(item.subCategoryName)
      );
    }

    const categoryCheckedShorts = categoryShorts
      ?.filter((item) => item?.checked)
      .map((item) => item.label);

    if (categoryCheckedShorts?.length) {
      updatedList = updatedList?.filter((item) =>
        categoryCheckedShorts.includes(item.subCategoryName)
      );
    }

    const categoryCheckedHoodiesSweaters = categoryHoodiesSweaters
      ?.filter((item) => item?.checked)
      .map((item) => item.label);

    if (categoryCheckedHoodiesSweaters?.length) {
      updatedList = updatedList?.filter((item) =>
        categoryCheckedHoodiesSweaters.includes(item.subCategoryName)
      );
    }

    const categoryCheckedShoes = categoryShoes
      ?.filter((item) => item?.checked)
      .map((item) => item.label);

    if (categoryCheckedShoes?.length) {
      updatedList = updatedList?.filter((item) =>
        categoryCheckedShoes.includes(item.subCategoryName)
      );
    }

    const categoryCheckedAccessories = categoryAccessories
      ?.filter((item) => item?.checked)
      .map((item) => item.label);

    if (categoryCheckedAccessories?.length) {
      updatedList = updatedList?.filter((item) =>
        categoryCheckedAccessories.includes(item.subCategoryName)
      );
    }

    const categoryCheckedEquipment = categoryEquipment
      ?.filter((item) => item?.checked)
      .map((item) => item.label);

    if (categoryCheckedEquipment?.length) {
      updatedList = updatedList?.filter((item) =>
        categoryCheckedEquipment.includes(item.subCategoryName)
      );
    }

    const categoryCheckedRun = categoryRun
      ?.filter((item) => item?.checked)
      .map((item) => item.label);

    if (categoryCheckedRun?.length) {
      updatedList = updatedList?.filter((item) =>
        categoryCheckedRun.includes(item.subCategoryName)
      );
    }

    // Price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList?.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    // Gender Filter
    const genderChecked = gender
      .filter((item) => item.checked)
      .map((item) => item.name);

    if (genderChecked.length) {
      updatedList = updatedList.filter((item) =>
        genderChecked.includes(item.genderName)
      );
    }

    // Colors Filter
    const colorsChecked = colors
      ?.filter((item) => item.checked)
      .map((item) => item.label);
    console.log(colorsChecked);
    if (colorsChecked?.length) {
      updatedList = updatedList.filter((item) =>
        colorsChecked.includes(item.colorName)
      );

      // updatedList = updatedList?.filter((item) => {
      //   const productColors = item.colors?.map((color) => color.label);

      //   return (
      //     colorsChecked.length ===
      //     colorsChecked.filter((color) => productColors?.includes(color)).length
      //   );
      // });
    }

    // Sizes Filter
    const sizesChecked = sizes
      ?.filter((item) => item.checked)
      .map((item) => item.label);

    if (sizesChecked?.length) {
      updatedList = updatedList?.filter((item) => {
        const productSizes = item.product_variations[1].prod_var_options.map(
          (size) => size.optionName
        );
        console.log(productSizes);
        return (
          sizesChecked?.length ===
          sizesChecked?.filter((size) => productSizes.includes(size)).length
        );
      });
    }

    // Brands Filter
    const brandsChecked = brands
      ?.filter((item) => item.checked)
      .map((item) => item.label);

    if (brandsChecked?.length) {
      updatedList = updatedList?.filter((item) =>
        brandsChecked.includes(item.brandName)
      );
    }

    // Sorting
    function sortByPrice(ascending) {
      return function (a, b) {
        // equal items sort equally
        if (a.price === b.price) {
          return 0;
        }
        // if we're ascending, lowest sorts first
        else if (ascending) {
          return a.price < b.price ? -1 : 1;
        }
        // if descending, highest sorts first
        return a.price < b.price ? 1 : -1;
      };
    }

    function sortDefault(a, b) {
      if (b.id === a.id) {
        return 0;
      } else {
        return b.id > a.id ? -1 : 1;
      }
    }
    console.log(sortingOptions);
    if (sortingOptions[0].checked === true) {
      updatedList = updatedList?.sort(sortByPrice(true));
    }

    if (sortingOptions[1].checked === true) {
      updatedList = updatedList?.sort(sortByPrice(false));
    }

    // if (sortingOptions[2].checked === true) {
    //   updatedList = updatedList?.filter(
    //     (item) => item.sale !== null && item.sale !== "Новинка"
    //   );
    // }

    // if (sortingOptions[3].checked === true) {
    //   updatedList = updatedList?.filter((item) => item.sale === "Новинка");
    // }

    if (sortingOptions[4].checked === true) {
      updatedList = updatedList?.sort(sortDefault);
    }

    const updatedSelectedList = filterItems?.map((item) =>
      item?.filter((item) => item.checked === true)
    );
    setSelectedFilters(updatedSelectedList);

    dispatch(setProducts(updatedList));

    !updatedList?.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    if (state.filtersLoad && state.productsLoad) {
      applyFilters();
    }
    // dispatch(getProductsByFilter({}));
  }, [
    categoryAccessories,
    categoryEquipment,
    categoryRun,
    categoryJackets,
    categoryVests,
    categoryPants,
    categoryTShirts,
    categoryShirts,
    categoryShorts,
    categoryHoodiesSweaters,
    categoryShoes,
    selectedPrice,
    gender,
    colors,
    sizes,
    brands,
    sortingOptions,
    state.filtersLoad,
    state.productsLoad,
  ]);

  const handleClearFilter = () => {
    const jacketsList = categoryJackets;
    const changeJackets = jacketsList?.map((item) =>
      item.checked === true ? { ...item, checked: !item.checked } : item
    );
    setCategoryJackets(changeJackets);

    const vestsList = categoryVests;
    const changeVests = vestsList.map((item) =>
      item.checked === true ? { ...item, checked: !item.checked } : item
    );
    setCategoryVests(changeVests);

    const pantsList = categoryPants;
    const changePants = pantsList.map((item) =>
      item.checked === true ? { ...item, checked: !item.checked } : item
    );
    setCategoryPants(changePants);

    const tshirtsList = categoryTShirts;
    const changeTshirts = tshirtsList.map((item) =>
      item.checked === true ? { ...item, checked: !item.checked } : item
    );
    setCategoryTShirts(changeTshirts);

    const shirtsList = categoryShirts;
    const changeShirts = shirtsList.map((item) =>
      item.checked === true ? { ...item, checked: !item.checked } : item
    );
    setCategoryShirts(changeShirts);

    const shortsList = categoryShorts;
    const changeShorts = shortsList.map((item) =>
      item.checked === true ? { ...item, checked: !item.checked } : item
    );
    setCategoryShorts(changeShorts);

    const hoodiesSweatersList = categoryHoodiesSweaters;
    const changeHoodiesSweaters = hoodiesSweatersList.map((item) =>
      item.checked === true ? { ...item, checked: !item.checked } : item
    );
    setCategoryHoodiesSweaters(changeHoodiesSweaters);

    const shoesList = categoryShoes;
    const changeShoes = shoesList.map((item) =>
      item.checked === true ? { ...item, checked: !item.checked } : item
    );
    setCategoryShoes(changeShoes);

    const accessoriesList = categoryAccessories;
    const changeAccessories = accessoriesList.map((item) =>
      item.checked === true ? { ...item, checked: !item.checked } : item
    );
    setCategoryAccessories(changeAccessories);

    const equipmentList = categoryEquipment;
    const changeEquipment = equipmentList.map((item) =>
      item.checked === true ? { ...item, checked: !item.checked } : item
    );
    setCategoryEquipment(changeEquipment);

    const runList = categoryRun;
    const changeRun = runList.map((item) =>
      item.checked === true ? { ...item, checked: !item.checked } : item
    );
    setCategoryRun(changeRun);

    const changePrice = [100, 1000000];
    setSelectedPrice(changePrice);

    const genderList = gender;
    const changeGender = genderList.map((item) =>
      item.checked === true ? { ...item, checked: !item.checked } : item
    );
    setGender(changeGender);

    const colorsList = colors;
    const changeColors = colorsList.map((item) =>
      item.checked === true ? { ...item, checked: !item.checked } : item
    );
    setColors(changeColors);

    const sizesList = sizes;
    const changeSizes = sizesList.map((item) =>
      item.checked === true ? { ...item, checked: !item.checked } : item
    );
    setSizes(changeSizes);

    const brandsList = brands;
    const changeBrands = brandsList.map((item) =>
      item.checked === true ? { ...item, checked: !item.checked } : item
    );
    setBrands(changeBrands);

    const sortingList = sortingOptions;
    const changeSorting = sortingList.map((item) =>
      item.checked === true ? { ...item, checked: !item.checked } : item
    );
    setSortingOptions(changeSorting);
  };

  const [isActive1, setActive1] = useState("false");
  const [isActive2, setActive2] = useState("false");
  const [count, setCount] = useState(0);

  const handleToggleFilter = () => {
    setActive1(!isActive1);
    setCount(1);
  };

  const handleToggleSorting = () => {
    setActive2(!isActive2);
  };

  const selectedFiltersNumber = selectedFilters?.filter(
    (item) => item?.length !== 0
  ).length;

  return (
    <Wrapper>
      <div
        className={
          isActive1 ? "section-container" : "section-container dark-backgrounds"
        }
        onClick={isActive1 ? null : handleToggleFilter}
      >
        <p className="section-hierarchy">
          {"Главная > "}{" "}
          {index === 8 || index === 9 || index === 10 ? "" : "Одежда > "}{" "}
          {title}
        </p>
        <div className="section-header">
          <h1 className="title section-title">{title}</h1>
          <div className="selected-filters mobile">
            {selectedFilters?.map((item) =>
              item?.map((item) => (
                <SavedFilter
                  item={item}
                  key={item.id}
                  deleteFilter={handleDeleteSelectedFilters}
                />
              ))
            )}
            {selectedFiltersNumber === 0 ? null : (
              <p className="filter-canceler mobile" onClick={handleClearFilter}>
                Сбросить все фильтры
              </p>
            )}
          </div>
        </div>

        <div className="filter-buttons">
          <div className="filter-btn" onClick={handleToggleSorting}>
            <p>Сортировка</p>
            <img src={sort} alt="sorting icon" />
          </div>
          <div className="filter-btn" onClick={handleToggleFilter}>
            <p>Фильтр</p>
            <img src={filter} alt="filter icon" />
          </div>
        </div>

        <div className="products-data">
          <div className="selected-filters laptop">
            {selectedFilters.map((item) =>
              item?.map((item) => (
                <SavedFilter
                  item={item}
                  key={item.id}
                  deleteFilter={handleDeleteSelectedFilters}
                />
              ))
            )}
          </div>

          <p className="section-text">
            Найдено {state.products?.length}{" "}
            {state.products?.length % 10 == 1 &&
            state.products.length % 100 !== 11 ? (
              <span>товар</span>
            ) : state.products?.length % 100 !== 11 &&
              state.products?.length % 100 !== 12 &&
              state.products?.length % 100 !== 13 &&
              state.products?.length % 100 !== 14 &&
              (state.products?.length % 10 == 2 ||
                state.products?.length % 10 == 3 ||
                state.products?.length % 10 == 4) ? (
              <span>товара</span>
            ) : (
              <span>товаров</span>
            )}
          </p>
        </div>

        <div className="products-section">
          {
            <FilterBox
              count={count}
              activeFilter={isActive1}
              activeSorting={isActive2}
              clearFilter={handleClearFilter}
              index={index}
              category1={categoryJackets}
              changeCategory1={handleChangeCheckedJackets}
              category2={categoryVests}
              changeCategory2={handleChangeCheckedVests}
              category3={categoryPants}
              changeCategory3={handleChangeCheckedPants}
              category4={categoryTShirts}
              changeCategory4={handleChangeCheckedTShirts}
              category5={categoryShirts}
              changeCategory5={handleChangeCheckedShirts}
              category6={categoryShorts}
              changeCategory6={handleChangeCheckedShorts}
              category7={categoryHoodiesSweaters}
              changeCategory7={handleChangeCheckedHoodiesSweaters}
              category8={categoryShoes}
              changeCategory8={handleChangeCheckedShoes}
              category9={categoryAccessories}
              changeCategory9={handleChangeCheckedAccessories}
              category10={categoryEquipment}
              changeCategory10={handleChangeCheckedEquipment}
              category11={categoryRun}
              changeCategory11={handleChangeCheckedRun}
              selectedPrice={selectedPrice}
              changePrice={handleChangePrice}
              gender={gender}
              changeGender={handleChangeCheckedGender}
              colors={colors}
              changeColors={handleChangeCheckedColors}
              sizes={sizes}
              changeSizes={handleChangeCheckedSizes}
              brands={brands}
              changeBrands={handleChangeCheckedBrands}
              list={state.products}
              changeSorting={handleChangeCheckedSorting}
              sorting={sortingOptions}
            />
          }

          {state.products?.length === 0 ? (
            <Error
              title={"НИЧЕГО НЕ НАЙДЕНО"}
              text={"Попробуйте сбросить фильтры или обновить страницу"}
            />
          ) : (
            <div className="products-content">
              {state.products?.map((item) => {
                return (
                  <div className="product">
                    <ProductBox
                      key={item.id}
                      product={item}
                      setModalActive={setModalActive}
                      setModalId={setModalId}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div className="mobile">
        <FilterBox
          count={count}
          activeFilter={isActive1}
          activeSorting={isActive2}
          clearFilter={handleClearFilter}
          index={index}
          category1={categoryJackets}
          changeCategory1={handleChangeCheckedJackets}
          category2={categoryVests}
          changeCategory2={handleChangeCheckedVests}
          category3={categoryPants}
          changeCategory3={handleChangeCheckedPants}
          category4={categoryTShirts}
          changeCategory4={handleChangeCheckedTShirts}
          category5={categoryShirts}
          changeCategory5={handleChangeCheckedShirts}
          category6={categoryShorts}
          changeCategory6={handleChangeCheckedShorts}
          category7={categoryHoodiesSweaters}
          changeCategory7={handleChangeCheckedHoodiesSweaters}
          category8={categoryShoes}
          changeCategory8={handleChangeCheckedShoes}
          category9={categoryAccessories}
          changeCategory9={handleChangeCheckedAccessories}
          category10={categoryEquipment}
          changeCategory10={handleChangeCheckedEquipment}
          category11={categoryRun}
          changeCategory11={handleChangeCheckedRun}
          selectedPrice={selectedPrice}
          changePrice={handleChangePrice}
          gender={gender}
          changeGender={handleChangeCheckedGender}
          colors={colors}
          changeColors={handleChangeCheckedColors}
          sizes={sizes}
          changeSizes={handleChangeCheckedSizes}
          brands={brands}
          changeBrands={handleChangeCheckedBrands}
          list={state.products}
          changeSorting={handleChangeCheckedSorting}
          sorting={sortingOptions}
        />
      </div>
      {modalActive && (
        <PopUp active={modalActive} setActive={setModalActive} id={modalId} />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  .section-container {
    padding: 1.875rem 13.125vw 9.375rem;
  }

  .section-hierarchy {
    font-size: 16px;
    font-weight: 500;
    color: var(--clr-primary-4);
  }

  .section-title {
    font-size: 80px;
    font-weight: 500;
    text-transform: uppercase;
  }

  .filter-buttons {
    display: none;
  }

  .products-data {
    display: flex;
    justify-content: space-between;
    margin: 0.625rem 0 3.125rem;
  }

  .selected-filters {
    display: flex;
    width: auto;
    margin-left: 18.75vw;
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-auto-rows: max-content;
  }

  .section-text {
    width: auto;
    font-size: 18px;
    font-weight: 400;
    text-align: right;
  }

  .products-section {
    display: flex;
    justify-content: space-between;
  }

  .products-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: max-content;
  }

  .product {
    margin: 0 0 1.25vw 1.25vw;
  }

  .box-content {
    border: none;
  }

  .product:hover .box-content {
    border: 1px solid var(--clr-primary-3);
  }

  .product-image {
    margin: 0 1.5625vw;
    margin-bottom: -6px;
  }

  .product-button {
    opacity: 0;
  }

  .product:hover .product-btns {
    display: flex;
  }

  .product:hover .product-button {
    opacity: 1;
    width: 8.6875vw;
    display: block;
  }

  .green-btn:hover {
    background: var(--clr-primary-2);
  }

  .mobile {
    display: none;
  }

  @media (max-width: 1500px) {
    .section-hierarchy {
      font-size: 15px;
    }

    .section-title {
      font-size: 75px;
    }

    .section-text {
      font-size: 16.7px;
    }
  }

  @media (max-width: 1400px) {
    .section-hierarchy {
      font-size: 14px;
    }

    .section-title {
      font-size: 70px;
    }

    .section-text {
      font-size: 16px;
    }
  }

  @media (max-width: 1300px) {
    .section-hierarchy {
      font-size: 13px;
    }

    .section-title {
      font-size: 64px;
    }

    .section-text {
      font-size: 14px;
    }
  }

  @media (max-width: 1200px) {
    .section-title {
      font-size: 60px;
    }

    .section-text {
      font-size: 14.2px;
    }
  }

  @media (max-width: 1100px) {
    .section-hierarchy {
      font-size: 12.5px;
    }

    .section-container {
      padding: 1.875rem 9vw 9.375rem;
    }

    .selected-filters {
      grid-template-columns: repeat(3, auto);
      margin-left: 27.25vw;
    }

    .section-text {
      font-size: 13.5px;
    }
  }

  @media (max-width: 1024px) {
    .section-hierarchy {
      font-size: 12px;
    }

    .section-title {
      font-size: 58px;
    }

    .section-text {
      font-size: 13px;
    }
  }

  @media (max-width: 992px) {
    .section-hierarchy {
      font-size: 11px;
    }

    .section-title {
      font-size: 55px;
    }

    .products-data {
      margin: 0.625rem 0 2.5rem;
    }

    .section-text {
      font-size: 12px;
    }
  }

  @media (max-width: 920px) {
    .section-title {
      font-size: 52px;
    }

    .section-text {
      font-size: 11.5px;
    }
  }

  @media (max-width: 870px) {
    .product:hover .product-button {
      display: none;
    }
    .section-hierarchy {
      font-size: 10px;
    }

    .section-title {
      font-size: 48px;
    }

    .section-text {
      font-size: 10.5px;
    }
  }

  @media (max-width: 810px) {
    .section-title {
      font-size: 46px;
    }

    .section-text {
      font-size: 9.5px;
    }
  }

  @media (max-width: 768px) {
    .section-hierarchy {
      font-size: 9px;
    }

    .section-title {
      font-size: 44px;
    }

    .products-data {
      margin: 0.3125rem 0 1.875rem;
    }
  }

  @media (max-width: 740px) {
    .selected-filters {
      margin-left: 30vw;
    }

    .section-text {
      font-size: 9px;
    }

    .products-section {
      display: flex;
    }

    .product {
      margin: 0 0 1vw 1vw;
    }
  }

  @media (max-width: 730px) {
    .section-title {
      font-size: 40px;
    }

    .products-section {
      display: flex;
      justify-content: start;
    }

    .products-content {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 675px) {
    .section-title {
      font-size: 38px;
    }
  }

  @media (max-width: 650px) {
    .section-title {
      font-size: 35px;
    }

    .section-text {
      font-size: 11px;
    }

    .selected-filters {
      grid-template-columns: repeat(2, auto);
    }
  }

  @media (max-width: 590px) {
    .section-title {
      font-size: 32px;
    }

    .section-text {
      font-size: 10px;
    }

    .product {
      margin: 0 0 2.5vw 2.8125vw;
    }
  }

  @media (max-width: 550px) {
    .section-title {
      font-size: 30px;
    }

    .section-text {
      font-size: 9.5px;
    }

    .product {
      margin: 0 0 1.6vw 1.6vw;
    }
  }

  @media (max-width: 500px) {
    .section-title {
      font-size: 26px;
    }

    .selected-filters {
      margin-left: 27vw;
    }

    .product {
      margin: 0 0 1.25vw 1.25vw;
    }
  }

  @media (max-width: 480px) {
    .laptop,
    .product:hover .product-button {
      display: none;
    }

    .mobile {
      display: block;
    }

    .section-container {
      position: relative;
      padding: 0 0 9.375rem;
      background-color: var(--clr-primary-6);
    }

    .dark-backgrounds:after {
      content: "";
      position: absolute;
      top: -10%;
      left: 0;
      bottom: -34%;
      right: 0;
      background: #00000050;
      z-index: 3;
    }

    .section-hierarchy {
      display: none;
    }

    .section-header {
      position: relative;
      background-color: var(--clr-white);
      padding: 1.25rem 5.5556vw;
    }

    .section-header:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      left: 0;
      bottom: 0;
      background: var(--clr-primary-6);
    }

    .section-title {
      font-size: 28px;
      line-height: 3.125rem;
    }

    .section-header .selected-filters {
      display: grid;
      grid-template-columns: repeat(2, auto);
      margin: 0;
    }

    .filter-canceler {
      width: max-content;
      font-size: 16px;
      font-weight: 400;
      text-decoration: underline;
    }

    .products-section .filter,
    .products-section .sorting {
      display: none;
    }

    .filter-buttons {
      display: flex;
      justify-content: space-between;
      padding: 0.625rem 5.5556vw 1.25rem;
      background-color: var(--clr-white);
    }

    .filter-btn {
      display: flex;
    }

    .filter-btn p {
      font-size: 16px;
      font-weight: 400;
      text-decoration: underline;
      margin-right: 5px;
    }

    .products-data {
      margin: 0.625rem 5.5556vw 1.25rem;
    }

    .section-text {
      width: 100%;
      font-size: 14px;
      font-weight: 400;
      text-align: right;
    }

    .products-section {
      flex-direction: column;
      margin: 0 4.167vw;
    }

    .products-content {
      grid-template-columns: repeat(2, 1fr);
    }

    .product {
      margin: 0 1.389vw 2.778vw;
    }
  }
`;

export default ProductPage;
