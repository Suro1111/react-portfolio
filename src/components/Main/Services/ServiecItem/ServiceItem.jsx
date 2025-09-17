import { useState } from "react";
import { ServiceModal } from "../ServiceModal/ServiceModal";

//* css
import style from "./ServiceItem.module.css";
import { Overlay } from "../../../Overlay/Overlay";

export const ServiecItem = ({ s }) => {
  const [open, setOpen] = useState(false);
  const openModal = (e) => setOpen(e);
  const closeModal = () => setOpen(false);
  return (
    <>
      <Overlay overlay={open ? "100%" : ""}/>
      <div className={style.box}>
        <span className={s?.logo}></span>
        <h2 className={style.title}>{s?.title}</h2>
        <p className={style.text} onClick={() => openModal(s)}>
          Learn More <i className="fa-solid fa-arrow-right-long"></i>
        </p>
      </div>
      <ServiceModal
        s={s}
        open={open}
        openModal={open === openModal}
        closeModal={closeModal}
      />
    </>
  );
};
