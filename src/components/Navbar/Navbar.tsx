import { Link } from "react-router-dom";
import "./Style.css";

export function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/praias">Praias</Link>
        </li>
      </ul>
    </nav>
  );
}
