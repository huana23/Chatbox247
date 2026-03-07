import { useState } from "react";
import ImageContact from "../../../assets/images/contact-image.webp";
import emailjs from "@emailjs/browser";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
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
                    message: formData.message,
                },
                "0cApYYlfV6mjdqCXt"
            )
            .then(() => {
                alert("Gửi tin nhắn thành công!");

                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });
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
        <section id="contact" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">

                {/* Title */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                        Liên Hệ Với Chúng Tôi
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Hãy để lại thông tin và câu hỏi của bạn. Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.
                    </p>
                </div>

                <div className="flex flex-col-reverse lg:flex-row items-stretch">

                    {/* Image */}
                    <div className="lg:w-1/2 mb-12 lg:mb-0 hidden lg:block">
                        <img
                            src={ImageContact}
                            alt="Contact"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>

                    {/* Form */}
                    <div className="lg:w-1/2 lg:pl-12 flex items-center justify-center">
                        <div className="w-full">

                            <form
                                onSubmit={handleSubmit}
                                className="w-full max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
                            >

                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

                                    {/* Name */}
                                    <div>
                                        <label className="block text-lg font-semibold text-gray-700 mb-2">
                                            Tên của bạn
                                        </label>

                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Nhập tên của bạn"
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-lg font-semibold text-gray-700 mb-2">
                                            Email của bạn
                                        </label>

                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="Nhập email của bạn"
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        />
                                    </div>

                                </div>

                                {/* Message */}
                                <div className="mt-6">
                                    <label className="block text-lg font-semibold text-gray-700 mb-2">
                                        Tin nhắn của bạn
                                    </label>

                                    <textarea
                                        name="message"
                                        rows="6"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="Nhập tin nhắn của bạn"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    />
                                </div>

                                {/* Button */}
                                <div className="mt-6 text-center">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition disabled:opacity-50 cursor-pointer" 
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