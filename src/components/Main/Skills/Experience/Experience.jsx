import { useContext } from "react";
import { myContect } from "../../../../main";

//*css
import style from "./Experience.module.css";

export const Experience = () => {
  const { experience } = useContext(myContect);
  return (
    <>
      <h2 className={style.title}>Work & Experience</h2>
      <div className={style.block}>
        {experience.map((e, i) => (
          <div className={style.box} key={i}>
            <h3>{e?.title}</h3>
            <h4 className={style.italic}>{e?.italic}</h4>
            <p>{e?.date}</p>
            <div className={style.border}></div>
            <div className="btn-grad">{e?.buttoninfo}</div>
            <p>{e?.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};
