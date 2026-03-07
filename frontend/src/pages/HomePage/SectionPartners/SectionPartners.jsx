import Partner1 from "../../../assets/images/partners/Partner1.svg";
import Partner2 from "../../../assets/images/partners/Partner2.svg";
import Partner3 from "../../../assets/images/partners/Partner3.svg";

function SectionPartners() {
  const partners = [
    { name: "Meta", logo: Partner1 },
    { name: "Google", logo: Partner2 },
    { name: "OpenAI", logo: Partner3 },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Hệ sinh thái đối tác mạnh mẽ
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Chúng tôi xây dựng hệ sinh thái AI vững chắc thông qua hợp tác với các nền tảng công nghệ tiên phong, đảm bảo khả năng tích hợp linh hoạt và hiệu năng vượt trội.
          </p>
        </div>

        {/* Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="
                group
                flex items-center justify-center
                h-24
                bg-gray-50
                rounded-2xl
                border border-gray-100
                shadow-sm
                transition-all duration-300
                hover:shadow-lg hover:-translate-y-2
              "
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="
                  max-h-12 object-contain
                  grayscale opacity-70
                  transition-all duration-300
                  group-hover:grayscale-0 group-hover:opacity-100
                "
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default SectionPartners;