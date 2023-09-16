import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import "./index.css";

export function Footer() {
  return (
    <footer className="footer">
      <ul className="social_list">
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
        <li>
          <FaWhatsapp />
        </li>
      </ul>
    </footer>
  );
}
