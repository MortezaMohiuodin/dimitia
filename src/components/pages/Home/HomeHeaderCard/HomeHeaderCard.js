import cn from "classnames";

import s from "./HomeHeaderCard.module.css";

function HomeHeaderCard({ key, image, alt, title, text }) {
  return (
    <div key={key} className={cn(s.imageWrapper, s.sliderWrapper)}>
      <img src={image} alt={alt} className={s.image} />
      <div className={s.slideContent}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

export { HomeHeaderCard };
