import cn from "classnames";

import s from "./Search.module.css";
import { Header, Footer , ProductCart } from "../../components/elements";
import { FAKE_CONST, PRODUCT_CONST, SLIDER_CONST } from "../../constants";
import { BreadCrumb ,CarouselCard } from "../../components/common";
import { SearchFilter } from "../../components/pages/Search";

function Search() {
  return (
    <div className={cn(s.search, "container")}>
      <Header />
      <BreadCrumb data={PRODUCT_CONST.homeBreadCrumb} />
      <div className={cn(s.searchWrapper , "justify-between")}>
        <SearchFilter className={s.filter} />
        <div className={s.sortContent}>
          {FAKE_CONST.amazingOffers.map((item) => (
            <ProductCart key={item.id} {...item} className={s.wrapperCart}/>
         ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export { Search };
