import { Link } from "react-router-dom";
import cn from "classnames";

import { PRODUCT_CONST } from "../../../constants";
import s from "./BreadCrumb.module.css";

function BreadCrumb({ data }) {
  return (
    <div className={s.BreadCrumb}>
      {data.map((item) => (
        <Link to="/" className={s.breadCrumbLink} key={item.id} to="/product">
          <span className={s.title}>{item.title}</span>
          <i className={item.icon + " " + s.leftArrow}></i>
        </Link>
      ))}
    </div>
  );
}

export { BreadCrumb };
