import React from "react";
import Slider from "react-slick";
import brands from "../data/brand_data";

function ImageCarousel({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
  };

  const renderImages =
    images?.length &&
    images?.map((image) => {
      return (
        <div>
          <img
            src={image.label}
            alt="product image"
            className=" button product-image"
          />
        </div>
      );
    });

  console.log(renderImages);
  return <Slider {...settings}>{renderImages}</Slider>;
}

export default ImageCarousel;
