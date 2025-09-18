
//* css
import style from "./FooterRight.module.css";

export const FooterRight = ({followLinks}) => {
  return (
    <div className={style.box}>
            <h2>Follow</h2>
            <div className={style.childBox}>
              {followLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={item.icon}
                  target="_blank"
                ></a>
              ))}
            </div>
          </div>
  )
}
