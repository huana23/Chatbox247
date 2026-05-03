import {
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

function BlogPage() {
  return (
    <div className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 sm:px-8 lg:px-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-12 bg-white p-5 sm:p-6 md:p-8 rounded-lg shadow-xl space-y-8 sm:space-y-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-6">
              Hướng dẫn ra lệnh cho AI
            </h1>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
              Chào mừng bạn đến với bài viết hướng dẫn về cách ra lệnh cho AI. 
              Dưới đây là một số nguyên tắc và ví dụ giúp bạn tạo ra các lệnh hiệu quả cho AI.
            </p>

            <section>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4 sm:mb-6">
                Nguyên tắc chung khi viết lệnh cho AI
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                Viết lệnh càng rõ ràng, kết quả sẽ càng chính xác. Một lệnh không rõ ràng sẽ dẫn đến kết quả không mong muốn.
                Việc cung cấp thông tin đầy đủ và cụ thể giúp AI dễ dàng hiểu và thực hiện nhiệm vụ.
              </p>
            </section>

            <section>
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                1. Rõ ràng và cụ thể: Viết lệnh càng rõ thì kết quả càng chính xác.
              </h4>
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                Việc viết lệnh rõ ràng giúp AI dễ dàng hiểu và phản hồi chính xác hơn. Nếu lệnh mơ hồ, kết quả có thể không đúng như mong đợi.
              </p>

              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                <h5 className="font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center text-sm sm:text-base">
                  <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2" /> 
                  Ví dụ 1:
                </h5>
                <div className="space-y-2 text-gray-600 text-sm sm:text-base">
                  <p className="flex items-start">
                    <XCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                    "Nếu tổng đơn hàng trên 180000 VNĐ trở lên thì bạn có thể cân nhắc miễn phí ship cho khách nha"
                  </p>
                  <p className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    "Nếu tổng đơn hàng có giá trị từ 180000 VNĐ trở lên thì miễn phí ship (miễn phí giao hàng)"
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                2. Ví dụ về cách tính giá
              </h4>
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                Khi yêu cầu AI tính toán giá trị đơn hàng, hãy cung cấp các ví dụ chi tiết để AI hiểu rõ cách tính giá.
                Các ví dụ cụ thể giúp AI tính toán chính xác hơn và phản hồi một cách hiệu quả.
              </p>

              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                <h5 className="font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center text-sm sm:text-base">
                  <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2" /> 
                  Ví dụ về tính giá sản phẩm:
                </h5>
                <div className="space-y-2 text-gray-600 text-sm sm:text-base">
                  <p className="flex items-start">
                    <XCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                    "Giá sản phẩm như sau: Một chai dầu gió xanh có giá là 90000 VNĐ, Một chai dầu gió vàng có giá là 120000 VNĐ"
                  </p>
                  <p className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    "Giá sản phẩm như sau: Một chai dầu gió xanh có giá là 90000 VNĐ. Một chai dầu gió vàng có giá là 120000 VNĐ. Nếu khách hàng mua 1 chai dầu gió xanh và 1 chai dầu gió vàng, tổng giá trị đơn hàng là: 90000 + 120000 = 210000 VNĐ."
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                3. Cung cấp thông tin rõ ràng về các điều kiện và giới hạn
              </h4>
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                Hãy chắc chắn rằng lệnh của bạn cung cấp đầy đủ thông tin về các điều kiện hoặc giới hạn nếu có. Điều này sẽ giúp AI đưa ra phản hồi chính xác và đáp ứng được yêu cầu của bạn một cách hoàn hảo.
              </p>

              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                <h5 className="font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center text-sm sm:text-base">
                  <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2" /> 
                  Ví dụ về các điều kiện và giới hạn:
                </h5>
                <div className="space-y-2 text-gray-600 text-sm sm:text-base">
                  <p className="flex items-start">
                    <XCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                    "Nếu khách hàng mua ít hơn 500000 VNĐ, bạn không được miễn phí ship"
                  </p>
                  <p className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    "Nếu khách hàng mua từ 500000 VNĐ trở lên, bạn sẽ được miễn phí giao hàng."
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                4. Tránh sự mơ hồ và hiểu nhầm
              </h4>
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                Đảm bảo rằng không có sự mơ hồ trong lệnh của bạn. Điều này giúp AI hiểu rõ yêu cầu của bạn và trả về kết quả chính xác.
              </p>

              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                <h5 className="font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center text-sm sm:text-base">
                  <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2" /> 
                  Ví dụ về sự rõ ràng:
                </h5>
                <div className="space-y-2 text-gray-600 text-sm sm:text-base">
                  <p className="flex items-start">
                    <XCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                    "Cái giá này rất đắt"
                  </p>
                  <p className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    "Giá của sản phẩm là 90000 VNĐ mỗi chai."
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
