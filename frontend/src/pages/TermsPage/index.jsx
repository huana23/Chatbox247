import React from "react";

const TermsPage = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Điều khoản sử dụng
          </h1>
          <p className="text-lg text-gray-600">
            Các điều khoản và điều kiện sử dụng dịch vụ của ChatBox AI.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              1. Điều khoản chung
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Bằng việc truy cập và sử dụng dịch vụ của ChatBox AI, bạn đồng ý tuân thủ và chịu ràng buộc bởi các điều khoản và điều kiện sau đây.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              2. Tài khoản người dùng
            </h2>
            <ul className="text-lg text-gray-700 list-disc pl-8 space-y-4">
              <li>Bạn phải cung cấp thông tin chính xác và đầy đủ khi đăng ký tài khoản.</li>
              <li>Bạn chịu trách nhiệm bảo mật thông tin đăng nhập của mình.</li>
              <li>Mỗi tài khoản chỉ được sử dụng bởi một cá nhân/tổ chức.</li>
              <li>ChatBox AI có quyền từ chối hoặc chấm dứt tài khoản vi phạm điều khoản sử dụng.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              3. Sử dụng dịch vụ
            </h2>
            <ul className="text-lg text-gray-700 list-disc pl-8 space-y-4">
              <li>Sử dụng dịch vụ theo đúng mục đích và không vi phạm pháp luật.</li>
              <li>Không được sử dụng dịch vụ để gửi spam, nội dung xấu hoặc lừa đảo.</li>
              <li>Không được can thiệp vào hoạt động bình thường của hệ thống.</li>
              <li>Tuân thủ các quy định về bản quyền và sở hữu trí tuệ.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              4. Thanh toán và phí dịch vụ
            </h2>
            <ul className="text-lg text-gray-700 list-disc pl-8 space-y-4">
              <li>Phí dịch vụ được công bố trên website.</li>
              <li>ChatBox AI có quyền thay đổi phí dịch vụ với thông báo trước 14 ngày.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              5. Chính sách hoàn tiền
            </h2>
            <ul className="text-lg text-gray-700 list-disc pl-8 space-y-4">
              <li>Khách hàng có thể yêu cầu ChatBox AI hoàn lại tiền đã nạp bằng cách liên hệ chúng tôi qua email cskh@diro.ai.</li>
              <li>Tài khoản nhận lại tiền sẽ luôn là tài khoản đầu tiên khách hàng dùng để nạp tiền vào hệ thống.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              6. Giới hạn trách nhiệm
            </h2>
            <ul className="text-lg text-gray-700 list-disc pl-8 space-y-4">
              <li>ChatBox AI không chịu trách nhiệm về nội dung do người dùng tạo ra.</li>
              <li>Dịch vụ được cung cấp theo nguyên trạng và có thể bị gián đoạn.</li>
              <li>Không bảo đảm dịch vụ phù hợp với mọi mục đích sử dụng.</li>
              <li>Giới hạn trách nhiệm pháp lý theo quy định của pháp luật.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              7. Sở hữu trí tuệ
            </h2>
            <ul className="text-lg text-gray-700 list-disc pl-8 space-y-4">
              <li>Mọi quyền sở hữu trí tuệ liên quan đến dịch vụ thuộc về ChatBox AI.</li>
              <li>Người dùng không được sao chép, phân phối lại mã nguồn.</li>
              <li>Nội dung do người dùng tạo ra thuộc quyền sở hữu của họ.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              8. Chấm dứt dịch vụ
            </h2>
            <ul className="text-lg text-gray-700 list-disc pl-8 space-y-4">
              <li>ChatBox AI có quyền tạm ngừng hoặc chấm dứt dịch vụ khi vi phạm điều khoản.</li>
              <li>Người dùng có thể huỷ dịch vụ bất kỳ lúc nào.</li>
              <li>Sau khi chấm dứt, dữ liệu có thể bị xoá vĩnh viễn.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              9. Giải quyết tranh chấp
            </h2>
            <ul className="text-lg text-gray-700 list-disc pl-8 space-y-4">
              <li>Mọi tranh chấp sẽ được giải quyết thông qua thương lượng.</li>
              <li>Nếu không thể giải quyết, sẽ đưa ra toà án có thẩm quyền.</li>
              <li>Áp dụng luật pháp Việt Nam để giải quyết tranh chấp.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              10. Thay đổi điều khoản
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              ChatBox AI có quyền thay đổi điều khoản sử dụng này vào bất kỳ lúc nào. Những thay đổi sẽ có hiệu lực ngay khi được đăng tải. Việc tiếp tục sử dụng dịch vụ sau khi thay đổi đồng nghĩa với việc bạn chấp nhận điều khoản mới.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;