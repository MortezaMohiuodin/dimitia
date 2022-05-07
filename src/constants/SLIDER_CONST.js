import { PRODUCT_CONST } from "./PRODUCT_CONST";

const defaultSliderSettings = PRODUCT_CONST.settings[0];

const SLIDER_CONST = {
  HeaderSliderSettings: {
    ...defaultSliderSettings,
    slidesToShow: 2,
    responsive: PRODUCT_CONST.responsive4,
  },
  offerSliderSettings: {
    ...defaultSliderSettings,
    rows: 2,
    slidesToShow: 4,
    slidesPerRow: 1,
    responsive: PRODUCT_CONST.responsive2,
  },
  productpage: {
    ...defaultSliderSettings,
    slidesToShow: 4,
    slidesPerRow: 1,
    responsive: PRODUCT_CONST.responsive2,
  },
  categorySliderSettings: {
    ...defaultSliderSettings,
    slidesToShow: 5,
    responsive: PRODUCT_CONST.responsive1,
  },
  commentSliderSettings: {
    ...defaultSliderSettings,
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: PRODUCT_CONST.responsive3,
  },
  instagramSliderSettings: {
    ...defaultSliderSettings,
    slidesToShow: 5,
    rows: 2,
    slidesPerRow: 1,
    responsive: PRODUCT_CONST.responsive1,
  },
};

export { SLIDER_CONST };
