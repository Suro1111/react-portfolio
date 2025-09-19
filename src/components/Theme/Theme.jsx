import { useEffect, useState } from "react";

//* css
import style from "./Theme.module.css";

export const Theme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") === "dark");
  const handleTheme = () => setTheme(!theme);

  useEffect(() => {
    if (theme) {
      document.body.style = "background-color: #0C192E; color: #959494ff";
      localStorage.setItem("theme", "dark");
    } else {
      document.body.style = "";
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className={theme ? style.dark : style.light} onClick={handleTheme}>
      {theme ? (
        <i className="fa-solid fa-sun"></i>
      ) : (
        <i className="fa-solid fa-moon"></i>
      )}
    </div>
  );
};
