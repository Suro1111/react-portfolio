import { Link } from "react-scroll";

//* css
import style from "./Nav.module.css";
import { Overlay } from "../../Overlay/Overlay";

export const Nav = ({ isOpen, setIsOpen }) => {
  const navLink = [
    "home",
    "about",
    "skills",
    "services",
    "portfolio",
    "contact",
  ];
  
  return (
    <nav>
      <div className={style.nav}>
        {navLink.map((n, i) => (
          <Link key={i} to={n}>
            {n}
          </Link>
        ))}
      </div>
      <div
        className={isOpen ? style.navMedia : `${style.navMedia} ${style.close}`}
      >
        {navLink.map((n, i) => (
        <Link key={i} to={n} onClick={() => setIsOpen(!isOpen)}>
            {n}
          </Link>
        ))}
      </div>
          <Overlay overlay={isOpen ? "100%" : ""} />
    </nav>
  );
};
