import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import "./Style.css";
import { Link } from "react-router-dom";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const email = "https://www.ead.senac.br/";

export function Footer() {
  return (
    <footer className="footer">
      <ul className="social_list">
        <li>
          {" "}
          <a href="icon-redesocias">
            <FaFacebook />
          </a>
        </li>
        <li>
          {" "}
          <a href="icon-redesocias">
            <FaInstagram />
          </a>
        </li>
        <li>
          {" "}
          <a href="icon-redesocias">
            <FaLinkedin />
          </a>
        </li>
        <li>
          {" "}
          <a href="icon-redesocias">
            <FaWhatsapp />
          </a>
        </li>
      </ul>

      <div className="email-info">
        <a href={`mailto:${email}`}>
          <FontAwesomeIcon icon={faEnvelope} /> {email}
        </a>
      </div>

      <div className="info_social">
        <ul>
          <li>
            <h3>Home</h3>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/praias">Praias</Link>
          </li>
        </ul>
        <div className="footer-info">
          <p>&copy; 2023 SENAC - Análise e Desenvolvimente De Sistemas</p>
        </div>
      </div>
    </footer>
  );
}
