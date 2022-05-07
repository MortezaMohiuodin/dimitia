import logo from "../../../assets/images/logo.png";
import s from "./Logo.module.css";

function Logo() {
  return (
    <div className={s.logo_component}>
      <img src={logo} alt="Dimita" className={s.logoSite} />
    </div>
  );
}

export { Logo };
