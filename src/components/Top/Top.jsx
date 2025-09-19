import { Link } from "react-scroll";

//* css
import style from "./Top.module.css";
import { useEffect, useState } from "react";

export const Top = () => {
  const [isVisble, setVisible] = useState(false);
  const handleScroll = () => {
    setVisible(window.scrollY > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={isVisble ? `${style.top} ${style.active}` : style.top}>
      <Link className="fa-solid fa-arrow-up-long" to="home"></Link>
    </div>
  );
};
