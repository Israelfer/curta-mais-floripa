import { Navbar } from "../Navbar/Navbar";
import "./Style.css";

export function Header() {
  return (
    <header>
      <Navbar />
      <div>
        <div>
          <span>Curta mais</span>
          <img src="" alt="" />
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
