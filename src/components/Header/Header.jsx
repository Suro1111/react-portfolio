import { useState } from "react";
import { Nav } from "./Nav/Nav";

//* css
import style from "./Header.module.css";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen)
  return (
    <header>
      <div className="container">
        <div className={style.block}>
          <a href="#">Suren</a>
          <Nav isOpen={isOpen} setIsOpen={setIsOpen}/>
          <div onClick={toggleMenu} className={style.burgerMenu}>
            {isOpen ? (
              <i className="fa-solid fa-x"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </div>

        </div>
      </div>
    </header>
  );
};
