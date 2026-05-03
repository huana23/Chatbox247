import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDownIcon,
  ShoppingCartIcon,
  SparklesIcon,
  HeartIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
  BanknotesIcon,
  CakeIcon,
  UserGroupIcon,
  WrenchIcon
} from "@heroicons/react/24/outline";

function MobileMenu({ menuOpen, setMenuOpen }) {

  const [chatOpen, setChatOpen] = useState(false);

  const industries = [
    { icon: ShoppingCartIcon, name: "Thương mại điện tử", link: "https://m.me/61587195613817" },
    { icon: SparklesIcon, name: "Spa – thẩm mỹ viện", link: "https://m.me/61584891234436" },
    { icon: HeartIcon, name: "Nha khoa – phòng khám", link: "https://m.me/61586360131741" },
    { icon: BuildingOfficeIcon, name: "Bất động sản", link: "https://m.me/61585030022633" },
    { icon: AcademicCapIcon, name: "Trung tâm tiếng Anh", link: "https://m.me/61585050303378" },
    { icon: GlobeAltIcon, name: "Du lịch – khách sạn", link: "https://m.me/61584895620215" },
    { icon: TruckIcon, name: "Logistics", link: "https://m.me/61585496075939" },
    { icon: WrenchScrewdriverIcon, name: "Ô tô – xe máy", link: "https://m.me/61583532561081" },
    { icon: BanknotesIcon, name: "Tài chính – bảo hiểm", link: "https://m.me/61583762365937" },
    { icon: CakeIcon, name: "Nhà hàng – F&B", link: "https://m.me/61586767693737" },
    { icon: UserGroupIcon, name: "Tuyển dụng – HR", link: "https://m.me/61586234197553" },
    { icon: WrenchIcon, name: "Dịch vụ địa phương", link: "https://m.me/61586218597298" },
  ];

  return (
    <div
      className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        menuOpen
          ? "max-h-225 opacity-100 translate-y-0"
          : "max-h-0 opacity-0 -translate-y-4"
      }`}
    >
      <div className="bg-white border-t border-gray-200 shadow-md px-6 py-4 space-y-4 flex flex-col">

        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="mobile-link"
        >
          Trang Chủ
        </Link>

        {/* Chat thử dropdown */}
        <div>

          <button
            onClick={() => setChatOpen(!chatOpen)}
            className="flex items-center justify-between w-full mobile-link cursor-pointer"
          >
            Nghành nghề
            <ChevronDownIcon
              className={`w-4 h-4 transition ${chatOpen ? "rotate-180" : ""}`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              chatOpen ? "max-h-150 mt-3" : "max-h-0"
            }`}
          >
            <div className="flex flex-col gap-2 pl-2">

              {industries.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={index}
                    to={item.link}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-orange-50 transition cursor-pointer"
                  >
                    <Icon className="w-5 h-5 text-orange-500" />
                    <span className="text-sm text-gray-700">
                      {item.name}
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
          className="mobile-link"
        >
          Demo AI Chat
        </Link>


              
        <Link
          to="/huong-dan"
          onClick={() => setMenuOpen(false)}
          className="mobile-link"
        >
          Hướng dẫn
        </Link>

        <Link
          to="/dich-vu"
          onClick={() => setMenuOpen(false)}
          className="mobile-link"
        >
          Dịch vụ
        </Link>

        <div className="border-t pt-4 flex flex-col space-y-3">

          <Link
            to="/free-chat"
            className="bg-orange-500 text-white text-center px-4 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Chat thử ngay
          </Link>

        </div>

      </div>
    </div>
  );
}

export default MobileMenu;