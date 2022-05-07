import cn from "classnames";

import s from "./Search.module.css";

function Search({ showIcon }) {
  return (
    <div className={s.search_component}>
      <div className={s.searchWrapper}>
        <span
          className={cn(s.iconCancel, s.icon, "icon-cancel", "icon")}
          onClick={showIcon}
        />
        <div className={cn(s.wrapper, "container")}>
          <form className={s.form}>
            <input type="text" className={s.input} placeholder="جستجو" />
            <button type="submit" className={s.btn}>
              <span className={cn(s.iconSearch, "icon-search")} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export { Search };
