import cn from "classnames";
import { Link } from "react-router-dom";

import s from "./Social.module.css";
import { HOME_CONST } from "../../../constants";

function Social({className}) {
  return (
    <div className={s.social_component}>
      {HOME_CONST.social.map((item) => (
        <Link key={item.id} to="/">
          <span className={cn(s.icon, item.icon , className)}></span>
        </Link>
      ))}
    </div>
  );
}

export { Social };
