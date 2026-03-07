import { Link } from "react-router-dom";
import LogoPage from "../../../../../assets/Icon/Logo.svg";

function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <img
        src={LogoPage}
        alt="ChatBox247 Logo"
        className="h-12 w-auto"
      />
    </Link>
  );
}

export default Logo;