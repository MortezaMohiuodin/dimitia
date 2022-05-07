import { useState } from "react";
import cn from "classnames";
import Slider from '@material-ui/core/Slider';
import { Link } from "react-router-dom";

import { FAKE_CONST } from "../../../../constants";
import { Collapse, Button } from "../../../common";
import s from "./SearchFilter.module.css";

const STEP = 1;
const MIN = 1;
const MAX = 100;

function SearchFilter({className}) {
  const [value, setValue] = useState([30, 67]);
  const putCommas = (number) => {
    if (!number) return number;
    if (typeof number === "undefined") return number;
    if (typeof number === "number") number = number.toString();
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, "،");
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <aside className={cn(s.searchFilter, className , "flex-column")}>
      <Collapse title="دسته بندی محصولات:" >
        <ul className="flex-column">
          {FAKE_CONST.categorySearch.map((item) => (
            <li key={item.id} className={s.itemCategory}>
              <Button
                link
                title={item.title}
                icon="up-arrow"
                iconClassName={s.iconFilter}
                className={s.category}
              />
            </li>
          ))}
        </ul>
      </Collapse>
      <Collapse title="محدوده قیمت">
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
        />
        <div className={cn("justify-between", s.outputRange)}>
          <p>
            از <span>{putCommas(MIN + (MAX - value[1]))} تومان</span>
          </p>
          <p>
            تا <span>{putCommas(MAX + (MIN - value[0]))} تومان</span>
          </p>
        </div>
      </Collapse>
      <Collapse title="رنگ بندی">
        <ul className="flex-column">
          {FAKE_CONST.colorProduct.map((item) => (
            <li key={item.id} className={s.itemColor}>
              <label className={s.lable}>{item.title}({item.number})
                <input type="checkbox" />
                <span className={s.checkmark} style={{ backgroundColor: item.color }}></span>
              </label>
            </li>
          ))}
        </ul>
      </Collapse>
      <Collapse title="برند ها">
        <ul className="flex-column">
          {FAKE_CONST.brands.map((item) => (
            <li key={item.id} className={s.itemBrand}>
              <input type="checkbox" />
              <label>{item.title}({item.number})</label>
            </li>
          ))}
        </ul>
      </Collapse>
      <Collapse title="برچسب ها" textClassName={s.collapseBrands}>
        {FAKE_CONST.hashtag.map((item) => (
          <span key={item.id} className={s.hashtag}>
            <Link to="/" className={s.linkHashtag}>
              {item.title}
            </Link>
          </span>
        ))}
      </Collapse>
    </aside>
  )
}

export { SearchFilter };
