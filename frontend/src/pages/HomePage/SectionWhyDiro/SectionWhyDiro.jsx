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
      title: "Trả lời theo nhu cầu mua hàng của khách",
      desc: "ChatBot247 sử dụng mô hình GPT-Plus được huấn luyện chuyên sâu dựa trên dữ liệu và kinh nghiêm bán hàng thực tế.",
      icon: ChatBubbleLeftRightIcon,
    },
    {
      id: "02",
      title: "Tư vấn khách hàng 24/7",
      desc: "Phản hồi khách hàng online 24/7, tư vấn chốt sale mọi lúc mọi nơi.Tăng tỉ lệ chuyển đổi khách hàng.Tư vấn thông minh, trang trọng và đúng nhu cầu của khách hàng",
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
      title: "Thông báo thông minh",
      desc: "Thống kê nhu cầu, thông tin khách, số điện thoại gửi về chủ shop và nhân viên qua các nền tảng phổ biến như Zalo/ Facebook/ Mail để chốt sale tức thời.",
      icon: ChartBarIcon,
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Vì sao doanh nghiệp cần thiết sử dụng ChatBot247?
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Nền tảng AI Agent giúp doanh nghiệp tăng trưởng bền vững với công nghệ hiện đại và tối ưu hóa quy trình bán hàng.
            Đồng thời không bỏ sót một khách hàng nào.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
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
                <h3 className="text-lg font-bold text-gray-900 mb-4 min-h-[56px]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm flex-grow">
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