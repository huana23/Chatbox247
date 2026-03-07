import React from "react";

const AboutPage = () => {
  return (
    <div className="py-24 bg-gray-50">
      {/* Main container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-12">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Giới thiệu về ChatBox AI
          </h1>
          <p className="text-lg text-gray-600">
            Khám phá các tính năng mạnh mẽ và lợi ích của ChatBox AI trong việc nâng cao hiệu quả bán hàng và chăm sóc khách hàng.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              ChatBox AI là gì?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              ChatBox AI là một trợ lý thông minh có khả năng tư vấn, thuyết phục và chăm sóc khách hàng một cách tự động, giúp tăng tỷ lệ chuyển đổi và sự hài lòng của khách hàng với sản phẩm và dịch vụ của doanh nghiệp.
            </p>
            <p className="text-lg font-semibold text-orange-500">
              💥 Đặc biệt, trong thời gian ưu đãi, bạn sẽ nhận được 200K trong tài khoản khi đăng nhập lần đầu để trải nghiệm miễn phí!
            </p>
            <p className="text-lg text-gray-700 mb-6 mt-4">
              👉 Hãy thử ngay để nâng cao hiệu quả bán hàng dễ dàng hơn bao giờ hết!
            </p>
          </section>

          {/* Các chức năng nổi bật của ChatBox AI */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Các chức năng nổi bật của ChatBox AI
            </h2>
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  ChatBox AI chuyên nghiệp như người thật
                </h3>
                <p className="text-lg text-gray-700">
                  ChatBox AI có thể giao tiếp với khách hàng tự nhiên, gần gũi, tạo ra trải nghiệm người dùng tuyệt vời và nâng cao sự hài lòng.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Trực Facebook Page 24/7
                </h3>
                <p className="text-lg text-gray-700">
                  ChatBox AI sẽ tự động phản hồi khách hàng ngay khi họ nhắn tin, giúp bạn luôn sẵn sàng phục vụ mà không cần can thiệp.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Tương tác giống người thật
                </h3>
                <p className="text-lg text-gray-700">
                  Tin nhắn từ ChatBox AI rất giống với một người thật, giúp khách hàng cảm thấy thoải mái và dễ dàng tương tác.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Chèo kéo khách hàng khi không trả lời
                </h3>
                <p className="text-lg text-gray-700">
                  Nếu khách hàng không còn trả lời, ChatBox AI có thể tự động nhắn tin thúc giục, giữ liên lạc và tăng khả năng chốt đơn.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Quản lý tin nhắn và bình luận trên Facebook
                </h3>
                <p className="text-lg text-gray-700">
                  Bạn có thể dễ dàng quản lý tin nhắn và bình luận từ khách hàng trên trang Facebook của bạn thông qua hệ thống ChatBox AI.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Quản lý đơn hàng hiệu quả
                </h3>
                <p className="text-lg text-gray-700">
                  ChatBox AI giúp bạn theo dõi và quản lý danh sách đơn hàng một cách dễ dàng, giúp bạn tiết kiệm thời gian và công sức.
                </p>
              </div>
            </div>
          </section>

          {/* Câu hỏi thường gặp */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Câu hỏi thường gặp
            </h2>
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  ChatBox AI giúp tôi bán hàng như thế nào?
                </h3>
                <p className="text-lg text-gray-700">
                  ChatBox AI tự động giao tiếp với khách hàng, giải đáp thắc mắc, và thuyết phục khách hàng mua hàng, giúp tăng tỷ lệ chuyển đổi và doanh thu.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  ChatBox AI có thể tích hợp với nền tảng khác không?
                </h3>
                <p className="text-lg text-gray-700">
                  ChatBox AI có thể dễ dàng tích hợp với các nền tảng như Facebook, Zalo, và Website của bạn để quản lý và chăm sóc khách hàng trên nhiều kênh khác nhau.
                </p>
              </div>
            </div>
          </section>

          {/* Đánh giá từ khách hàng */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Đánh giá từ khách hàng
            </h2>
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  “ChatBox AI đã giúp chúng tôi tăng trưởng doanh thu vượt bậc”
                </h3>
                <p className="text-lg text-gray-700">
                  "Sử dụng ChatBox AI, chúng tôi đã nhận được phản hồi tích cực từ khách hàng và chứng kiến doanh thu tăng mạnh. Quá trình tương tác với khách hàng trở nên nhanh chóng và hiệu quả hơn bao giờ hết."
                </p>
                <p className="font-semibold text-gray-900 mt-4">Nguyễn Văn A, CEO của ABC Corp.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  “Hỗ trợ tuyệt vời và dễ sử dụng”
                </h3>
                <p className="text-lg text-gray-700">
                  "Dịch vụ hỗ trợ rất tuyệt vời và giao diện sử dụng của ChatBox AI cực kỳ thân thiện. Nó giúp chúng tôi tiết kiệm thời gian và tăng trải nghiệm khách hàng."
                </p>
                <p className="font-semibold text-gray-900 mt-4">Trần Thị B, Giám đốc Kinh doanh</p>
              </div>
            </div>
          </section>

          {/* Liên hệ và hỗ trợ */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Liên hệ và Hỗ trợ
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Liên hệ chúng tôi
              </h3>
              <p className="text-lg text-gray-700">
                Để biết thêm thông tin hoặc có bất kỳ câu hỏi nào, vui lòng liên hệ với chúng tôi qua các kênh dưới đây:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li>Email: support@ai.com</li>
                <li>Hotline: 0123 456 789</li>
                <li>Hà Nội, Việt Nam</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;