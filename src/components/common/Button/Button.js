import cn from "classnames";
import {Link} from "react-router-dom";

import s from "./Button.module.css";

const Button = ({
  type = "button",
  href,
  className,
  theme = 1,
  loading,
  reverse,
  disable,
  primary,
  large,
  withBorder,
  highlight,
  onClick = () => false,
  onMouseOver = () => false,
  icon,
  iconClassName,
  title,
  titleClassName,
  link,
  defaultColor,
  titleType = "SBodyM",
}) => {
  const Container = { link: "a", a: "a", button: "button" }[type === "link" && !href ? "a" : type];
  const themeClass = `-theme-${theme}`;
  const _render = () => {
    return (
      <Container
        className={cn(s.container,"justify-center", className, {
          [s.default]: primary || withBorder || highlight,
          [s.primary]: primary,
          [s.withBorder]: withBorder,
          [s.highlight]: highlight,
          [s[themeClass]]: themeClass,
          [s.large]: large,
          [s.reverse]: reverse,
          [s.disable]: disable,
          [s.loading]: loading,
          [s.link]: link,
        })}
        onClick={(e) => { if (disable || loading) { e.preventDefault(); return; } onClick(e); }}
        onMouseOver={(e) => { if (disable || loading) { e.preventDefault(); return; } onMouseOver(e); }}
        href={href}>
        {icon && (<i className={cn(`icon-${icon}`, iconClassName)} style={{ color: defaultColor }} />)}
        {icon && title && <span className={s.space}></span>}
        {title && (<span className={cn(titleType, s.title, titleClassName)} style={{ color: defaultColor }} >
        {title}
        </span>
        )}
      </Container>
    );
  };

  return type === "link" && href ? (
    <Link href={href}>{_render()}</Link>
  ) : (
    _render()
  );
};

export { Button };
