import { Link } from "react-router-dom";
import { scrollToTop } from "../../../constants";

function AuthButtons() {
  return (
    <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
      <Link
        to="/free-chat"
        onClick={scrollToTop}
        className="bg-orange-500 text-white px-3 lg:px-5 py-1.5 lg:py-2 rounded-lg hover:bg-orange-600 transition font-medium text-sm lg:text-base"
      >
        Chat Thử Ngay
      </Link>
    </div>
  );
}

export default AuthButtons;
