import { Link } from "react-scroll";
import { useContext } from "react";
import { myContect } from "../../../../main";

//* css
import style from "./Education.module.css";

export const Education = () => {
  const {education} = useContext(myContect);

  return (
    <div className={style.education}>
      <Link to="skills" className="btn-grad">
        Education
      </Link>
      <div className={style.box}>
        {education.map((d, i) => (
          <div className={style.chlid} key={i}>
            <h3 className={style.desq}>{d?.title}</h3>
            <p className={style.text}>{d?.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
