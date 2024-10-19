export default function Services() {
  return (
    <section
      id="services"
      className="bg-lightSlate text-darkSlate space-y-6 px-8 py-16 text-center"
    >
      <h2 className="text-4xl font-semibold">Our Services</h2>
      <div className="flex flex-wrap justify-around gap-8 lg:gap-0">
        <div className="bg-white w-[300px] space-y-4 rounded-xl p-8 shadow-xl drop-shadow-xl">
          <h3 className="text-lg font-medium">Recruitment</h3>
          <p className="text-base font-normal">
            Finding the right talent to drive your business forward.
          </p>
        </div>
        <div className="bg-white w-[300px] space-y-4 rounded-xl p-8 shadow-xl drop-shadow-xl">
          <h3 className="text-lg font-medium">Training</h3>
          <p className="text-base font-normal">
            Developing your employees' skills and knowledge.
          </p>
        </div>
        <div className="bg-white w-[300px] space-y-4 rounded-xl p-8 shadow-xl drop-shadow-xl">
          <h3 className="text-lg font-medium">Consultancy</h3>
          <p className="text-base font-normal">
            Providing expert advice on HR strategies and policies.
          </p>
        </div>
      </div>
    </section>
  );
}
