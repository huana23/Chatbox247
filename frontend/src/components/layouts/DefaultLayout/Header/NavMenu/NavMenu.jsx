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

function NavMenu() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const menuItems = [
    {
      icon: ShoppingCartIcon,
      title: "Thương mại điện tử",
      desc: "Bán lẻ",
      link: "https://m.me/61587195613817",
    },
    {
      icon: SparklesIcon,
      title: "Spa – thẩm mỹ viện",
      desc: "",
      link: "https://m.me/61584891234436",
    },
    {
      icon: HeartIcon,
      title: "Nha khoa – phòng khám",
      desc: "",
      link: "https://m.me/61586360131741",
    },
    {
      icon: BuildingOfficeIcon,
      title: "Bất động sản",
      desc: "",
      link: "https://m.me/61585030022633",
    },
    {
      icon: AcademicCapIcon,
      title: "Trung tâm tiếng Anh",
      desc: "Giáo dục",
      link: "https://m.me/61585050303378",
    },
    {
      icon: GlobeAltIcon,
      title: "Du lịch – khách sạn",
      desc: "Homestay",
      link: "https://m.me/61584895620215",
    },
    {
      icon: TruckIcon,
      title: "Logistics",
      desc: "Vận chuyển",
      link: "https://m.me/61585496075939",
    },
    {
      icon: WrenchScrewdriverIcon,
      title: "Ô tô – xe máy",
      desc: "Showroom",
      link: "https://m.me/61583532561081",
    },
    {
      icon: BanknotesIcon,
      title: "Tài chính – bảo hiểm",
      desc: "",
      link: "https://m.me/61583762365937",
    },
    {
      icon: CakeIcon,
      title: "Nhà hàng – F&B",
      desc: "",
      link: "https://m.me/61586767693737",
    },
    {
      icon: UserGroupIcon,
      title: "Tuyển dụng – HR",
      desc: "Headhunt",
      link: "https://m.me/61586234197553",
    },
    {
      icon: WrenchIcon,
      title: "Dịch vụ địa phương",
      desc: "Sửa chữa, vệ sinh",
      link: "https://m.me/61586218597298",
    },
  ];

  return (
    <nav className="hidden md:flex space-x-8 items-center font-medium">

      <Link
        to="/"
        onClick={scrollToTop}
        className="nav-link"
      >
        Trang Chủ
      </Link>

      {/* Dropdown */}
      <div className="relative group">

        <div className="flex items-center gap-1 cursor-pointer nav-link">
          Ngành Nghề
          <ChevronDownIcon className="w-4 h-4 mt-0.5" />
        </div>

        {/* Mega menu */}
        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-130 bg-white border border-gray-200 shadow-xl rounded-2xl p-4
        opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

          <div className="grid grid-cols-2 gap-2">

            {menuItems.map((item, index) => {
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
                      <p className="text-xs text-gray-500">
                        {item.desc}
                      </p>
                    )}
                  </div>

                </Link>
              );
            })}

          </div>
        </div>
      </div>

      <Link
        to="/free-chat"
        onClick={scrollToTop}
        className="nav-link"
      >
        Trải nghiệm ChatBot
      </Link>

      <Link
        to="/huong-dan"
        onClick={scrollToTop}
        className="nav-link"
      >
        Hướng dẫn
      </Link>

      <Link
        to="/dich-vu"
        onClick={scrollToTop}
        className="nav-link"
      >
        Liên Hệ
      </Link>

    </nav>
  );
}

export default NavMenu;