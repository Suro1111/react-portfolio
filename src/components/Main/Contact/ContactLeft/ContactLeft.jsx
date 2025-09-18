
//* css
import style from "./ContactLeft.module.css";

export const ContactLeft = () => {
  return (
    <div className={style.box}>
        <h2>Let's discuss your project</h2>
        <div className={style.child}>
            <h3><i className="fa-solid fa-phone"></i> Phone</h3>
            <p>+374 94-46-54-42</p>
        </div>
        <div className={style.child}>
            <h3><i className="fa-solid fa-envelope"></i> Email Address</h3>
            <p>suroh49@gmail.com</p>
        </div>
        <div className={style.child}>
            <h3><i className="fa-solid fa-location-dot"></i> Official Address</h3>
            <p>Erevan, Arzumanyan 8 / 1</p>
        </div>
    </div>
  )
}
