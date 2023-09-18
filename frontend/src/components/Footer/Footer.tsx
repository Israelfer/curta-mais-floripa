import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import "./Style.css";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="footer">
      <ul className="social_list">
        <li>
          <Link to="#">
            <FaFacebook />
          </Link>
        </li>
        <li>
          <Link to="#">
            <FaInstagram />
          </Link>
        </li>
        <li>
          <Link to="#">
            <FaLinkedin />
          </Link>
        </li>
        <li>
          <Link to="#">
            <FaWhatsapp />
          </Link>
        </li>
      </ul>

      <div className="footer-info">
        <span>
          Projeto desenvolvido em grupo durante o curso de Análise e
          Desenvolvimento no SENAC.
        </span>
        <p>&copy; 2023 Curta Mais - Floripa</p>
      </div>
    </footer>
  );
}
