import CtaButton from "./CtaButton";

// Static workshop data (replace with actual data or import from a file)
const staticWorkshop = {
  id: 1,
  excerpt:
    "Join us for our upcoming quarterly workshop and take the first step towards a fulfilling career.",
};

const Hero = () => {
  return (
    <section className="flex justify-between items-stretch bg-gradient-to-br from-[#23446d] via-[#006f7f] to-[#00a181] text-white p-0 relative animateFadeIn min-h-[28rem] overflow-hidden shine-effect">
      <div className="max-w-[55%] p-[4.5rem] box-border">
        <h1 className="text-4xl sm:text-5xl font-bold font-poppins text-white mb-4">
          Grow Your Career with Faith & Community
        </h1>
        <p className="text-lg text-gray-200 mb-8 leading-relaxed">
          At St. Jude Career Alliance, our church ministry offers hope,
          guidance, and practical tools to help you find meaningful work and
          thrive in your career. Join our supportive community today!
        </p>
        <CtaButton to={`/workshop`}>Join Our Next Workshop</CtaButton>
      </div>
      <div className="w-[40rem] h-[40rem] clipHexagonHero bgLime50080 flex justify-center absolute z-10 right-[-60px] top-1/2 -translate-y-1/2">
        <div className="absolute inset-4 clipHexagonHero bgTeal50080 z-[-1]" />
        <div className="flex flex-col justify-center items-end max-w-[18.75rem] py-5 pr-0 pl-8 text-right text-white z-20 -mr-20">
          <h4 className="text-xl font-semibold text-gray-100 uppercase mb-2">
            Upcoming Workshop
          </h4>
          <p className="text-base text-gray-200 mb-6">
            {staticWorkshop.excerpt}
          </p>
          <CtaButton
            to={`/workshop/${staticWorkshop.id}`}
            variant="secondary"
            className="inline-block bg-gray-200 text-gray-800 px-6 py-2 rounded-full font-medium hover:bg-gray-300 hover:scale-105 transition-all duration-300"
            aria-label="Learn more about the upcoming workshop"
          >
            Learn More
          </CtaButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;
