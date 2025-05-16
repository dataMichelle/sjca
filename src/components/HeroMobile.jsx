import CtaButton from "./CtaButton";

// Static workshop data (replace with actual data or import from a file)
const staticWorkshop = {
  id: 1,
  excerpt:
    "Join us for our upcoming quarterly workshop and take the first step towards a fulfilling career.",
};

const HeroMobile = () => {
  return (
    <section className="bg-gradient-to-br from-white to-gray-100 text-gray-900 py-12 px-4 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-8">
        {/* Welcome Blurb */}
        <div>
          <h1 className="text-3xl font-bold text-[#264D7A] mb-4 sm:text-2xl">
            Welcome to St. Jude Career Alliance
          </h1>
          <p className="text-base mb-6 sm:text-sm">
            The St. Jude Career Alliance Ministry provides a Christian
            faith-based program to empower people who seek employment and the
            ability to thrive in their careers.
          </p>
        </div>

        {/* Workshop Info Div */}
        <div className="w-full bg-white p-6 rounded-lg shadow-md border-t-4 border-b-4 border-[#A8D5BA] sm:p-4">
          <h4 className="text-lg font-semibold uppercase text-gray-800 mb-3 sm:text-base">
            Upcoming Workshop
          </h4>
          <p className="text-base text-gray-600 mb-4 sm:text-sm">
            {staticWorkshop.excerpt}
          </p>
          <CtaButton to={`/workshop`} variant="secondary">
            Register Now
          </CtaButton>
        </div>
      </div>
    </section>
  );
};

export default HeroMobile;
