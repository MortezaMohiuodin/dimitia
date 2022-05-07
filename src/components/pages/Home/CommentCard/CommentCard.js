import { StarRatingIcon } from "../../../common";
import cn from "classnames";

import s from "./CommentCard.module.css";

function CommentCard({ key, text, image, title }) {
  return (
    <div key={key} className="commentSlider">
      <div className={s.textComment}>
        <p className="body1">{text}</p>
        <div className={cn(s.rating , "justify-center")}>
          <StarRatingIcon />
        </div>
        <img src={image} alt="imageComment" className={s.image} />
        <h5>{title}</h5>
      </div>
    </div>
  );
}

export { CommentCard };
