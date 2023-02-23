import React from "react";
import styled from "styled-components";
import CompanyImages from "./CompanyImages";

function About() {
  return (
    <Wrapper>
      <h3 className="section-title about">О компании</h3>

      <div className="about-container">
        <div className="image-box">
          <CompanyImages />
        </div>

        <div className="text-box">
          <h3 className="about-title title">
            В нашем магазине Вы найдете всё необходимое для туризма, кемпинга и
            путешествий
          </h3>

          <div className="home-main">
            <p className="home-text text1">
              YAQ - это магазин спецодежды и снаряжения для альпинизма.
            </p>
            <br />
            <br />
            <p className="home-text text2">
              В нашем магазине Вы найдете целые коллекции первоклассной
              спецодежды, обуви и снаряжения от известных брендов для всех нужд
              и возрастных категорий, а также получите профессиональную
              консультацию по всем интересующим вопросам.
            </p>
          </div>

          <div className="home-bottom">
            <p className="home-footer">Открыты ежедневно с 10:00 до 20:00</p>
            <p className="home-footer">
              г. Астана, Проспект Кабанбай батыра, 49а
            </p>
            <p className="home-footer">Доставка по всему Казахстану</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  .section-title {
    display: none;
  }

  .about-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 31.25vw;
    margin: 5.625% 13.125% 0.625%;
  }

  .image-box {
    position: relative;
    width: 30vw;
    height: 100%;
  }

  .text-box {
    width: 36.25vw;
    height: 100%;
  }

  .about-title {
    position: relative;
    font-size: 30px;
    font-weight: 500;
    line-height: 40px;
    padding-bottom: 1.25vw;
  }

  .about-title:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--clr-primary-1);
  }

  .home-main {
    width: 100%;
    margin: 1.875vw 0 3.75vw;
  }

  .home-text {
    font-size: 18px;
    font-weight: 300;
    line-height: 30px;
  }

  .home-bottom {
    display: flex;
    justify-content: space-between;
  }

  .home-footer {
    position: relative;
    width: 31.034%;
    font-size: 16px;
    font-weight: 300;
    line-height: 30px;
    padding-top: 1.25vw;
  }

  .home-footer:before {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 2px;
    background: var(--clr-primary-1);
  }

  @media (max-width: 1595px) {
    .about-title {
      font-size: 28px;
    }
  }

  @media (max-width: 1540px) {
    .text-box {
      width: 37.5vw;
    }

    .home-main {
      margin-bottom: 3.25vw;
    }

    .home-footer {
      line-height: 25px;
      padding-top: 1vw;
    }
  }

  @media (max-width: 1440px) {
    .text-box {
      width: 37.25vw;
    }

    .about-title {
      font-size: 28px;
      line-height: 36px;
    }

    .home-main {
      margin: 1.25vw 0 2.75vw;
    }

    .home-text {
      font-size: 16px;
      line-height: 25px;
    }

    br {
      content: "";
      margin: 5%;
      display: block;
      font-size: 50%;
    }

    .home-footer {
      font-size: 14.5px;
      line-height: 23px;
    }
  }

  @media (max-width: 1255px) {
    .about-title {
      font-size: 26px;
      line-height: 32px;
    }

    .home-main {
      margin-bottom: 2.75vw;
    }

    .home-text {
      font-size: 15px;
      line-height: 23px;
    }

    br {
      margin: 4%;
    }

    .home-footer {
      font-size: 14px;
      line-height: 22px;
    }
  }

  @media (max-width: 1100px) {
    .about-container {
      height: 37.5vw;
      margin: 5.625% 9% 0.625%;
    }

    .image-box {
      width: 35vw;
    }

    .about-title {
      font-size: 24px;
      line-height: 30px;
    }

    .home-footer {
      font-size: 13px;
      line-height: 20px;
    }
  }

  @media (max-width: 992px) {
    .about-title {
      font-size: 22px;
      line-height: 27px;
    }

    .home-text {
      font-size: 14px;
      line-height: 20px;
    }

    .home-footer {
      font-size: 11.5px;
      line-height: 18px;
    }
  }

  @media (max-width: 882px) {
    .text-box {
      width: 40.25vw;
    }
  }

  @media (max-width: 826px) {
    .about-title {
      font-size: 20px;
      line-height: 22px;
    }

    .home-text {
      font-size: 13px;
      line-height: 18px;
    }

    .home-footer {
      font-size: 10.5px;
      line-height: 16px;
    }
  }

  @media (max-width: 768px) {
    .about-container {
      height: 34vw;
    }

    .image-box {
      width: 32vw;
    }

    .text-box {
      width: 44.25vw;
    }

    .about-title {
      font-size: 18px;
      line-height: 20px;
    }

    .home-text {
      font-size: 12px;
      line-height: 16px;
    }

    .home-footer {
      font-size: 9px;
      line-height: 12px;
    }
  }

  @media (max-width: 722px) {
    .about-container {
      height: 38vw;
    }

    .image-box {
      width: 33vw;
    }

    .home-main {
      margin: 0.75vw 0 2.25vw;
    }
  }

  @media (max-width: 640px) {
    .about-title {
      font-size: 16px;
      line-height: 20px;
    }

    .home-text {
      font-size: 11px;
      line-height: 15px;
    }
  }

  @media (max-width: 600px) {
    .about-title {
      font-size: 14px;
      line-height: 17px;
    }

    .home-text {
      font-size: 10px;
      line-height: 12px;
    }

    br {
      margin: 3%;
    }

    .home-footer {
      font-size: 7.5px;
      line-height: 10px;
    }
  }

  @media (max-width: 500px) {
    .home-text {
      line-height: 11px;
    }

    .home-footer {
      font-size: 7px;
      line-height: 9px;
    }
  }

  @media (max-width: 480px) {
    .about-container {
      height: 100%;
      margin: 5.556vw 5.556vw 8.333vw;
    }

    .image-box,
    .about-title,
    .home-bottom,
    .text2 {
      display: none;
    }

    .text-box {
      width: 100%;
    }

    .home-main {
      margin: 0;
    }

    .home-text {
      position: relative;
      text-align: center;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      padding-bottom: 2.778vw;
    }

    .home-text:before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 37.5%;
      width: 25%;
      height: 2px;
      background: var(--clr-primary-1);
    }
  }
`;

export default About;
