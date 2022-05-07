import React, { useState, useRef, useEffect } from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import anime from "animejs";

import s from "./Collapse.module.css";

const Collapse = ({
  className,
  theme,
  isOpen,
  title,
  children,
  withPadding,
  textClassName,
  icon,
}) => {
  const state = useRef({ height: 0 }).current;
  const [open, setOpen] = useState(isOpen);
  const [initial, setInitial] = useState(true);
  const contentWrapper = useRef(null);
  const content = useRef(null);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);
  
  const handleToggle = () => {
    if (initial) {
      setInitial(false);
      contentWrapper.current.style.cssText = "position:absolute";
      state.height = contentWrapper.current.offsetHeight;
    }
    setOpen(!open);
    anime({
      targets: content.current,
      duration: 400,
      easing: "easeOutQuart",
      height: open ? [state.height + "px", 0 + "px"] : state.height,
    });
  };
  const themeClass = `-theme-${theme}`;
  return (
    <section className={cn(s.collapse_component, className, {
        [s._open]: open,
        [s._withPadding]: withPadding,
        [s[themeClass]]: themeClass,
      })}>
        <div className={cn(s.titleWrapper , "flex-row")}>
          <h3 className={s.titleFilter}>{title}</h3>
        </div>
      <div className={s.collapseContent} ref={content} style={{ height: initial && !open ? "0px" : "auto", }}>
        <div className={cn("SBodyR", s.collapseContent_wrapper, textClassName)} ref={contentWrapper} >
          {children}
        </div>
      </div>
    </section>
  );
};

Collapse.propTypes = {
  isOpen: PropTypes.bool,
  className: PropTypes.string,
  title: PropTypes.string,
  withPadding: PropTypes.bool,
};

Collapse.defaultProps = {
  isOpen: true,
  withPadding: true,
};

export { Collapse };
