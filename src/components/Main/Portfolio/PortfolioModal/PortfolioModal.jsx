//* css
import style from "./PortfolioModal.module.css";

export const PortfolioModal = ({ item, isOpen, closeModal }) => {
  return (
    <div className={isOpen ? style.block : `${style.block} ${style.closen}`}>
      <i className="fa-solid fa-x" onClick={closeModal}></i>
      <h3>{item?.title}</h3>
      <img src={item?.imgSrc} alt="imgLogo" />
      <p>{item?.desq}</p>
    </div>
  );
};
