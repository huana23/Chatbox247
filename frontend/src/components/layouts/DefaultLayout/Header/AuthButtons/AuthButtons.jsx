import { Link } from "react-router-dom";

function AuthButtons() {
  return (
    <div className="hidden md:flex items-center space-x-4">

      <Link
        to="/free-chat"
        className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition font-medium"
      >
        Chat Thử Ngay
      </Link>
    </div>
  );
}

export default AuthButtons;