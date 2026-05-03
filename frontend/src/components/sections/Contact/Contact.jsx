import { useState } from "react";
import ImageContact from "../../../assets/images/contact-image.webp";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    industry: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_taffl6x",
        "template_qya7hmi",
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          industry: formData.industry,
          message: formData.message,
        },
        "0cApYYlfV6mjdqCXt"
      )
      .then(() => {
        alert("Gửi tin nhắn thành công!");
        setFormData({ name: "", email: "", phone: "", industry: "", message: "" });
      })
      .catch((error) => {
        console.error("Email error:", error);
        alert("Có lỗi xảy ra khi gửi email!");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 sm:px-8 lg:px-16">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 sm:mb-4">
            Liên Hệ Với Chúng Tôi
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Hãy để lại thông tin và câu hỏi của bạn. Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.
          </p>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-stretch">
          <div className="lg:w-1/2 mb-8 sm:mb-12 lg:mb-0 hidden lg:block">
            <img src={ImageContact} alt="Contact" className="w-full h-full object-cover rounded-lg" />
          </div>

          <div className="lg:w-1/2 lg:pl-8 sm:pl-12 flex items-center justify-center">
            <div className="w-full">
              <form
                onSubmit={handleSubmit}
                className="w-full max-w-lg mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-lg"
              >
                <div className="grid grid-cols-1 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-base sm:text-lg font-semibold text-gray-700 mb-2">
                      Tên của bạn
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Nhập tên của bạn"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <label className="block text-base sm:text-lg font-semibold text-gray-700 mb-2">
                      Email của bạn
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Nhập email của bạn"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <label className="block text-base sm:text-lg font-semibold text-gray-700 mb-2">
                      Số điện thoại
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{9,11}"
                      title="Số điện thoại từ 9 đến 11 chữ số"
                      placeholder="Nhập số điện thoại"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <label className="block text-base sm:text-lg font-semibold text-gray-700 mb-2">
                      Ngành nghề cần tư vấn
                    </label>
                    <input
                      type="text"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      placeholder="Ví dụ: Spa, bán hàng online, du lịch..."
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div className="mt-4 sm:mt-6">
                  <label className="block text-base sm:text-lg font-semibold text-gray-700 mb-2">
                    Tin nhắn của bạn
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Nhập tin nhắn của bạn"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                  />
                </div>

                <div className="mt-6 text-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? "Đang gửi..." : "Gửi Tin Nhắn"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
