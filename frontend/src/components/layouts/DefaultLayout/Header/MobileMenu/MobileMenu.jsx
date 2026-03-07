import { Link } from "react-router-dom";

function MobileMenu({ menuOpen, setMenuOpen }) {
  return (
    <div
      className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        menuOpen
          ? "max-h-[500px] opacity-100 translate-y-0"
          : "max-h-0 opacity-0 -translate-y-4"
      }`}
    >
      <div className="bg-white border-t border-gray-200 shadow-md px-6 py-4 space-y-4 flex flex-col">
        
        <Link to="/" onClick={() => setMenuOpen(false)} className="mobile-link">
          Trang Chủ
        </Link>

        <Link to="/chat" onClick={() => setMenuOpen(false)} className="mobile-link">
          Chat Thử
        </Link>

        <Link to="/guide" onClick={() => setMenuOpen(false)} className="mobile-link">
          Hướng dẫn
        </Link>

        <Link to="/services" onClick={() => setMenuOpen(false)} className="mobile-link">
          Dịch vụ
        </Link>

        <div className="border-t pt-4 flex flex-col space-y-3">
          <Link to="/login" className="mobile-link">
            Đăng nhập
          </Link>

          <Link
            to="/register"
            className="bg-orange-500 text-white text-center px-4 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Đăng ký
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;