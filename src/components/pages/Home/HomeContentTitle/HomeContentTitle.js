import cn from "classnames";

import s from "./HomeContentTitle.module.css";
import iconTitle from "../../../../assets/images/icon-title.png";

function HomeContentTitle({ title, className }) {
  return (
    <div className={s.titleTwo_component}>
      <h2 className={cn(s.headerTitle, "header2", "titleBefore", className)}>
        {title}
      </h2>
      <img src={iconTitle} alt="icon" className={s.center}></img>
    </div>
  );
}

export { HomeContentTitle };
