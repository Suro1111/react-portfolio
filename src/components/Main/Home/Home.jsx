import Suro from "../../../assets/images/Suro.jpg";

//* css
import style from "./Home.module.css";

export const Home = () => {
  return (
    <section id="home">
      <div className="container">
        <div className={style.block}>
          <div className={style.box}>
            <div className={style.iconsLinks}>
              <a
                href="https://www.facebook.com/profile.php?id=100004805587930"
                target="_blank"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/suro_h98/" target="_blank">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://github.com/Suro1111" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
            <div className={style.boxInfo}>
              <h2>Hi, I am Suren</h2>
              <h3>Front-end Developer</h3>
              <p>
                I create stunning website for you business, Highly experienced
                in web design and development
              </p>
              <a href="#" className="btn-grad">
                Contact me
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <img src={Suro} alt="main img" />
        </div>
        <a href="#about" className={style.scrollDown}>
          Scroll down 
          <i className="fa-solid fa-arrow-down"></i>
        </a>
      </div>
    </section>
  );
};
