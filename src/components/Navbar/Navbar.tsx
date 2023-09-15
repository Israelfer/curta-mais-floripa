import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Início</a>
        </li>
        {/* <li>
          <a href="#sobre">Sobre</a>
        </li> */}
        <li>
          <Link to="/praias">Praias</Link>
        </li>
      </ul>
    </nav>
  );
}
