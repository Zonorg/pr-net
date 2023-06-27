//Imports
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="redIcons">
        <Link className="linkIcons" to="https://twitter.com/" target="_blank">
          <i className="fab fa-twitter-square"></i>
        </Link>
        <Link className="linkIcons" to="https://www.facebook.com/" target="_blank">
          <i className="fab fa-facebook-square"></i>
        </Link>
        <Link className="linkIcons" to="https://www.instagram.com/" target="_blank">
          <i className="fab fa-instagram-square"></i>
        </Link>
      </div>

      <div className="mailDiv">
        <h4 className="email">pr_net@gmail.com</h4>
      </div>
      <p>© PR-NET - Protegiendo y asegurando la era digital con ética y excelencia en el hacking.</p>
    </div>
  );
};

export default Footer;
