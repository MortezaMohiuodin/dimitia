import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarouselCard({ data, cart, settings }) {
  const test = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...test}>
      {data.map((item) => (
        <div key={item.id}>{cart(item)}</div>
      ))}
    </Slider>
  );
}

export { CarouselCard };
