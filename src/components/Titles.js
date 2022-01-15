import React from "react";
import Titles from "./Titles.module.scss";
import Slider from "./Slider";
import "bootstrap/dist/css/bootstrap.min.css";
import "./blog.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Title = () => {
  return (
    <div>
      <div className={Titles.container}>
        <div className={Titles.container__content}>
          <h1 className={Titles.container__content__title}>
            Title of a longer featured blog post
          </h1>
          <p className={Titles.container__content__body}>
            Multiple lines of text that form the lede, informing new readers
            quickly and efficiently about what’s most interesting in this post’s
            contents.
          </p>
          <p>
            <a href="/#">Continue reading...</a>
          </p>
        </div>
      </div>
      <div className="container container_padding">
        <Slider></Slider>
      </div>
    </div>
  );
};

export default Title;
