import { useState } from "react";
import { RemoveScroll } from "react-remove-scroll";

import { Overlay } from "../../../Overlay/Overlay";
import { ServiceModal } from "../ServiceModal/ServiceModal";

//* css
import style from "./ServiceItem.module.css";

export const ServiecItem = ({ s }) => {
  const [open, setOpen] = useState(false);
  const openModal = (e) => setOpen(e);
  const closeModal = () => setOpen(false);
  return (
    <>
      <Overlay overlay={open ? "100%" : ""} />
      <div className={style.box}>
        <span className={s?.logo}></span>
        <h2 className={style.title}>{s?.title}</h2>
        <p className={style.text} onClick={() => openModal(s)}>
          Learn More <i className="fa-solid fa-arrow-right-long"></i>
        </p>
      </div>
      <RemoveScroll enabled={open}>
        <ServiceModal
          s={s}
          open={open}
          openModal={open === openModal}
          closeModal={closeModal}
        />
      </RemoveScroll>
    </>
  );
};
