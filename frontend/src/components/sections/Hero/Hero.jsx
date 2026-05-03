import { useRef } from "react";
import Slider from "react-slick";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  BoltIcon,
  ChatBubbleLeftRightIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  PaperAirplaneIcon
} from "@heroicons/react/24/outline";

import Banner1 from "../../../assets/images/hero/bannerh1.jpg";
import Banner2 from "../../../assets/images/hero/bannerh2.jpg";
import Banner3 from "../../../assets/images/hero/bannerh3.jpg";
import { Link } from "react-router-dom";

function Hero() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Cuộn mượt mà
    });
  };

  const images = [Banner1, Banner2, Banner3];

  return (
    <section className="relative w-full h-screen overflow-hidden group">
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index} className="h-screen w-full">
            <div
              className="h-full w-full bg-cover bg-center relative flex items-center"
              style={{ backgroundImage: `url(${image})` }}
            >
              {/* Overlay Gradient Premium */}
              <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/40 to-black/70" />

              {/* Content */}
                <div className="relative z-10 w-full">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
                    <div className="max-w-2xl text-white">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full mb-6 border border-white/20">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        <span className="text-xs sm:text-sm font-medium tracking-wide">
                        Nền tảng AI thế hệ mới
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                        Giải pháp ChatBot
                        <span className="bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                        {" "}AI tự động 24/7
                        </span>
                    </h1>

                    {/* Description */}
                    <div className="text-base sm:text-lg text-gray-200 mb-10 space-y-4">
                      <p className="text-xl sm:text-2xl font-bold text-white">
                        ChatBot247 tăng tỷ lệ chốt đơn dựa trên các yếu tố :
                      </p>

                      <ul className="space-y-3">

                        <li className="flex items-start gap-3">
                          <BoltIcon className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                          <span>
                            Tăng <span className="font-semibold text-white">80%</span> tỷ lệ khách hàng phản hồi trong
                            <span className="font-semibold text-white"> 10s đầu cuộc hội thoại</span>
                          </span>
                        </li>

                        <li className="flex items-start gap-3">
                          <UserGroupIcon className="w-6 h-6 text-indigo-400 mt-1 flex-shrink-0" />
                          <span>
                            Tư vấn chuyên nghiệp, chốt sale tức thời theo các ngành nghề kinh doanh
                          </span>
                        </li>

                        <li className="flex items-start gap-3">
                          <ChatBubbleLeftRightIcon className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                          <span>
                            ChatBot247 trả lời <span className="font-semibold text-white">tự nhiên như người thật</span>
                          </span>
                        </li>

                        <li className="flex items-start gap-3">
                          <RocketLaunchIcon className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                          <span>
                            Tăng <span className="font-semibold text-white">50%</span> tỷ lệ chốt đơn nhờ
                            <span className="font-semibold text-white"> các tính năng đặc biệt</span>
                          </span>
                        </li>

                        <li className="flex items-start gap-3">
                          <PaperAirplaneIcon className="w-6 h-6 text-pink-400 mt-1 flex-shrink-0" />
                          <span>
                            Chuyển tiếp tức thời thông tin khách hàng đến nhân viên tư vấn qua các nền tảng Zalo/Facebook/Email.
                          </span>
                        </li>

                      </ul>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 mb-12">
                        <Link
                        Link to="/free-chat" onClick={scrollToTop}
                        className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-xl shadow-xl transition-all duration-300 hover:scale-105"
                        >
                        Chat Thử
                        <span className="text-lg">→</span>
                        </Link>

                        <Link
                        to="/tinh-nang"
                        className="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 px-7 py-3 rounded-xl transition-all duration-300"
                        >
                        Xem tính năng
                        </Link>
                    </div>

                    {/* Social Proof */}
                    <div className="flex flex-wrap gap-8 text-sm text-gray-300">
                        <div>
                        <p className="text-2xl font-bold text-white">10K+</p>
                        <p>Doanh nghiệp tin dùng</p>
                        </div>
                        <div>
                        <p className="text-2xl font-bold text-white">24/7</p>
                        <p>Hoạt động liên tục</p>
                        </div>
                        <div>
                        <p className="text-2xl font-bold text-white">99.9%</p>
                        <p>Độ ổn định hệ thống</p>
                        </div>
                    </div>

                    </div>
                </div>
                </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Arrow Left - Apple Style */}
      <button
        onClick={() => sliderRef.current?.slickPrev()}
        className="
          hidden md:flex
          items-center justify-center
          absolute left-8 top-1/2 -translate-y-1/2
          w-12 h-12
          rounded-full
          bg-white/10 backdrop-blur-xl
          border border-white/20
          text-white
          opacity-0 group-hover:opacity-100
          transition-all duration-300
          hover:bg-white/20 hover:scale-110
        "
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>

      {/* Arrow Right - Apple Style */}
      <button
        onClick={() => sliderRef.current?.slickNext()}
        className="
          hidden md:flex
          items-center justify-center
          absolute right-8 top-1/2 -translate-y-1/2
          w-12 h-12
          rounded-full
          bg-white/10 backdrop-blur-xl
          border border-white/20
          text-white
          opacity-0 group-hover:opacity-100
          transition-all duration-300
          hover:bg-white/20 hover:scale-110
        "
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>
    </section>
  );
}

export default Hero;