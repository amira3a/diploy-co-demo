import style from "./style.module.css";
import logo from "../../assets/Images/logo.svg";
import { useState } from "react";


export default function Header() {

  const [isActive, setIsActive] = useState(false);

  
  const handleHamburgerClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={style.navbar}>
      <div className={style.navLogo}>
      <div className={style.hamburger} onClick={handleHamburgerClick}>
        <div></div>
        <div></div>
        <div></div>
      </div>
        <img src={logo} alt="logo" />
      </div>

      <ul className={`${style.navMenu} ${isActive ? style.active : ""}`}>
        <li>Catalog</li>
        <li>How it works</li>
        <li>Pricing</li>
        <li>Blog</li>
        <li>Services</li>
        <li>Use-cases</li>
        <li>Need help?</li>
      </ul>
      <div className={style.buttonsDiv}>
        <button className="border-solid border-2 text-center px-4 h-9">
          Log in
        </button>
        <button className="bg-green-600 text-center px-4 h-9 ">Sign up</button>
      </div>
    </div>
  );
}
