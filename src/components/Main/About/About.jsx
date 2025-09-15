import aboutImg from "../../../assets/images/about.png";
import { SectionTitle } from "../SectionTitle/SectionTitle";

//* css
import style from "./About.module.css";

export const About = () => {
  return (
    <section id="about">
      <div className="container">
        <SectionTitle bigTitle="About me" title="About me" />
        <div className={style.block}>
          <img src={aboutImg} alt="aboutImg" />
          <div className={style.box}>
            <h2>I'm Suren</h2>
            <h3>
              A Lead <span>Front-End Developer</span> based in
              <span> Erevan</span>
            </h3>
            <p>
              I design and develop services for customers specializing creating
              stylishh, modern websites, web services and inline stores. my
              passion is to design digital user experiences through meaningful
              interactions. Check out my PortFolio
            </p>
            <div className={style.borderGrey}></div>
            <div className={style.flexBox}>
              <div className={style.miniBox}>
                <h2 className={style.bold}>5+</h2>
                <p className={style.text}>Years of experience</p>
              </div>
              <div className={style.miniBox}>
                <h2 className={style.bold}>3K+</h2>
                <p className={style.text}>Happy Custommers</p>
              </div>
              <div className={style.miniBox}>
                <h2 className={style.bold}>5+</h2>
                <p className={style.text}>Success Projects</p>
              </div>
            </div>
            <div
              className="btn-grad"
              style={{
                maxWidth: "160px",
                cursor: "pointer",
                margin: " 10px auto"
              }}
            >
              Download
              <i className="fa-solid fa-download"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
