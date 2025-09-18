import {
  Home,
  About,
  Clients,
  Contact,
  Portfolio,
  Services,
  Skills,
} from "./index";

export const Main = () => {
  return (
    <main>
      <Home />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Clients />
      <Contact />
    </main>
  );
};
