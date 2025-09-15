import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";

//* css
import "./assets/global/global.css";

export const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};
