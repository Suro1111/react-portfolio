import { useContext } from "react";
import { myContect } from "../../../main";
import { SectionTitle } from "../SectionTitle/SectionTitle";

//* css
import style from "./Portfolio.module.css";
import { PortfolioItem } from "./PortfolioItem/PortfolioItem";

export const Portfolio = () => {
  const {portfolioData} = useContext(myContect);
  return (
    <section id="portfolio">
        <div className="container">
            <SectionTitle bigTitle={"Portfolio"} title={"Portfolio"}/>
            <div className={style.block}>
              {portfolioData.map(item => (
                <PortfolioItem key={item.id} item={item}/>
              ))}
            </div>
        </div>
    </section>
  )
}
