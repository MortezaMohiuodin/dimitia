import cn from "classnames";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ProductCart } from "../../components/elements";
import { Button, CarouselCard } from "../../components/common";
import { FAKE_CONST, SLIDER_CONST } from "../../constants";
import {
  HomeFooter,
  HomeNavBar,
  HomeHeaderCard,
  HomeContentTitle,
  CategoryCard,
  CommentCard,
  InstagramCard,
} from "../../components/pages/Home";
import s from "./Home.module.css";

function Home() {
  return (
    <div className="container">
      <HomeNavBar />
      <header className={cn(s.header_component , "justify-center")}>
        <div className={s.textTitle}>
          <h3 className="header3"> تخفیفات فروش</h3>
          <h2 className="header2">بهترین مجموعه های بازار</h2>
          <h3 className="header3">
            برند ها و مدل های برتر و کالکشن های سال 2020 در سایت گوگل
          </h3>
          <Button title="خرید کنید" />
        </div>
        <div className={s.slider}>
          <CarouselCard
            data={FAKE_CONST.headerOffer}
            cart={HomeHeaderCard}
            settings={SLIDER_CONST.HeaderSliderSettings}
          />
        </div>
      </header>
      <HomeContentTitle title="پیشنهادات شگفت انگیز" />
      <CarouselCard
        data={FAKE_CONST.amazingOffers}
        cart={ProductCart}
        settings={SLIDER_CONST.offerSliderSettings}
      />
      <section className={s.category}>
        <HomeContentTitle className="white" title="گروه بندی محصولات" />
        <CarouselCard
          data={FAKE_CONST.categoryItems}
          cart={CategoryCard}
          settings={SLIDER_CONST.categorySliderSettings}
        />
      </section>
      <section className={cn(s.comment)}>
        <HomeContentTitle title="نظرات کاربران سایت" />
        <CarouselCard
          data={FAKE_CONST.commentSlider}
          cart={CommentCard}
          settings={SLIDER_CONST.commentSliderSettings}
        />
      </section>
      <section className={cn(s.instagram)}>
        <HomeContentTitle className="white" title="محصولات اینستاگرام" />
        <CarouselCard
          data={FAKE_CONST.instagramSlider}
          cart={InstagramCard}
          settings={SLIDER_CONST.instagramSliderSettings}
        />
        <Link to="/" className={s.instagramLink}>
          instagram.com/dimita
        </Link>
      </section>
      <HomeFooter />
    </div>
  );
}

export {Home};
