import React, { useState } from "react";
import cn from "classnames";

import { ShoppingCart, Logo, Search, ProfileDropDown } from "../../../elements";
import { HomeMenu } from "../index";
import s from "./HomeNavBar.module.css";

function HomeNavBar() {
  const [showSearch, setShowSearch] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);

  let menu;
  if (showMenu) {
    menu = <HomeMenu showIcon={() => setShowMenu(!showMenu)} />;
  }

  let cartBasket;
  if (showCart) {
    cartBasket = <ShoppingCart />;
  }

  let dropDown;
  if (showDropDown) {
    dropDown = <ProfileDropDown />;
  }

  let search;
  if (showSearch) {
    search = <Search showIcon={() => setShowSearch(!showSearch)} />;
  }
  return (
    <nav className={cn(s.navBar_component , "justify-between")}>
      <div className={s.nav}>
        <div className={s.megaMenu}>
          <span
            className={cn(s.iconMenu, s.icon, "icon-menu", "icon", "iconNav")}
            onClick={() => setShowMenu(!showMenu)}
          />
          {menu}
        </div>
        <div className={s.cartShopping_component}>
          <span
            className={cn(s.icon, "icon-cart", "icon", "iconNav")}
            onClick={() => setShowCart(!showCart)}
          />
          <span className={s.cartCount}>0</span>
          {cartBasket}
        </div>
        <div className={s.account}>
          <span
            className={cn(s.icon, "icon-account", "icon", "iconNav")}
            onClick={() => setShowDropDown(!showDropDown)}
          />
          {dropDown}
        </div>
        <span
          className={cn(s.icon, "icon-search", "icon", "iconNav")}
          onClick={() => setShowSearch(!showSearch)}
        />
        {search}
      </div>
      <Logo />
    </nav>
  );
}

export { HomeNavBar };
