import { Link } from "react-router-dom";

function NavMenu() {
    const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Cuộn mượt mà
    });
  };
  return (
    <nav className="hidden md:flex space-x-8">
      <Link to="/" onClick={scrollToTop} className="nav-link">Trang Chủ</Link>
      <Link to="/free-chat" onClick={scrollToTop} className="nav-link">Chat Thử</Link>
      <Link to="/huong-dan" onClick={scrollToTop} className="nav-link">Hướng dẫn</Link>
      <Link to="/dich-vu" onClick={scrollToTop} className="nav-link">Dịch vụ</Link>
    </nav>
  );
}

export default NavMenu;