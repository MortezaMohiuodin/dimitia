import { useState } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";

import { ShoppingCart, Logo, Search, ProfileDropDown } from "../../elements";
import { DropDown } from "../../common";
import s from "./Header.module.css";
import { HOME_CONST, PRODUCT_CONST } from "../../../constants";
import shipping from "../../../assets/images/free-shipping.svg";

function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [SelectedOption, setSelectedOption] = useState(1);

  const handleChange = (e) => {
    setSelectedOption({ selectedOption }, () =>
      console.log(`Option selected:`, SelectedOption)
    );
  };
  const { selectedOption } = SelectedOption;

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
    <header className={cn(s.header_container)}>
      <div className={cn(s.header_top, "justify-between")}>
        <div className={s.header_dropDown}>
          <div className={s.cartShopping}>
            <i
              className={cn(s.icon, "icon-cart", "icon", "iconNav")}
              onClick={() => setShowCart(!showCart)}
            />
            <span className={s.Count}>0</span>
            {cartBasket}
          </div>
          <Link to="/" className={s.cartShopping}>
            <i className={cn(s.icon, "icon-like", "icon", "iconNav")} />
            <span className={s.Count}>0</span>
          </Link>
          <i className={cn(s.icon, "icon-exchange", "icon", "iconNav")} />
          <div className={s.account}>
            <i
              className={cn(s.icon, "icon-account", "icon", "iconNav")}
              onClick={() => setShowDropDown(!showDropDown)}
            />
            {dropDown}
          </div>
        </div>
        <div className={cn(s.header_search, "justify-center")}>
          <form className={s.searchForm}>
            <DropDown option={PRODUCT_CONST.searchDropDown} />
            <input
              type="text"
              className={s.input_form}
              placeholder="جستجوی محصولات"
            />
            <Link className="justify-center" to="/search">
              <i className={cn(s.iconSearch, "icon-search")}></i>
            </Link>
          </form>
        </div>
        <Logo />
      </div>
      <div className={cn(s.header_nav, "justify-between")}>
        <ul className={s.menuList}>
          {HOME_CONST.menu.map((item) => (
            <li className={s.menuItem} key={item.id}>
              <Link to={item.url}>{item.title}</Link>
              <i className={cn(s.iconMneu, item.icon)}></i>
            </li>
          ))}
        </ul>
        <div className={s.freeShipping}>
          <img src={shipping} className={s.imageanav} alt="shipping" />
          <span>ارسال رایگان</span>
        </div>
      </div>
    </header>
  );
}

export { Header };
