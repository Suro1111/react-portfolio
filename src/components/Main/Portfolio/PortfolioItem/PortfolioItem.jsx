//*css
import { useState } from "react";
import { PortfolioModal } from "../PortfolioModal/PortfolioModal";
import style from "./PortfolioItem.module.css";
import { Overlay } from "../../../Overlay/Overlay";

export const PortfolioItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className={style.box} onClick={openModal}>
        <div className={style.overlay}></div>
        <div className={style.textBlock}>
          <h3>{item?.title}</h3>
          <p>{item?.category}</p>
        </div>
        <img src={item?.imgSrc} alt="logo" />
      </div>
      <PortfolioModal item={item} isOpen={isOpen} closeModal={closeModal}/>
      <Overlay overlay={isOpen ? "100vw" : ""}/>
    </>
  );
};
