import { SectionTitle } from "../SectionTitle/SectionTitle";
import { Education } from "./Education/Education";
import { SkillsInfo } from "./SkillsInfo/SkillsInfo";
import { Adwards } from "./Adwards/Adwards";


//* css
import style from "./Skills.module.css";
import { Experience } from "./Experience/Experience";

export const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <SectionTitle bigTitle="Skills" title="Skills" />
        <h2>Education & Skills</h2>
        <p className={style.p}>
          For more than 5 years our experts have been accomplishing enough with
          modern Web Development, new generation web and app programming
          language.
        </p>
        <div className={style.block}>
          <Education />
          <SkillsInfo />
          <Adwards />
        </div>
          <Experience />
      </div>
    </section>
  );
};
