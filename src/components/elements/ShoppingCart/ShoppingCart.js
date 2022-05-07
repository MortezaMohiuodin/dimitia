import s from "./ShoppingCart.module.css";

function ShoppingCart() {
  return (
    <div className={s.cartBasket_component}>
      <p>سبد خرید خالی می باشد .</p>
    </div>
  );
}

export { ShoppingCart };
