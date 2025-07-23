import CtaButton from "./CtaButton";
import { upcomingWorkshops } from "../data/workshops";

const Hero = () => {
  return (
    <section className="flex justify-between items-stretch bg-gradient-to-br from-[#d6a335] via-[#006f7f] to-[#00a181] text-white p-0 relative animateFadeIn min-h-[28rem] overflow-hidden shine-effect">
      <div className="max-w-[55%] p-20 box-border">
        <h1 className="text-4xl sm:text-5xl font-bold font-poppins text-white mb-4">
          Grow Your Career with Faith & Community
        </h1>
        <p className="text-lg text-gray-200 mb-8 leading-relaxed">
          At St. Jude Career Alliance, our church ministry offers hope,
          guidance, and practical tools to help you find meaningful work and
          thrive in your career. Join our supportive community today!
        </p>
        <CtaButton to={`/workshop`} textColor="text-teal-950">
          Join Our Next Workshop
        </CtaButton>
      </div>
      <div className="w-[40rem] h-[40rem] clipHexagonHero bgLime50080 flex justify-center absolute z-10 right-[-60px] top-1/2 -translate-y-1/2">
        <div className="absolute inset-4 clipHexagonHero bg-[#dfd366] z-[-1]" />
        <div className="flex flex-col justify-center items-end  pr-0 pl-8 text-right z-20 -mr-20">
          {/* <FaCalendarPlus className="w-10 h-10 text-teal-700 animate-pulse  mb-5" /> */}
          <h2 className="text-2xl font-bold text-teal-900 uppercase my-2">
            Upcoming Workshop
          </h2>
          {upcomingWorkshops.length > 0 && (
            <p className="text-lg font-medium text-teal-800 italic mb-4">
              {upcomingWorkshops[0].date}
            </p>
          )}
          <CtaButton
            to={`/workshop/`}
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
