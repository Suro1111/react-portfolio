import { Link } from "react-scroll";

//* css
import style from "./CenterBox.module.css";

export const CenterBox = ({infoLinks}) => {
  return (
    <div className={style.box}>
      <h2>More</h2>
      <div className={style.childBox}>
        {infoLinks.map((item) => (
          <Link key={item.id} to={item.href}>
            {item.href}
          </Link>
        ))}
      </div>
    </div>
  );
};
