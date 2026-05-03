import {
  ChartBarIcon,
  ShoppingCartIcon,
  BuildingStorefrontIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function Feature() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,    
  });

  const stats = [
    {
      icon: ChartBarIcon,
      end: 52,
      suffix: "%",
      label: "Tỉ lệ chốt đơn",
    },
    {
      icon: ShoppingCartIcon,
      end: 190150,
      suffix: "",
      label: "Đơn hàng AI đã chốt",
    },
    {
      icon: BuildingStorefrontIcon,
      end: 289,
      suffix: "",
      label: "Cửa hàng đang sử dụng",
    },
    {
      icon: ChatBubbleLeftRightIcon,
      end: 2197340,
      suffix: "",
      label: "Tin nhắn AI đã xử lý",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 sm:px-8 lg:px-16">
        
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 sm:mb-4">
            Những con số biết nói
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-2">
            Chúng tôi đã và đang hỗ trợ hàng trăm doanh nghiệp chuẩn hóa quy trình, tối ưu chi phí vận hành và gia tăng doanh thu thông qua giải pháp công nghệ thông minh, linh hoạt và dễ triển khai.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-white border border-gray-100 rounded-2xl p-5 sm:p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 sm:mb-6 flex items-center justify-center rounded-xl bg-orange-50 group-hover:bg-orange-100 transition">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-orange-500" />
                </div>

                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-1 sm:mb-2">
                  {inView && (
                    <CountUp
                      start={0}
                      end={item.end}
                      duration={4}
                      separator="."
                      suffix={item.suffix}
                    />
                  )}
                </div>

                <div className="text-gray-600 text-xs sm:text-base font-medium">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Feature;