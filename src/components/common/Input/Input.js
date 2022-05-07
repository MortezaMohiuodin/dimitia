import cn from "classnames";

import s from "./Input.module.css";

function Input({title}) {
  return (
    <div className={s.subscribe_component}>
      <h2 className={cn(s.title, "header2")}> {title} </h2>
      <form>
        <input
          className={s.input}
          type="text"
          placeholder="آدرس ایمیل خود را وارد کنید"
        />
        <button className={s.btn} type="submit">
          اشتراک
        </button>
      </form>
    </div>
  );
}

export { Input };
