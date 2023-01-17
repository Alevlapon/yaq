import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product_card from "../../../data/product_data";
import ProductBox from "./ProductBox";
import pageLeft from "../assets/page-left.svg";
import pageRight from "../assets/page-right.svg";
import { fetchProductsBySale } from "../../../http/catalogAPI";

function Products() {
  const [products, setProducts] = useState([]);
  const getSales = async () => {
    const fetchProd = await fetchProductsBySale();
    setProducts(fetchProd);
  };
  useEffect(() => {
    getSales();
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <h3 className="section-title title">Лучшие предложения</h3>
      <Slider {...settings}>
        {products.map((item) => {
          return (
            <div className="box-container">
              <ProductBox key={item.id} product={item} />
            </div>
          );
        })}
      </Slider>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  .section-title {
    width: max-content;
    font-size: 30px;
    font-weight: 500;
    line-height: 3.125rem;
    margin-bottom: 1.875rem;
  }

  .box-container {
    margin-right: 1.25vw;
  }

  .slick-prev {
    left: 0%;
    z-index: 1;
    width: 0;
  }

  .slick-next {
    right: 0%;
    width: 0;
  }

  .slick-prev:before,
  .slick-next:before {
    position: absolute;
  }

  .slick-prev:before {
    content: "";
    background-image: url(${pageLeft});
    background-size: 26px 40px;
    width: 26px;
    height: 40px;
    margin-left: -50px;
  }

  .slick-next:before {
    content: "";
    background-image: url(${pageRight});
    background-size: 26px 40px;
    width: 26px;
    height: 40px;
    margin-left: 20px;
  }

  @media (max-width: 1024px) {
    .section-title {
      position: relative;
      font-size: 22px;
      margin-bottom: 1.875rem;
      padding-bottom: 4px;
    }

    .section-title:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 35%;
      height: 2px;
      background: var(--clr-primary-1);
    }

    .slick-prev:before,
    .slick-next:before {
      display: none;
    }
  }

  @media (max-width: 480px) {
    .box-container {
      margin-right: 0.625rem;
    }
  }
`;

export default Products;
