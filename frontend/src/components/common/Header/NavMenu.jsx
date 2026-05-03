import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { INDUSTRIES, scrollToTop } from "../../../constants";

function NavMenu() {
  return (
    <nav className="hidden md:flex space-x-4 lg:space-x-8 items-center font-medium text-sm lg:text-base">
      <Link to="/" onClick={scrollToTop} className="nav-link">
        Trang Chủ
      </Link>

      <div className="relative group">
        <div className="flex items-center gap-0.5 lg:gap-1 cursor-pointer nav-link">
          Ngành Nghề
          <ChevronDownIcon className="w-3 h-3 lg:w-4 lg:h-4 mt-0.5" />
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[520px] bg-white border border-gray-200 shadow-xl rounded-2xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
          <div className="grid grid-cols-2 gap-2">
            {INDUSTRIES.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  key={index}
                  to={item.link}
                  onClick={scrollToTop}
                  className="flex gap-3 p-3 rounded-lg hover:bg-orange-50 transition"
                >
                  <div className="w-9 h-9 flex items-center justify-center bg-orange-50 rounded-lg">
                    <Icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {item.title}
                    </p>
                    {item.desc && (
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <Link to="/free-chat" onClick={scrollToTop} className="nav-link">
        Trải nghiệm ChatBot
      </Link>

      <Link to="/huong-dan" onClick={scrollToTop} className="nav-link">
        Hướng dẫn
      </Link>

      <Link to="/dich-vu" onClick={scrollToTop} className="nav-link">
        Liên Hệ
      </Link>
    </nav>
  );
}

export default NavMenu;
