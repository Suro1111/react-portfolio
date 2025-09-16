import { Home, About, Clients, Contact, Portfolio, Services, Skills } from "./index";

export const Main = () => {
  return (
    <main>
      <Home />
      <About />
      <Skills />
      <Services />
        <div className="container">
            {/* <h1>React Portfolio</h1> */}
        </div>
    </main>
  )
}
