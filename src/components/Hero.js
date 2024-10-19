export default function Hero() {
  return (
    <section
      id="#hero"
      className="bg-blue text-white flex h-96 items-center justify-center text-center"
    >
      <div className="mx-auto max-w-[800px] space-y-8">
        <h1 className="text-5xl">Welcome to Talent Thrive HR Company</h1>
        <p className="pb-10 text-2xl">
          Your partner in building a better workforce
        </p>
        <a
          href="#about"
          className="bg-slateBlue hover:bg-white hover:text-slateBlue translate-x-2 rounded-md px-10 py-2 text-2xl font-semibold duration-200 ease-out"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
