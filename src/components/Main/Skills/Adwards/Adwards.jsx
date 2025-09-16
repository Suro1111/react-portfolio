import { Link } from "react-scroll";
import { useContext } from "react";
import { myContect } from "../../../../main";

//*css
import style from "./Adwards.module.css";

export const Adwards = () => {
  const { awards } = useContext(myContect);
  return (
    <div className={style.adwards}>
      <Link to="skills" className="btn-grad">
        adwards
      </Link>
      <div className={style.box}>
        {awards.map((a, i) => (
          <div className={style.chlid} key={i}>
            <h3 className={style.desq}>{a?.title}</h3>
            <p className={style.text}>{a?.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
