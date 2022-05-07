import StarRating from "@rubenvara/react-star-rating";
import cn from "classnames";

import s from "./StarRating.module.css";

function StarRatingIcon() {
  const config = {
    fullColor: "#f7bc3d",
    emptyColor: "#666",
    size: 14,
    showText: false,
  };
  // const style = {borderColor: `firebrick`, padding: 12};
  return (
    <div className={cn(s.starRate_component , "justify-end")}>
      <StarRating
        rating={4}
        config={config}
        // style={style}
      />
    </div>
  );
}

export { StarRatingIcon };
