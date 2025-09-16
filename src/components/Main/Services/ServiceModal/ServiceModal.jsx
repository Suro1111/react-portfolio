//* css
import style from "./ServiceModal.module.css";

export const ServiceModal = ({ s, closeModal, open }) => {
  return (
    <div
      className={
        !open ? style.serviceModal : `${style.serviceModal} ${style.open}`
      }
    >
      <i className="fa-solid fa-x" onClick={closeModal}></i>
      <h2>{s?.title}</h2>
      <h3>{s?.subTitle}</h3>
      <p>{s?.desq}</p>
      <h3>What I provide</h3>
      <p className={style.checkBox}>
        <i className="fa-solid fa-check"></i>
        {s?.p1}
      </p>
      <p className={style.checkBox}>
        <i className="fa-solid fa-check"></i>
        {s?.p2}
      </p>
      <p className={style.checkBox}>
        <i className="fa-solid fa-check"></i>
        {s?.p3}
      </p>
      {s?.p4 && (
        <p className={style.checkBox}>
          <i className="fa-solid fa-check"></i>
          {s?.p4}
        </p>
      )}
    </div>
  );
};
