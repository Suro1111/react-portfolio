import { Link } from "react-scroll";

//* css
import style from "./LeftBox.module.css";

export const LeftBox = () => {
  return (
    <div className={style.box}>
      <h2>Suren</h2>
      <h4>Frontend Developer</h4>
      <Link to="about">About me</Link>
    </div>
  );
};
