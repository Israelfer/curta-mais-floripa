import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import "./Style.css";

export function Footer() {
  return (
    <footer className="footer">
      <ul className="social_list">
        <li>
          <a href="#">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="#">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="#">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="#">
            <FaWhatsapp />
          </a>
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
