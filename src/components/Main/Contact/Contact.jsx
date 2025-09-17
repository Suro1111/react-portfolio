//* css
import { SectionTitle } from "../SectionTitle/SectionTitle";
import style from "./Contact.module.css";

export const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <SectionTitle bigTitle={"Contact"} title={"Contact"} />
      </div>
    </section>
  );
};
