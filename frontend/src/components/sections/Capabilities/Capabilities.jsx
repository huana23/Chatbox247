import { ChatBubbleLeftRightIcon, CogIcon, DeviceTabletIcon, LockClosedIcon, CloudIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

function Capabilities() {
    const capabilities = [
        {
            icon: ChatBubbleLeftRightIcon,
            title: "Trò chuyện tự động thông minh",
            description: "Khả năng trò chuyện của AI giúp khách hàng cảm nhận như đang trò chuyện với một người thật. Tạo trải nghiệm tuyệt vời cho người dùng và giảm thiểu thời gian chờ đợi.",
        },
        {
            icon: CogIcon,
            title: "Tối ưu hóa quy trình tự động",
            description: "Giải pháp của chúng tôi giúp tự động hóa quy trình chăm sóc khách hàng, giảm thiểu công việc thủ công và tiết kiệm chi phí, giúp doanh nghiệp hoạt động hiệu quả hơn.",
        },
        {
            icon: DeviceTabletIcon,
            title: "Hỗ trợ đa nền tảng",
            description: "Giải pháp AI có thể tích hợp dễ dàng với mọi nền tảng, từ website đến ứng dụng di động, giúp doanh nghiệp phục vụ khách hàng mọi lúc mọi nơi.",
        },
        {
            icon: CloudIcon,
            title: "Khả năng mở rộng linh hoạt",
            description: "Giải pháp của chúng tôi dễ dàng mở rộng và tùy chỉnh theo nhu cầu của từng doanh nghiệp, từ quy mô nhỏ đến lớn, không giới hạn khả năng phát triển.",
        },
        {
            icon: LockClosedIcon,
            title: "Bảo mật cao cấp",
            description: "Với hệ thống bảo mật đa lớp, giải pháp của chúng tôi đảm bảo an toàn tuyệt đối cho dữ liệu của doanh nghiệp và khách hàng.",
        },
        // Card mới thêm vào
        {
            icon: ShieldCheckIcon,
            title: "Quản lý bảo mật toàn diện",
            description: "Giải pháp bảo mật toàn diện giúp bảo vệ hệ thống của bạn khỏi các mối đe dọa an ninh, tăng cường bảo vệ dữ liệu và ngăn ngừa rủi ro mất mát thông tin.",
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 text-center">
                    Các Tính Năng Nổi Bật Của Giải Pháp AI
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-center mb-16">
                    Giải pháp AI toàn diện giúp doanh nghiệp tối ưu quy trình chăm sóc khách hàng, tăng trưởng doanh thu và cải thiện hiệu quả công việc một cách đáng kể.
                </p>

                {/* Capabilities Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {capabilities.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="group bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                            >
                                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-xl bg-orange-50 group-hover:bg-orange-100 transition">
                                    <Icon className="w-8 h-8 text-orange-500" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-base">{item.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Capabilities;