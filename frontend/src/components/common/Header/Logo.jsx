import { Link } from "react-router-dom";
import LogoPage from "../../../assets/Icon/logo.svg";
import { scrollToTop } from "../../../constants";

function Logo() {
  return (
    <Link to="/" onClick={scrollToTop} className="flex items-center">
      <img src={LogoPage} alt="ChatBot247 Logo" className="h-14 md:h-16 lg:h-18 w-auto" />
    </Link>
  );
}

export default Logo;
