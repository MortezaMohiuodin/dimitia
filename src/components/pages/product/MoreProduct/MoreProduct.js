import { FAKE_CONST , SLIDER_CONST} from "../../../../constants";
import { CarouselCard } from "../../../common";
import { ProductCart } from "../../../elements";
import s from "./MoreProduct.module.css";

function MoreProduct() {
  return (
    <div>
      <CarouselCard
          data={FAKE_CONST.amazingOffers}
          cart={ProductCart}
          settings={SLIDER_CONST.productpage}
        />
    </div>
  )
}

export { MoreProduct };
