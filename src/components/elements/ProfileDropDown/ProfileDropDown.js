import cn from "classnames";
import { Link } from "react-router-dom";

import s from "./ProfileDropDown.module.css";
import { HEADER_CONST } from "../../../constants";

function ProfileDropDown() {
  return (
    <div className={s.profileDropDown_component}>
      {HEADER_CONST.profile.map((item) => (
        <Link to="/" className={cn(s.Link, s.item, item.className)}>
          {item.title}
        </Link>
      ))}
    </div>
  );
}

export { ProfileDropDown };
