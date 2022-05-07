import cn from "classnames";
import { Link } from "react-router-dom";

import s from "./HomeMenu.module.css";
import { HEADER_CONST } from "../../../../constants";

function HomeMenu({ showIcon }) {
  return (
    <div className={s.menu_component}>
      <span
        className={cn(s.iconMenu, s.icon, "icon-cancel", "icon")}
        onClick={showIcon}
      />
      <div className={s.box}>
        {HEADER_CONST.menuItem.map((item) => (
          <Link to={item.url} className={cn(s.link, s.item, s.border, "link")}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export { HomeMenu };
