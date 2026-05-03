import { CheckIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function Pricing() {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="py-24 bg-gray-200">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-16">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Phí dịch vụ
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Chi phí minh bạch, tối ưu cho mọi quy mô doanh nghiệp.
            Chỉ trả tiền theo số lượng tin nhắn AI xử lý.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="relative bg-white rounded-3xl shadow-xl p-10 md:p-14 border border-gray-100">

          {/* Badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-lg">
            Phổ biến
          </div>

          {/* Price */}
          <div className="text-center mb-10">
            <p className="text-gray-500 mb-2">Chi phí chỉ từ</p>
            <div className="flex items-end justify-center gap-2">
              <span className="text-5xl md:text-6xl font-extrabold text-gray-900">
                199k
              </span>
              
            </div>
            <p className="text-sm text-gray-500 mt-3">
              (Tin nhắn từ khách hàng được AI xử lý)
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-8"></div>

          {/* Features */}
          <ul className="space-y-5 text-gray-700">
            <li className="flex items-start gap-3">
              <CheckIcon className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
              Tư vấn theo kịch bản có sẵn.
            </li>

            <li className="flex items-start gap-3">
              <CheckIcon className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
              Tặng ngay gói<span className="font-bold">1000</span>tin nhắn AI chốt sale.
            </li>

            <li className="flex items-start gap-3">
              <CheckIcon className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
              Tư vấn tối ưu quy trình bán hàng miễn phí
            </li>

            <li className="flex items-start gap-3">
              <CheckIcon className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
              Miễn phí cài đặt vào Fanpage
            </li>
          </ul>

          {/* CTA */}
          <div className="mt-12 text-center">
            <button
              onClick={scrollToContact}
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              Liên hệ với chúng tôi
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Pricing;