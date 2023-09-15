import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import "./style.css";

export function Praias() {
  return (
    <>
      <Navbar />
      <section>
        <div className="title">
          <h1>Praias em Floripa</h1>
          <p>
            <i>Veja detalhes de cada praia e saiba como curtir ao máximo!</i>
          </p>
          <hr />
        </div>
        <div></div>
      </section>
      <Footer />
    </>
  );
}
