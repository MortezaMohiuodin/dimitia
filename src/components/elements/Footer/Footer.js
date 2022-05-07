import cn from "classnames";
import { Link } from "react-router-dom";

import google from "../.././../assets/images/google.png"
import iphone from "../.././../assets/images/iphone.png"
import { Social } from "../../elements";
import s from "./Footer.module.css";
import { FAKE_CONST } from "../../../constants";
import map from "../../../assets/images/map.png";
import paymet from "../../../assets/images/paymet.png";

function Footer() {
  return (
    <div className={cn(s.footer)}>
      <div className="container">
        <div className={cn(s.Subscribe,"justify-between" , "container")}>
          <Social className="white" />
          <form className={s.formFooter}>
            <input className={s.input} type="text" placeholder="آدرس ایمیل خود را وارد کنید" />
            <button className={s.btn} type="submit"> اشتراک </button>
          </form>
          <p> اشتراک در خبرنامه </p>
        </div>
        <div className={cn(s.information , "justify-between")}>
          <div className={s.contactInformation}>
            <h2 className={s.titleContact}>اطلاعات تماس</h2>
            <p>پاسخگویی 24 ساعته</p>
            <h2 className={s.callNumber}>09121234567</h2>
            <p>example@test.com</p>
            <p>تهران - خیابان ولیعصر - خیابان چمران - پلاک 12</p>
            <div className={s.appDownload}>
              <img src={iphone} alt="appDownload" className={s.app}></img>
              <img src={google} alt="appDownload" className={s.app}></img>
            </div>
          </div>
          <div className={s.quickAccess}>
            <h2 className={s.titleContact}>دسترسی سریع</h2>
            <ul>
              {FAKE_CONST.quickAccess.map((item) => (
                <li key={item.id} className={s.linkFooter}>
                  <Link to="/">{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={s.products}>
            <h2 className={s.titleContact}>محصولات</h2>
            <ul>
              {FAKE_CONST.products.map((item) => (
                <li key={item.id} className={s.linkFooter}>
                  <Link to="/" >{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={s.ourLocation}>
            <h2 className={s.titleContact}>آدرس دفتر</h2>
            <img src={map} alt="map" className={s.map} />
          </div>
        </div>
      </div>
      <div className={cn(s.copyright , "justify-between")}>
        <p>تمامی حق و حقوق این سایت محفوظ می باشد.</p>
        <img src={paymet} alt="payment" />
      </div>
    </div>
  )
}

export { Footer }
