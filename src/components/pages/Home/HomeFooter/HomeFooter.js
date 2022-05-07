import cn from "classnames";
import { Link } from "react-router-dom";

import s from "./HomeFooter.module.css";
import { Input } from "../../../common";
import { Social } from "../../../elements";
import { HOME_CONST } from "../../../../constants";
import googlePlay from "../../../../assets/images/bg1.png";
import appStore from "../../../../assets/images/bg2.png";
import payment from "../../../../assets/images/paymet.png";

function HomeFooter() {
  return (
    <footer className={cn("container")}>
      <div className={s.wrapperSocial}>
        <Input title={"فرم عضویت در خبرنامه"}/>
        <Social />
        <div className={s.download}>
          <img
            src={googlePlay}
            alt="googlePlay"
            className={cn(s.googlePlay, s.downloadLink)}
          />
          <img
            src={appStore}
            alt="appStore"
            className={cn(s.appStore, s.downloadLink)}
          />
        </div>
      </div>
      <div className={cn(s.copyright , "justify-between")}>
        <p className={cn("body1", s.text)}>
          تمام حق و حقوق این سایت محفوظ است .
        </p>
        <div className={s.footerLink}>
          {HOME_CONST.footer.map((item) => (
            <Link key={item.id} to="/" className={s.link}>
              {item.title}
            </Link>
          ))}
        </div>
        <img src={payment} alt="payment" className={s.imagePayment} />
      </div>
    </footer>
  );
}

export { HomeFooter };
