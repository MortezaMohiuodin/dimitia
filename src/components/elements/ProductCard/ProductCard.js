import cn from "classnames";
import { Link } from "react-router-dom";

import s from "./ProductCard.module.css";
import { StarRatingIcon } from "../../common";
import { PRODUCT_CONST } from "../../../constants";

function ProductCart({ image1, image2, alt, id, title, price1, price2 , className }) {
  return (
    <div key={id} className={cn(s.productCart_component , className)}>
      <div className={s.productsThumb}>
        <div className={s.productThumbHover}>
          <div className={s.productLink}>
            <img src={image1} alt={alt} className={s.productImage1} />
            <img src={image2} alt={alt} className={s.productImage2} />
          </div>
        </div>
        <div className={s.productOption}>
          {PRODUCT_CONST.productIcon.map((item) => (
            <Link key={item.id} to="/product" className={cn(s.btnSearch, s.icon)}>
              <span className={cn(s.iconHover, item.icon)}></span>
            </Link>
          ))}
        </div>
      </div>
      <div className={s.productsContent}>
        <Link to="/product" className={s.titleLink}>
          <StarRatingIcon />
          <h3 to="/product" className={cn(s.productTitle, "header3")}>{title}</h3>
        </Link>
        <span className={cn(s.productPrice ,"justify-end")}>
          <span className={s.offPrice}>{price2}</span>
          <span className={s.PriceAmount}>{price1}</span>
        </span>
      </div>
    </div>
  );
}

export { ProductCart };
