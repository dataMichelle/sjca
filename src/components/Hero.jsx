import CtaButton from "./CtaButton";

// Static workshop data (replace with actual data or import from a file)
const staticWorkshop = {
  id: 1,
  excerpt:
    "Join us for our upcoming quarterly workshop and take the first step towards a fulfilling career.",
};

const Hero = () => {
  return (
    <section className="flex justify-between items-stretch bg-gradient-to-br from-white to-gray-100 text-gray-900 p-0 relative animateFadeIn min-h-[28rem] overflow-hidden">
      <div className="max-w-[55%] p-[4.5rem] box-border">
        {/* <h1 className=" text-[#264D7A] lg:text-5xl md:text-3xl sm:text-2xl">
          Welcome to St. Jude Career Alliance
        </h1> */}
        <h1 className=" text-[#264D7A] lg:text-5xl md:text-3xl sm:text-2xl">
          Transform Your Career with <br /> Faith-Based Support
        </h1>
        {/* <p className="mb-7 lg:text-lg md:text-sm">
          The St. Jude Career Alliance Ministry provides a Christian faith-based
          program to empower people who seek employment and the ability to
          thrive in their careers.
        </p> */}
        <p className="mb-7 lg:text-lg md:text-sm">
          Start your journey today with faith-driven career guidance, tools for
          success,
          <br /> and a supportive community that cares about your future.
        </p>
        <CtaButton to={`/workshop`}>Join Our Next Workshop</CtaButton>
      </div>
      <div className="w-[40rem] h-[40rem] clipHexagon bgLime50080 flex justify-center absolute z-10 right-[-60px] top-1/2 -translate-y-1/2">
        <div className="absolute inset-4 clipHexagon bgTeal50080 z-[-1]" />
        <div className="flex flex-col justify-center items-end max-w-[18.75rem] py-5 pr-0 pl-8 text-right text-gray-900 z-20 -mr-20">
          <h4 className="mb-1 mr-0 text-xl font-semibold uppercase text-gray-800 md:text-lg">
            Upcoming Workshop
          </h4>
          <p className="mb-5 mr-0 text-base md:text-sm">
            {staticWorkshop.excerpt}
          </p>
          <CtaButton to={`/workshop/${staticWorkshop.id}`} variant="secondary">
            Learn More
          </CtaButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;
