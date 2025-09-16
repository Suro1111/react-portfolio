import { SectionTitle } from "../SectionTitle/SectionTitle";
import { ServiecItem } from "./ServiecItem/ServiceItem";
import { useContext } from "react";
import { myContect } from "../../../main";

//* css
import style from "./Services.module.css";

export const Services = () => {
  const { serviceData } = useContext(myContect);
  return (
    <section id="services">
      <div className="container">
        <SectionTitle bigTitle={"Services"} title={"Services"} />
        <h2 className={style.bigTitle}>What I provide</h2>
        <div className={style.block}>
          {serviceData.map((s, i) => (
            <ServiecItem key={i} s={s} i={i}/>
          ))}
        </div>
      </div>
    </section>
  );
};
