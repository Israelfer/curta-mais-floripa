import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './Style.css';

export function Footer() {
  return (
   <footer className='footer'>
    <ul className='social_list'>
      <li> <a href="icon-redesocias"><FaFacebook/></a>
        </li>
        <li> <a href="icon-redesocias"><FaInstagram /></a>
        </li>
        <li> <a href="icon-redesocias"><FaLinkedin/></a>
        </li>
        <li> <a href="icon-redesocias"><FaWhatsapp /></a>
        </li>
    </ul>
    <div className='info_social'>
      <h3>thiago</h3>
    </div>
   </footer>
  );
}


