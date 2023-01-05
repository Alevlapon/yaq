import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { fetchAllColors, fetchAllBrands } from "../../../http/adminAPI";
import {
  createProduct,
  fetchOneProduct,
  createProductVario,
  createProductVariOption,
  createProductProp,
  addColor,
  createBrand,
} from "../../../http/catalogAPI";

function ProductCreate() {
  const [sizePage, setSizePage] = useState(false);
  const [product, setProduct] = useState({});

  const productName = useRef("");
  const productArticul = useRef(null);
  const productPrice = useRef(null);
  const productCat = useRef(null);
  const productSubCat = useRef(null);
  const productColor = useRef(null);
  const productBrand = useRef(null);
  const productGender = useRef(null);
  const productSize = useRef(null);
  const productCount = useRef(null);
  const productDesc = useRef(null);
  const productPropName = useRef(null);
  const productPropValue = useRef(null);
  const newColor = useRef(null);
  const newBrand = useRef(null);

  const [catIndex, selectCatIndex] = useState(0);
  const [colors, setColors] = useState([]);
  const [brands, setBrands] = useState([]);
  const [sale, setSale] = useState(null);

  const state = useSelector(({ categories }) => {
    return {
      categories: categories.items,
    };
  });

  const selectCat = (index) => {
    selectCatIndex(index);
  };

  const getColors = async () => {
    const allColors = await fetchAllColors();
    setColors(allColors);
  };

  const getBrands = async () => {
    const allBrands = await fetchAllBrands();
    setBrands(allBrands);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = await createProduct({
      productName: productName.current.value,
      product_code: productArticul.current.value,
      price: productPrice.current.value,
      categoryId: productCat.current.value,
      subCategoryId: productSubCat.current.value,
      colorId: productColor.current.value,
      brandId: productBrand.current.value,
      genderId: productGender.current.value,
      inSale: sale,
      description: productDesc.current.value,
    });
    if (product) {
      const photoVario = await createProductVario({
        variationName: "photo",
        productId: product.id,
      });
      alert("Товар создан");
      const sizeVario = await createProductVario({
        variationName: "size",
        productId: product.id,
      });
      alert("Товар сохранен");
      product.sizeId = sizeVario.id;
      product.photoId = photoVario.id;
      setProduct(product);
      console.log(product);
      setSizePage(true);
    } else {
      alert("Ошибка");
    }
  };

  const loadPhoto = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const image = await createProductVariOption({
      productVariationId: product.photoId,
      productId: product.id,
      optionName: null,
      image: formData.get("photo"),
    });
    alert("Фото загружено");
    let oneProduct = await fetchOneProduct(product.id);
    oneProduct.sizeId = product.sizeId;
    oneProduct.photoId = product.photoId;
    setProduct(oneProduct);
  };

  const loadSize = async (e) => {
    e.preventDefault();
    const size = await createProductVariOption({
      productVariationId: product.sizeId,
      productId: product.id,
      optionName: productSize.current.value,
      count: productCount.current.value ? productCount.current.value : null,
    });
    console.log(size);
    alert("Размер и количество загружены");
    let oneProduct = await fetchOneProduct(product.id);
    oneProduct.sizeId = product.sizeId;
    oneProduct.photoId = product.photoId;
    setProduct(oneProduct);
    console.log(oneProduct);
  };

  const handleColor = async (e) => {
    e.preventDefault();
    let addedColor = await addColor({ colorName: newColor.current.value });
    if (addedColor) {
      getColors();
      newColor.current.value = "";
      alert("Цвет добавлен, выберите его в списке");
    }
  };

  const handleBrand = async (e) => {
    e.preventDefault();
    let addedBrand = await createBrand({ brandName: newBrand.current.value });
    if (addedBrand) {
      getBrands();
      newBrand.current.value = "";
      alert("Бренд добавлен, выберите его в списке");
    }
  };

  const loadProp = async (e) => {
    e.preventDefault();
    const prop = await createProductProp(product.id, {
      name: productPropName.current.value,
      value: productPropValue.current.value,
    });
    console.log(prop);
    alert("Характеристика добавлена");
    let oneProduct = await fetchOneProduct(product.id);
    oneProduct.sizeId = product.sizeId;
    oneProduct.photoId = product.photoId;
    setProduct(oneProduct);
    console.log(oneProduct);
  };

  useEffect(() => {
    getColors();
    getBrands();
  }, []);

  return (
    <Wrapper>
      {!sizePage ? (
        <>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="form-label">
                <label htmlFor="name">Название товара</label>
              </div>
              <input ref={productName} type="text" name="name" id="name" />
            </div>

            <div className="form-group">
              <div className="form-label">
                <label htmlFor="articul">Артикул</label>
              </div>
              <input
                ref={productArticul}
                type="text"
                name="articul"
                id="articul"
              />
            </div>

            <div className="form-group">
              <div className="form-label">
                <label htmlFor="price">Цена</label>
              </div>
              <input ref={productPrice} type="text" name="price" id="price" />
            </div>

            <div className="form-group">
              <div className="form-label">
                <label htmlFor="cat">Категория</label>
              </div>
              <select
                ref={productCat}
                type="text"
                name="cat"
                id="cat"
                onChange={(e) => {
                  selectCat(e.target.options.selectedIndex);
                }}
              >
                {state.categories.length ? (
                  state.categories.map((el, index) => (
                    <option key={el.id} value={el.id}>
                      {el.categoryName}
                    </option>
                  ))
                ) : (
                  <option value="list">Список</option>
                )}
              </select>
            </div>

            <div className="form-group">
              <div className="form-label">
                <label htmlFor="subcat">Cубкатегория</label>
              </div>
              <select ref={productSubCat} type="text" name="subcat" id="subcat">
                {state.categories.length ? (
                  state.categories[catIndex].subCategories.map((el) => (
                    <option key={el.id} value={el.id}>
                      {el.subCategoryName}
                    </option>
                  ))
                ) : (
                  <option value="list">Список</option>
                )}
              </select>
            </div>

            <div className="form-group">
              <div className="form-label">
                <label htmlFor="color">Цвет</label>
              </div>
              <select ref={productColor} type="text" name="color" id="color">
                {colors.length ? (
                  colors.map((el) => (
                    <option key={el.id} value={el.id}>
                      {el.colorName}
                    </option>
                  ))
                ) : (
                  <option value="list">Список</option>
                )}
              </select>
              <input
                ref={newColor}
                type="text"
                name="new_сolor"
                id="new_color"
                placeholder="Если цвета нет в списке, впишите его здесь"
              />
              <button type="click" className="button" onClick={handleColor}>
                Добавить цвет
              </button>
            </div>

            <div className="form-group">
              <div className="form-label">
                <label htmlFor="brand">Бренд</label>
              </div>
              <select ref={productBrand} type="text" name="brand" id="brand">
                {brands.length ? (
                  brands.map((el) => (
                    <option key={el.id} value={el.id}>
                      {el.brandName}
                    </option>
                  ))
                ) : (
                  <option value="list">Список</option>
                )}
              </select>
              <input
                ref={newBrand}
                type="text"
                name="new_brand"
                id="new_brand"
                placeholder="Если бренда нет в списке, впишите его здесь"
              />
              <button type="click" className="button" onClick={handleBrand}>
                Добавить бренд
              </button>
            </div>

            <div className="form-group">
              <div className="form-label">
                <label htmlFor="gender">Пол</label>
              </div>
              <select ref={productGender} type="text" name="gender" id="gender">
                <option value="1">Мужская</option>
                <option value="2">Женская</option>
                <option value="3">Для детей</option>
              </select>
            </div>

            <div className="form-group">
              <div className="form-label">
                <label htmlFor="sale">Скидка</label>
              </div>
              <input
                type="text"
                name="sale"
                id="sale"
                onChange={(e) => setSale(e.target.value)}
                placeholder="без скидки"
              />
            </div>

            <div className="form-group">
              <div className="form-label">
                <label htmlFor="description">Описание</label>
              </div>
              <input
                ref={productDesc}
                type="text"
                name="description"
                id="description"
                placeholder="описание"
              />
            </div>

            <div className="form-button">
              <button type="submit" className="button">
                Сохранить товар
              </button>
            </div>
          </form>
        </>
      ) : (
        <>
          <div className="title-size">Заполните размеры и фото для:</div>

          <div className="form-group">
            <div className="form-label">
              <label htmlFor="name">
                Название товара:{product.productName}
              </label>
            </div>
          </div>

          <div className="form-group">
            <div className="form-label">
              <label htmlFor="articul">Артикул:{product.product_code}</label>
            </div>
          </div>

          <div className="form-group">
            <div className="form-label">
              <label htmlFor="price">Цена:{product.price}</label>
            </div>
          </div>

          <div className="form-group">
            <div className="form-label">
              <label htmlFor="cat">Категория:{product.categoryName}</label>
            </div>
          </div>

          <div className="form-group">
            <div className="form-label">
              <label htmlFor="subcat">
                Подкатегория:{product.subCategoryName}
              </label>
            </div>
          </div>

          <div className="form-group">
            <div className="form-label">
              <label htmlFor="color">Цвет:{product.colorName}</label>
            </div>
          </div>

          <div className="form-group">
            <div className="form-label">
              <label htmlFor="brand">Бренд:{product.brandName}</label>
            </div>
          </div>

          <div className="form-group">
            <div className="form-label">
              <label htmlFor="gender">Пол:{product.genderName}</label>
            </div>
          </div>

          <div className="form-group">
            <div className="form-label">
              <label htmlFor="sale">Скидка:{product.inSale}%</label>
            </div>
          </div>
          <br></br>

          <form className="form" onSubmit={loadPhoto}>
            <div className="form-group">
              <div className="form-label">
                <label htmlFor="photo">Фото</label>
              </div>
              <input type="file" name="photo" id="photo" accept="image/*" />
              <button type="submit" className="button">
                Загрузить фото
              </button>

              <div className="photo" id="photo-loaded">
                {product?.product_variations?.length ? (
                  product?.product_variations[0]?.prod_var_options.map(
                    (el, index) => (
                      <img
                        key={index}
                        src={process.env.REACT_APP_URL + el.optionImage}
                        alt="product image"
                      />
                    )
                  )
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </form>

          <form className="form" onSubmit={loadSize}>
            <div className="form-group">
              <div className="form-label">
                <label htmlFor="size">Размер и Количество(только цифры)</label>
              </div>
              <input
                ref={productSize}
                type="text"
                name="size"
                id="size"
                placeholder="Размер"
              />
              <br></br>
              <input
                ref={productCount}
                type="text"
                name="count"
                id="count"
                placeholder="Количество"
              />
              <br></br>

              <button type="submit" className="button">
                Заполнить размеры и количество
              </button>

              <div className="size" id="size-loaded">
                {product?.product_variations?.length ? (
                  product?.product_variations[1]?.prod_var_options.map(
                    (el, index) => (
                      <div key={index}>
                        {el.optionName} - {el.count} штук
                      </div>
                    )
                  )
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </form>

          <form className="form" onSubmit={loadProp}>
            <div className="form-group">
              <div className="form-label">
                <label htmlFor="prop">ХАРАКТЕРИСТИКИ</label>
              </div>
              <input
                ref={productPropName}
                type="text"
                name="prop_name"
                id="prop_name"
                placeholder="Название характеристики"
              />
              <br></br>
              <input
                ref={productPropValue}
                type="text"
                name="prop_value"
                id="prop_value"
                placeholder="Значение характеристики"
              />
              <br></br>

              <button type="submit" className="button">
                Добавить характеристику
              </button>

              <div className="props" id="props-loaded">
                {product?.props?.length ? (
                  product?.props?.map((el, index) => (
                    <div key={index}>
                      {el.name} : {el.value}
                    </div>
                  ))
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </form>

          <button
            type="submit"
            className="button new"
            onClick={() => window.location.reload()}
          >
            Создать новый товар
          </button>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 420px;
  margin: 0;
  padding-top: 70px;

  .form {
    margin-bottom: 20px;
  }

  .form-label {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 0.625rem;
  }

  input,
  select,
  .input-placeholder-text {
    width: 66.25vw;
    height: 3.125rem;
    font-size: 16px;
    border: 1px solid var(--clr-primary-4);
    margin-bottom: 1.25rem;
    padding-left: 1.25rem;
  }

  .form-button {
    text-align: center;
  }

  .form-button .button {
    height: 3.125rem;
    width: 23.75vw;
    margin-top: 0.625rem;
  }

  .button {
    width: 200px;
    height: 100%;
    font-size: 22px;
    font-weight: 400;
    color: var(--clr-white);
    background: var(--clr-primary-1);
    border: none;
    margin-bottom: 20px;
  }
  #photo,
  #size,
  #count {
    width: 200px;
    height: 100%;
    font-size: 22px;
    font-weight: 400;
  }
  .title-size {
    margin-bottom: 20px;
    font-size: 20px;
  }
  .photo {
    height: 200px;
    display: flex;
  }
  .button-photo {
    height: 45px;
    margin-bottom: 30px;
  }
  .photo img {
    margin-right: 10px;
  }
  .new {
    margin-left: 500px;
    margin-top: 100px;
  }
`;

export default ProductCreate;
