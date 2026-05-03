import {
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
  WrenchIcon,
} from "@heroicons/react/24/outline";

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export const INDUSTRIES = [
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

export const NAV_LINKS = [
  { to: "/", label: "Trang Chủ" },
  { to: "/free-chat", label: "Trải nghiệm ChatBot" },
  { to: "/huong-dan", label: "Hướng dẫn" },
  { to: "/dich-vu", label: "Liên Hệ" },
];
