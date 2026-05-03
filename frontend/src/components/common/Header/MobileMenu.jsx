import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { INDUSTRIES } from "../../../constants";

function MobileMenu({ menuOpen, setMenuOpen }) {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div
      className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        menuOpen
          ? "max-h-[900px] opacity-100 translate-y-0"
          : "max-h-0 opacity-0 -translate-y-4"
      }`}
    >
      <div className="bg-white border-t border-gray-200 shadow-md px-4 sm:px-6 py-4 space-y-3 flex flex-col">
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="mobile-link py-2"
        >
          Trang Chủ
        </Link>

        <div>
          <button
            onClick={() => setChatOpen(!chatOpen)}
            className="flex items-center justify-between w-full mobile-link py-2 cursor-pointer"
          >
            Ngành nghề
            <ChevronDownIcon
              className={`w-4 h-4 transition ${chatOpen ? "rotate-180" : ""}`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              chatOpen ? "max-h-[600px] mt-2" : "max-h-0"
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
              {INDUSTRIES.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={index}
                    to={item.link}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 p-2 sm:p-3 rounded-lg hover:bg-orange-50 transition cursor-pointer"
                  >
                    <Icon className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700 truncate">
                      {item.title}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <Link
          to="/free-chat"
          onClick={() => setMenuOpen(false)}
          className="mobile-link py-2"
        >
          Demo AI Chat
        </Link>

        <Link
          to="/huong-dan"
          onClick={() => setMenuOpen(false)}
          className="mobile-link py-2"
        >
          Hướng dẫn
        </Link>

        <Link
          to="/dich-vu"
          onClick={() => setMenuOpen(false)}
          className="mobile-link py-2"
        >
          Dịch vụ
        </Link>

        <div className="border-t pt-4 mt-2 flex flex-col space-y-3">
          <Link
            to="/free-chat"
            onClick={() => setMenuOpen(false)}
            className="bg-orange-500 text-white text-center px-4 py-3 rounded-lg hover:bg-orange-600 transition font-medium"
          >
            Chat thử ngay
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
