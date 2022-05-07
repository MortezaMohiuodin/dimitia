import { FAKE_CONST, SLIDER_CONST } from "../../../../constants";
import { CarouselCard } from "../../../common";
import { CommentCard } from "../../Home";
import s from "./ProductComment.module.css";

function ProductComment() {
  return (
    <div>
      <CarouselCard
        data={FAKE_CONST.commentSlider}
        cart={CommentCard}
        settings={SLIDER_CONST.commentSliderSettings}
      />
    </div>
  );
}

export { ProductComment };
