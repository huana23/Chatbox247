import { useState, useEffect } from "react";

function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Kiểm tra vị trí cuộn
    const checkScrollTop = () => {
        if (window.scrollY > 300) { // Hiển thị nút khi cuộn xuống 300px
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Cuộn về đầu trang
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Cuộn mượt
        });
    };

    // Lắng nghe sự kiện cuộn
    useEffect(() => {
        window.addEventListener("scroll", checkScrollTop);
        return () => {
            window.removeEventListener("scroll", checkScrollTop);
        };
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 p-3 bg-orange-500 text-white rounded-full shadow-lg transition-opacity duration-300 cursor-pointer ${
                isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transition: "opacity 0.3s" }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7-7-7 7"
                />
            </svg>
        </button>
    );
}

export default BackToTop;