//* css
import style from "./SectionTitle.module.css";

export const SectionTitle = ({ bigTitle, title }) => {
  return (
    <div className={style.block}>
      <h2 className={style.bigTitle}>{bigTitle}</h2>
      <h3 className={style.title}>{title}</h3>
    </div>
  );
};
