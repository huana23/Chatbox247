import { CheckIcon } from "@heroicons/react/24/solid";
import { scrollToSection } from "../../../constants";

function Pricing() {
  return (
    <section className="py-16 sm:py-24 bg-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 sm:px-8 lg:px-16">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 sm:mb-4">
            Phí dịch vụ
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Chi phí minh bạch, tối ưu cho mọi quy mô doanh nghiệp.
            Chỉ trả tiền theo số lượng tin nhắn AI xử lý.
          </p>
        </div>

        <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-10 md:p-14 border border-gray-100">
          <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1 rounded-full shadow-lg">
            Phổ biến
          </div>

          <div className="text-center mb-6 sm:mb-10">
            <p className="text-gray-500 mb-2 text-sm sm:text-base">Chi phí chỉ từ</p>
            <div className="flex items-end justify-center gap-2">
              <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900">199k</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 mt-3">
              (Tin nhắn từ khách hàng được AI xử lý)
            </p>
          </div>

          <div className="border-t border-gray-200 my-6 sm:my-8" />

          <ul className="space-y-3 sm:space-y-5 text-gray-700 text-sm sm:text-base">
            <li className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 shrink-0 mt-0.5" />
              Tư vấn theo kịch bản có sẵn.
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 shrink-0 mt-0.5" />
              Tặng ngay gói <span className="font-bold">1000</span> tin nhắn AI chốt sale.
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 shrink-0 mt-0.5" />
              Tư vấn tối ưu quy trình bán hàng miễn phí.
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 shrink-0 mt-0.5" />
              Miễn phí cài đặt vào Fanpage.
            </li>
          </ul>

          <div className="mt-8 sm:mt-12 text-center">
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer w-full sm:w-auto"
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
