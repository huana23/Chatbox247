import Partner1 from "../../../assets/images/partners/Partner1.svg";
import Partner2 from "../../../assets/images/partners/Partner2.svg";
import Partner3 from "../../../assets/images/partners/Partner3.svg";
import Partner4 from "../../../assets/images/partners/Partner4.jpg";
import Partner5 from "../../../assets/images/partners/Partner5.jpg";
import Partner6 from "../../../assets/images/partners/Partner6.jpg";

function SectionPartners() {
  const partners = [
    { name: "Meta", logo: Partner1 },
    { name: "Google", logo: Partner2 },
    { name: "OpenAI", logo: Partner3 },
    { name: "Izi-Sofr", logo: Partner4 },
    { name: "Happ-Mom", logo: Partner5 },
    { name: "An-Duong", logo: Partner6 },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 sm:px-8 lg:px-16">

        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 sm:mb-4">
            Hệ sinh thái đối tác mạnh mẽ
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-2">
            Chúng tôi xây dựng hệ sinh thái AI vững chắc thông qua hợp tác với các nền tảng công nghệ tiên phong, đảm bảo khả năng tích hợp linh hoạt và hiệu năng vượt trội.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-16 sm:h-20 md:h-24 bg-gray-50 rounded-xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-8 sm:max-h-10 md:max-h-12 object-contain transition-all duration-300 px-2"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default SectionPartners;
