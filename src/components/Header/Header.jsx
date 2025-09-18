import { useState } from "react";
import { Link } from "react-scroll";
import { RemoveScroll } from "react-remove-scroll";

import { Nav } from "./Nav/Nav";

//* css
import style from "./Header.module.css";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <header>
      <div className="container">
        <div className={style.block}>
          <Link to="home" style={{ cursor: "pointer" }}>
            Suren
          </Link>
          <RemoveScroll enabled={isOpen}>
            <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
          </RemoveScroll>
          <div onClick={toggleMenu} className={style.burgerMenu}>
            {isOpen ? (
              <i
                className="fa-solid fa-x"
                style={{ zIndex: "9999", position: "relative" }}
              ></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
