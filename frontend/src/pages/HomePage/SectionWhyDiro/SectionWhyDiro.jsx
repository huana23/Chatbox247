import {
  ChatBubbleLeftRightIcon,
  ClockIcon,
  ArrowTrendingUpIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

function SectionWhyDiro() {
  const features = [
    {
      id: "01",
      title: "Trả lời theo ngữ cảnh",
      desc: "Diro AI sử dụng mô hình GPT-5 được huấn luyện chuyên sâu dựa trên dữ liệu bán hàng thực tế.",
      icon: ChatBubbleLeftRightIcon,
    },
    {
      id: "02",
      title: "Tự động 24/7",
      desc: "Phản hồi khách hàng liên tục, không bỏ lỡ bất kỳ cơ hội kinh doanh nào.",
      icon: ClockIcon,
    },
    {
      id: "03",
      title: "Tối ưu chuyển đổi",
      desc: "Tư vấn thông minh, cá nhân hóa kịch bản giúp tăng tỷ lệ chốt đơn.",
      icon: ArrowTrendingUpIcon,
    },
    {
      id: "04",
      title: "Phân tích & báo cáo",
      desc: "Theo dõi hiệu suất và hành vi khách hàng bằng hệ thống báo cáo trực quan.",
      icon: ChartBarIcon,
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Vì sao doanh nghiệp chọn chúng tôi?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nền tảng AI Agent giúp doanh nghiệp tăng trưởng bền vững
            với công nghệ hiện đại và tối ưu hóa quy trình bán hàng.
          </p>
        </div>

        {/* 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Number */}
                <div className="absolute -top-4 left-6 bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                  {item.id}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-orange-100 text-orange-600 mb-6">
                  <Icon className="w-7 h-7 stroke-2" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default SectionWhyDiro;