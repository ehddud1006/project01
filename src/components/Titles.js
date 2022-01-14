import React from "react";
import Titles from "./Titles.module.scss";

const Title = () => {
  return (
    <div className={Titles.container}>
      <div className={Titles.container__content}>
        <h1 className={Titles.container__content__title}>Title of a longer featured blog post</h1>  
        <p className={Titles.container__content__body}>
          Multiple lines of text that form the lede, informing new readers
          quickly and efficiently about what’s most interesting in this post’s
          contents.
        </p>
        <p>
          <a href="/#">
            Continue reading...
          </a>
        </p>
      </div>
    </div>
  );
};

export default Title;