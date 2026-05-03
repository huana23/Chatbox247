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
            Các điều khoản và điều kiện khi sử dụng dịch vụ của ChatBox AI.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">

          {/* 1 */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              1. Điều khoản chung
            </h2>
            <p className="text-lg text-gray-700">
              Bằng việc truy cập và sử dụng dịch vụ của ChatBox AI, bạn đồng ý tuân thủ và chịu ràng buộc bởi các điều khoản và điều kiện được quy định trong tài liệu này.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              2. Tài khoản người dùng
            </h2>
            <ul className="text-lg text-gray-700 list-disc pl-8 space-y-4">
              <li>Bạn phải cung cấp thông tin chính xác và đầy đủ khi đăng ký tài khoản.</li>
              <li>Bạn chịu trách nhiệm bảo mật thông tin đăng nhập của mình.</li>
              <li>Mỗi tài khoản chỉ được sử dụng bởi một cá nhân hoặc tổ chức.</li>
              <li>ChatBox AI có quyền từ chối hoặc chấm dứt tài khoản nếu phát hiện vi phạm điều khoản sử dụng.</li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              3. Sử dụng dịch vụ
            </h2>
            <ul className="text-lg text-gray-700 list-disc pl-8 space-y-4">
              <li>Sử dụng dịch vụ đúng mục đích và không vi phạm pháp luật.</li>
              <li>Không sử dụng dịch vụ để gửi spam, nội dung độc hại hoặc lừa đảo.</li>
              <li>Không can thiệp hoặc làm gián đoạn hoạt động bình thường của hệ thống.</li>
              <li>Tuân thủ các quy định về bản quyền và sở hữu trí tuệ.</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              4. Thanh toán và phí dịch vụ
            </h2>
            <ul className="text-lg text-gray-700 list-disc pl-8 space-y-4">
              <li>Phí dịch vụ được công bố rõ ràng trên website.</li>
              <li>ChatBox AI có quyền thay đổi mức phí dịch vụ với thông báo trước tối thiểu 14 ngày.</li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              5. Chính sách hoàn tiền
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Khách hàng có thể yêu cầu hoàn lại tiền đã nạp bằng cách liên hệ với chúng tôi qua email:
              <strong> cskh@diro.ai</strong>.
            </p>
            <p className="text-lg text-gray-700">
              Tài khoản nhận lại tiền sẽ là tài khoản đầu tiên khách hàng đã sử dụng để nạp tiền vào hệ thống.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              6. Giới hạn trách nhiệm
            </h2>
            <ul className="text-lg text-gray-700 list-disc pl-8 space-y-4">
              <li>ChatBox AI không chịu trách nhiệm về nội dung do người dùng tạo ra.</li>
              <li>Dịch vụ được cung cấp theo nguyên trạng và có thể bị gián đoạn do các yếu tố kỹ thuật.</li>
              <li>Chúng tôi không đảm bảo dịch vụ phù hợp với mọi mục đích sử dụng.</li>
              <li>Trách nhiệm pháp lý được giới hạn theo quy định của pháp luật hiện hành.</li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              7. Sở hữu trí tuệ
            </h2>
            <ul className="text-lg text-gray-700 list-disc pl-8 space-y-4">
              <li>Mọi quyền sở hữu trí tuệ liên quan đến dịch vụ thuộc về ChatBox AI.</li>
              <li>Người dùng không được sao chép, phân phối lại mã nguồn hoặc công nghệ của hệ thống.</li>
              <li>Nội dung do người dùng tạo ra vẫn thuộc quyền sở hữu của người dùng.</li>
            </ul>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              8. Chấm dứt dịch vụ
            </h2>
            <ul className="text-lg text-gray-700 list-disc pl-8 space-y-4">
              <li>ChatBox AI có quyền tạm ngừng hoặc chấm dứt dịch vụ nếu phát hiện vi phạm điều khoản.</li>
              <li>Người dùng có thể hủy dịch vụ bất kỳ lúc nào.</li>
              <li>Sau khi chấm dứt, dữ liệu của tài khoản có thể bị xoá vĩnh viễn.</li>
            </ul>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              9. Giải quyết tranh chấp
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Mọi tranh chấp phát sinh sẽ được ưu tiên giải quyết thông qua thương lượng và hoà giải.
            </p>
            <p className="text-lg text-gray-700">
              Trong trường hợp không đạt được thoả thuận, tranh chấp sẽ được giải quyết tại toà án có thẩm quyền theo pháp luật Việt Nam.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              10. Thay đổi điều khoản
            </h2>
            <p className="text-lg text-gray-700">
              ChatBox AI có quyền thay đổi các điều khoản sử dụng vào bất kỳ thời điểm nào. Những thay đổi sẽ có hiệu lực ngay khi được đăng tải trên website. Việc tiếp tục sử dụng dịch vụ đồng nghĩa với việc bạn chấp nhận các điều khoản mới.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TermsPage;