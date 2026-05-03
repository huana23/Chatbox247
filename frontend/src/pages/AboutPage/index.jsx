function AboutPage() {
  return (
    <div className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 sm:px-8 lg:px-16 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 sm:mb-4">
            Giới thiệu về ChatBot AI
          </h1>
          <p className="text-sm sm:text-base text-gray-600 px-2">
            Khám phá các tính năng mạnh mẽ và lợi ích của ChatBot AI trong việc nâng cao hiệu quả bán hàng và chăm sóc khách hàng.
          </p>
        </div>

        <div className="space-y-8 sm:space-y-12">
          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4 sm:mb-6">
              ChatBot AI là gì?
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
              ChatBot AI là một trợ lý thông minh có khả năng tư vấn, thuyết phục và chăm sóc khách hàng một cách tự động, giúp tăng tỷ lệ chuyển đổi và sự hài lòng của khách hàng với sản phẩm và dịch vụ của doanh nghiệp.
            </p>
            <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 mt-4">
              Hãy thử ngay để nâng cao hiệu quả bán hàng dễ dàng hơn bao giờ hết!
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4 sm:mb-6">
              Các chức năng nổi bật của ChatBot AI
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {[
                { title: "ChatBot AI chuyên nghiệp như người thật", desc: "ChatBot AI có thể giao tiếp với khách hàng tự nhiên, gần gũi, tạo ra trải nghiệm người dùng tuyệt vời và nâng cao sự hài lòng." },
                { title: "Trực Facebook Page 24/7", desc: "ChatBot AI sẽ tự động phản hồi khách hàng ngay khi họ nhắn tin, giúp bạn luôn sẵn sàng phục vụ mà không cần can thiệp." },
                { title: "Tương tác giống người thật", desc: "Tin nhắn từ ChatBot AI rất giống với một người thật, giúp khách hàng cảm thấy thoải mái và dễ dàng tương tác." },
                { title: "Chèo kéo khách hàng khi không trả lời", desc: "Nếu khách hàng không còn trả lời, ChatBot AI có thể tự động nhắn tin thúc giục, giữ liên lạc và tăng khả năng chốt đơn." },
                { title: "Quản lý tin nhắn và bình luận trên Facebook", desc: "Bạn có thể dễ dàng quản lý tin nhắn và bình luận từ khách hàng trên trang Facebook của bạn thông qua hệ thống ChatBot AI." },
                { title: "Quản lý đơn hàng hiệu quả", desc: "ChatBot AI giúp bạn theo dõi và quản lý danh sách đơn hàng một cách dễ dàng, giúp bạn tiết kiệm thời gian và công sức." },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2 sm:mb-4">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4 sm:mb-6">
              Câu hỏi thường gặp
            </h2>
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2 sm:mb-4">
                  ChatBot AI giúp tôi bán hàng như thế nào?
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  ChatBot AI tự động giao tiếp với khách hàng, giải đáp thắc mắc, và thuyết phục khách hàng mua hàng, giúp tăng tỷ lệ chuyển đổi và doanh thu.
                </p>
              </div>
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2 sm:mb-4">
                  ChatBot AI có thể tích hợp với nền tảng khác không?
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  ChatBot AI có thể dễ dàng tích hợp với các nền tảng như Facebook, Zalo, và Website của bạn để quản lý và chăm sóc khách hàng trên nhiều kênh khác nhau.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4 sm:mb-6">
              Đánh giá từ khách hàng
            </h2>
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2 sm:mb-4">
                  "ChatBot AI đã giúp chúng tôi tăng trưởng doanh thu vượt bậc"
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Sử dụng ChatBot AI, chúng tôi đã nhận được phản hồi tích cực từ khách hàng và chứng kiến doanh thu tăng mạnh. Quá trình tương tác với khách hàng trở nên nhanh chóng và hiệu quả hơn bao giờ hết.
                </p>
                <p className="font-semibold text-gray-900 mt-2 sm:mt-4 text-sm sm:text-base">Nguyễn Văn A, CEO của ABC Corp.</p>
              </div>
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2 sm:mb-4">
                  "Hỗ trợ tuyệt vời và dễ sử dụng"
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Dịch vụ hỗ trợ rất tuyệt vời và giao diện sử dụng của ChatBot AI cực kỳ thân thiện. Nó giúp chúng tôi tiết kiệm thời gian và tăng trải nghiệm khách hàng.
                </p>
                <p className="font-semibold text-gray-900 mt-2 sm:mt-4 text-sm sm:text-base">Trần Thị B, Giám đốc Kinh doanh</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4 sm:mb-6">
              Liên hệ và Hỗ trợ
            </h2>
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2 sm:mb-4">
                Liên hệ chúng tôi
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                Để biết thêm thông tin hoặc có bất kỳ câu hỏi nào, vui lòng liên hệ với chúng tôi qua các kênh dưới đây:
              </p>
              <ul className="space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
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
}

export default AboutPage;
