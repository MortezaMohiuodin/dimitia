import cn from "classnames";

import s from "./BackToUp.module.css";

function BackToUp() {
  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
 };

  return (
    <div className={s.backToUp}>
      <button className={s.btnScroll} onClick={scrollTop} >
        <i className={cn(s.iconBack, "icon-up-arrow")}></i>
      </button>
    </div>
  )
}

export { BackToUp };
