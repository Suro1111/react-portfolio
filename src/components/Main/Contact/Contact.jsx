import { SectionTitle } from "../SectionTitle/SectionTitle";

//* css
import style from "./Contact.module.css";
import { ContactLeft } from "./ContactLeft/ContactLeft";
import { ContactRight } from "./ContactRight/ContactRight";

export const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <SectionTitle bigTitle={"Contact"} title={"Contact"} />
        <div className={style.block}>
          <ContactLeft />
          <ContactRight />
        </div>
      </div>
    </section>
  );
};
