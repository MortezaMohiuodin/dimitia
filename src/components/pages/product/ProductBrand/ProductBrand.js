import s from "./ProductBrand.module.css";
import { FAKE_CONST } from "../../../../constants";

function ProductBrand() {
  return (
    <div className={s.infoWrapper}>
      <span className={s.info}>
        وزن : <span>230گرم</span>
      </span>
      <span className={s.info}>
        ابعاد : <span>20*10*10 cm</span>
      </span>
      <span className={s.info}>
        رنگ : <span>آبی</span>
      </span>
    </div>
  )
}

export { ProductBrand };
