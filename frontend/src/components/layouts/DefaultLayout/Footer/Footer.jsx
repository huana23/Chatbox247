import React from "react";
import Logo from "../../../../assets/Icon/Logo.svg";
import Facebook from "../../../../assets/Icon/facebook.svg";
import Twitter from "../../../../assets/Icon/twitter.svg";
import Instagram from "../../../../assets/Icon/instagram.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Cuộn mượt mà
    });
  };
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-16">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo + Giới thiệu */}
          <div>
            <img src={Logo} alt="ChatBox247 Logo" className="h-10 w-auto mb-6" />

            <p className="text-gray-600 leading-relaxed mb-6">
              <strong>ChatBox247</strong> là nền tảng chatbot AI giúp doanh nghiệp 
              chăm sóc khách hàng tự động 24/7, tăng chuyển đổi và tối ưu vận hành.
            </p>

            {/* Social */}
            <div className="flex space-x-4">
              <Link
                to="https://www.facebook.com/"
                className="bg-white p-2 rounded-full shadow hover:scale-110 transition"
              >
                <img src={Facebook} alt="Facebook" className="h-5 w-5" />
              </Link>

              <Link
                to="https://x.com/"
                className="bg-white p-2 rounded-full shadow hover:scale-110 transition"
              >
                <img src={Twitter} alt="Twitter" className="h-5 w-5" />
              </Link>

              <Link
                to="https://www.instagram.com/"
                className="bg-white p-2 rounded-full shadow hover:scale-110 transition"
              >
                <img src={Instagram} alt="Instagram" className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Sản phẩm */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">
              Sản phẩm
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link to="/gioi-thieu" onClick={scrollToTop}  className="hover:text-orange-500 transition">
                  Chatbot AI
                </Link>
              </li>
              <li>
                <Link to="/huong-dan" onClick={scrollToTop}  className="hover:text-orange-500 transition">
                  Hướng dẫn sử dụng
                </Link>
              </li>
            </ul>
          </div>

          {/* Hỗ trợ */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">
              Hỗ trợ
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link to="/dieu-khoan-su-dung" onClick={scrollToTop}  className="hover:text-orange-500 transition">
                  Điều khoản sử dụng
                </Link>
              </li>
              <li>
                <Link to="/chinh-sach-bao-mat" onClick={scrollToTop}  className="hover:text-orange-500 transition">
                  Chính sách bảo mật
                </Link>
              </li>
            </ul>
          </div>

          {/* Liên hệ */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">
              Liên hệ
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li>Email: binhlt.izisoft@gmail.com</li>
              <li>Hotline: 0984 840 606</li>
              <li>Đà Nẵng, Việt Nam</li>
            </ul>

            <div className="mt-6">
              <Link
                to="/free-chat" onClick={scrollToTop}
                className="inline-block bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition"
              >
                Dùng thử miễn phí
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} ChatBox247. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;