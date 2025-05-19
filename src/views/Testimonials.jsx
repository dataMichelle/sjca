import { testimonials } from "../data/testimonials";

const Testimonials = () => {
  return (
    <main className="p-5  animateFadeIn">
      <h1 className="text-xl font-bold font-poppins text-start mb-8 md:text-4xl ">
        What Our Community Says
      </h1>
      <div className="flex flex-wrap py-20 justify-center gap-8 text-center">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border-1 border-gray-200 p-6 max-w-[350px] w-full"
          >
            <p className="text-lg font-light text-gray-600 leading-relaxed mb-4">
              {t.content}
            </p>
            <div className="flex justify-center items-center gap-4">
              <div>
                <p className="text-xl font-semibold text-gray-800">{t.name}</p>
                <p className="text-base text-gray-600">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Testimonials;
