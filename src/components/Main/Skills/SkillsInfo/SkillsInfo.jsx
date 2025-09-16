import { Link } from "react-scroll";
import { useContext } from "react";

//* css
import style from "./SkillsInfo.module.css";
import { myContect } from "../../../../main";

export const SkillsInfo = () => {
    const {skillsData} = useContext(myContect)
  return (
    <div className={style.skillsInfo}>
      <Link to="skills" className="btn-grad">
        Skills
      </Link>
      <div className={style.box}>
        {skillsData.map((s, i) => (    
        <div className={style.chlid} key={i}>
          <div className={style.info}>
            <h3>{s?.title}</h3>
            <h3>{s?.number}%</h3>
          </div>
          <div
            className={style.border}
            style={{
              background: `linear-gradient(to right, #8a2be2 0 ${s?.number || 95}%, #808080 ${s?.number || 95}% 100%)`,
            }}
          ></div>
        </div>
        ))}
      </div>
    </div>
  );
};
