import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Chính sách bảo mật
          </h1>
          <p className="text-lg text-gray-600">
            Tìm hiểu về cách chúng tôi thu thập, sử dụng và bảo vệ thông tin của bạn.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Thông tin chúng tôi thu thập */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              1. Thông tin chúng tôi thu thập
            </h2>
            <ul className="text-lg text-gray-700 list-disc pl-8 space-y-4">
              <li>
                <strong>Thông tin cá nhân</strong>: Họ tên, email, số điện thoại, thông tin ngân hàng (phục vụ cho việc nạp/hoàn tiền).
              </li>
              <li>
                <strong>Thông tin đăng nhập</strong>: Tên người dùng, mật khẩu (được mã hoá).
              </li>
              <li>
                <strong>Thông tin liên kết Facebook</strong>: ID trang Fanpage, nội dung tin nhắn, tên khách hàng tương tác.
              </li>
              <li>
                <strong>Thông tin thanh toán</strong>: Lịch sử nạp tiền, số dư tài khoản, phương thức thanh toán.
              </li>
              <li>
                <strong>Thông tin kỹ thuật</strong>: Địa chỉ IP, loại thiết bị, trình duyệt, nhật ký hoạt động.
              </li>
            </ul>
          </section>

          {/* Mục đích sử dụng thông tin */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              2. Mục đích sử dụng thông tin
            </h2>
            <ul className="text-lg text-gray-700 list-disc pl-8 space-y-4">
              <li>Cung cấp và vận hành dịch vụ AI Agent cho khách hàng.</li>
              <li>Hỗ trợ kỹ thuật và chăm sóc khách hàng.</li>
              <li>Gửi thông báo quan trọng liên quan đến tài khoản, bảo mật hoặc cập nhật dịch vụ.</li>
              <li>Phân tích, cải thiện trải nghiệm người dùng và chất lượng hệ thống.</li>
              <li>Đảm bảo tuân thủ pháp luật và giải quyết tranh chấp (nếu có).</li>
            </ul>
          </section>

          {/* Bảo mật thông tin */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              3. Bảo mật thông tin
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Dữ liệu cá nhân của bạn được lưu trữ trên máy chủ bảo mật cao. Mọi thông tin nhạy cảm như mật khẩu và thông tin thanh toán đều được mã hoá. Chúng tôi áp dụng các biện pháp kỹ thuật và tổ chức để ngăn chặn truy cập trái phép, mất mát hoặc rò rỉ dữ liệu.
            </p>
          </section>

          {/* Chia sẻ thông tin với bên thứ ba */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              4. Chia sẻ thông tin với bên thứ ba
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              ChatBox AI không chia sẻ hoặc bán thông tin cá nhân của bạn cho bên thứ ba ngoại trừ trong các trường hợp:
            </p>
            <ul className="text-lg text-gray-700 list-disc pl-8 space-y-4">
              <li>Có sự đồng ý rõ ràng của bạn.</li>
              <li>Được yêu cầu bởi cơ quan chức năng theo quy định pháp luật.</li>
              <li>Cần thiết để thực hiện giao dịch thanh toán thông qua đối tác tài chính (ví dụ: ngân hàng, cổng thanh toán).</li>
            </ul>
          </section>

          {/* Bảo mật thông tin kinh doanh */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              5. Bảo mật thông tin kinh doanh và cam kết không cạnh tranh
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              ChatBox AI cam kết bảo mật tuyệt đối mọi thông tin kinh doanh của khách hàng, bao gồm nhưng không giới hạn: sản phẩm, giá bán, số lượng đơn hàng, doanh thu và lịch sử giao dịch.
            </p>
            <p className="text-lg text-gray-700">
              Các thông tin này chỉ được sử dụng nhằm mục đích cung cấp dịch vụ AI Agent và được bảo vệ theo cùng tiêu chuẩn như dữ liệu cá nhân. ChatBox AI không sử dụng dữ liệu kinh doanh của khách hàng để kinh doanh sản phẩm hoặc dịch vụ cạnh tranh trực tiếp, cũng như không tiếp cận khách hàng cuối của bạn cho mục đích thương mại.
            </p>
          </section>

          {/* Quyền của người dùng */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              6. Quyền của người dùng
            </h2>
            <ul className="text-lg text-gray-700 list-disc pl-8 space-y-4">
              <li>Yêu cầu xem, chỉnh sửa hoặc xoá thông tin cá nhân của mình.</li>
              <li>Yêu cầu xoá tài khoản hoặc ngừng sử dụng dịch vụ bất kỳ lúc nào.</li>
              <li>Gửi yêu cầu về quyền riêng tư đến email: cskh@diro.ai.</li>
            </ul>
          </section>

          {/* Cookie và công nghệ theo dõi */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              7. Cookie và công nghệ theo dõi
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              ChatBox AI có thể sử dụng cookie để:
            </p>
            <ul className="text-lg text-gray-700 list-disc pl-8 space-y-4">
              <li>Ghi nhớ đăng nhập của bạn.</li>
              <li>Phân tích hành vi sử dụng nhằm cải thiện dịch vụ.</li>
            </ul>
            <p className="text-lg text-gray-700">
              Bạn có thể từ chối cookie trong cài đặt trình duyệt, nhưng điều này có thể ảnh hưởng đến trải nghiệm sử dụng.
            </p>
          </section>

          {/* Cập nhật chính sách */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              8. Cập nhật chính sách
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Chúng tôi có thể cập nhật Chính sách bảo mật này theo thời gian. Mọi thay đổi sẽ được thông báo qua email hoặc trên website chính thức.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;