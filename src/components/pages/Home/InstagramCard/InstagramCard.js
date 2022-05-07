import cn from "classnames";
import { Link } from "react-router-dom";

import s from "./InstagramCard.module.css";

function InstagramCard({ key, image }) {
  return (
    <div key={key} className={s.cartSlider}>
      <Link to="/" className={s.imageInstagram}>
        <img src={image} alt="instagram" className={s.image} />
        <span className={cn(s.icon, "icon-instagram")} />
      </Link>
    </div>
  );
}

export { InstagramCard };
