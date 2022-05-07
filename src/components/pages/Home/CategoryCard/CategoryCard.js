import cn from "classnames";
import { Link } from "react-router-dom";

import s from "./CategoryCard.module.css";

function CategoryCard({ key, icon, title }) {
  return (
    <div key={key} className={s.cartWrapper}>
      <div className={cn(s.iconCategory , "justify-center")}>
        <span className={cn(s.icon, icon)}></span>
      </div>
      <div className={s.titleCategory}>
        <Link to="/" className={s.title}>
          {title}
        </Link>
      </div>
    </div>
  );
}

export { CategoryCard };
