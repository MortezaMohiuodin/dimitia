import { useState } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"

import s from "./Product.module.css";
import {
  Header,
  Social,
  ProductCart,
  Footer,
} from "../../components/elements";
import {
  PRODUCT_CONST,
  FAKE_CONST,
  SLIDER_CONST,
} from "../../constants";
import { CarouselCard, Button, BreadCrumb } from "../../components/common";
import {
  ProductInfo,
  ProductBrand,
  ProductComment,
  MoreProduct,
} from "../../components/pages/product";

function Product() {
  const [count, setCount] = useState(1)
  const [tab, setTab] = useState(0)

  const _renderTabs = () => {
    return {
      0: <ProductInfo />,
      1: <ProductBrand />,
      2: <ProductComment />,
      3: <MoreProduct />,
    }[tab];
  };

  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    if (count <= 1) {
      setCount(1)
    } else {
      setCount(count - 1)
    }
  }
  return (
    <div className={cn(s.product)}>
      <div className="container">
        <Header />
        <BreadCrumb data={PRODUCT_CONST.productBreadCrumb} />
        <div className={cn(s.headerSection, "justify-between")}>
          <ImageGallery
            className={s.gallery}
            items={FAKE_CONST.productImage}
            showFullscreenButton={false}
            showPlayButton={false}
            showNav={false}
            showPlayButton={false}
            isRTL={true}
          />
          <div className={s.ProductOverview}>
            <h1 className={cn(s.titleProduct, "header1")}>ساعت اپل مدل 2020</h1>
            <p className={s.price}>2/580/000 تومان</p>
            <div className={s.productStock}>
              <span > موجودی: </span>
              <span> موجود در انبار </span>
            </div>
            <p className={s.description}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،</p>
            <div className={s.quantity}>
              <div className={s.counter}>
                <button className={s.increment} onClick={increment} >+</button>
                <span className={s.count}>{count}</span>
                <button className={s.decrement} onClick={decrement} >-</button>
              </div>
              <Button
                title="افزودن به سبد خرید"
                primary
                large
              />
            </div>
            <div className={s.option}>
              <Link to="/" className={s.linkOption}>
                <span className={s.text} >مقایسه</span>
                <i className={cn(s.iconOption, "icon-exchange")} ></i></Link>
              <Link to="/" className={s.linkOption}>
                <span className={s.text} >افزودن به علاقه مندی ها</span>
                <i className={cn(s.iconOption, "icon-like")} ></i>
              </Link>
            </div>
            <div className={s.productMeta}>
              <span className={s.lable} > مدل: <Link to="/" className={s.desc} > D1020 </Link></span>
              <span className={s.lable} > دسته بندی: <Link to="/" className={s.desc} > ساعت و اکسسوری </Link></span>
              <span className={s.lable} > هشتگ: <Link to="/" className={s.desc} > #ساعت_اکسسوری </Link></span>
              <span style={{ border: "none" }} className={s.lable} >
                اشتراک گذاری:
                <Social />
              </span>
            </div>
          </div>
        </div>
        <div className={s.tabBarWrapper}>
          {FAKE_CONST.tabProduct.map((item, index) => (
            <button
              key={item.id}
              className={cn(s.tab, { [s.active]: tab === index, })}
              onClick={() => setTab(index)} >
              {item.title}
            </button>
          ))}
        </div>
        <div>{_renderTabs()}</div>
        <div className={s.moreProduct}>
          <h2 className="header2" >محصولات مرتبط</h2>
          <CarouselCard
            data={FAKE_CONST.amazingOffers}
            cart={ProductCart}
            settings={SLIDER_CONST.productpage}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export { Product };
