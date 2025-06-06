import { testimonials } from "../data/testimonials";
import HexagonGrid from "../components/HexagonGrid";
import SEO from "../components/SEO";

const Testimonials = () => {
  return (
    <>
      <SEO
        title="Testimonials - St. Jude Career Alliance"
        description="Read inspiring testimonials from our community members who have found support and success through St. Jude Career Alliance."
        image="https://stjudecareeralliance.com/assets/og-image.png"
        url="https://stjudecareeralliance.com/testimonials"
      />
      <HexagonGrid />
      <main className="p-5 animateFadeIn" role="main">
        <h1 className="text-4xl md:text-5xl font-bold text-darkBlue font-sans mb-4 sm:text-3xl text-center">
          What Our Community Says
        </h1>
        <section
          className="flex flex-wrap py-20 justify-center gap-8 text-center"
          aria-label="Testimonials"
        >
          {testimonials.map((t, index) => (
            <figure
              key={index}
              className="w-[40rem] min-h-[16rem] bg-white p-4 border-y-3 border-y-[#a4e473] rounded-lg shadow-md text-teal-800 text-base leading-relaxed flex items-center justify-center relative before:content-[''] before:absolute before:top-2 before:left-2 before:w-12 before:h-12 before:bg-[url('https://img.icons8.com/ios-filled/100/F0F0F0/quote-left.png')] before:bg-no-repeat before:bg-contain before:opacity-70 before:z-0 after:content-[''] after:absolute after:bottom-2 after:right-2 after:w-12 after:h-12 after:bg-[url('https://img.icons8.com/ios-filled/100/F0F0F0/quote-right.png')] after:bg-no-repeat after:bg-contain after:opacity-70 after:z-0 md:w-[32rem] max-sm:w-[90%] max-sm:min-h-[12rem] max-sm:p-3 mx-auto max-sm:before:w-8 max-sm:before:h-8 max-sm:before:top-1 max-sm:before:left-1 max-sm:after:w-8 max-sm:after:h-8 max-sm:after:bottom-1 max-sm:after:right-1"
            >
              <blockquote className="relative z-10 mb-8">
                <p className="text-base text-teal-800 leading-relaxed mb-4">
                  {t.content}
                </p>
                <figcaption className="font-semibold text-teal-900">
                  <cite className="not-italic">{t.name}</cite>
                  <div className="text-sm text-teal-800">{t.role}</div>
                </figcaption>
              </blockquote>
            </figure>
          ))}
        </section>
      </main>
    </>
  );
};

export default Testimonials;
