import { useContext } from "react";
import { myContect } from "../../main";

import { LeftBox } from "./LeftBox/LeftBox";
import { CenterBox } from "./CenterBox/CenterBox";
import { FooterRight } from "./FooterRight/FooterRight";

//* css
import style from "./Footer.module.css";

export const Footer = () => {
  const { footerData } = useContext(myContect);
  const { infoLinks, followLinks } = footerData;
  return (
    <footer>
      <div className="container">
        <div className={style.block}>
          <LeftBox />
          <CenterBox infoLinks={infoLinks} />
          <FooterRight followLinks={followLinks} />
        </div>
        <p className={style.p}>&copy; {new Date().getFullYear()} by Suren. All rights reserved.</p>
      </div>
    </footer>
  );
};
