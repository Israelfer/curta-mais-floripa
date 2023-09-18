import { Navbar } from "../Navbar/Navbar";
import "./Style.css";
import favicon from "../../assets/favicon.png";

export function Header() {
  return (
    <header>
      <Navbar />
      <div>
        <div>
          <div className="subtitle">
            <img src={favicon} alt="" width="40px" />
            <span>Curta mais</span>
          </div>
        </div>
        <h1 className="floripa">Floripa</h1>
      </div>
      <div>
        <a href="#sobre">
          <button className="btnSaibaMais">Saiba mais</button>
        </a>
        <hr />
      </div>
    </header>
  );
}
