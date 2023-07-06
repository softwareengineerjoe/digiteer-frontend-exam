import Hero from "../assets/heros/hero.png";

export default function Stats() {
  return (
    <div className="flex flex-col gap-10 md:gap-24">
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center">
        <div className="border-l-4 border-[#3A5AFF]">
          <p className="font-[800] text-[#333333] pl-1">
            More than 50% of US teachers are Kurtis
          </p>
        </div>

        <div className="border-l-4 border-[#3CC5FF]">
          <p className="font-[800] text-[#333333] pl-1">
            Players in more than 200 countries
          </p>
        </div>

        <div className="border-l-4 border-[#FF3B53]">
          <p className="font-[800] text-[#333333] pl-1">
            Over 30 million public games available
          </p>
        </div>

        <div className="border-l-4 border-[#FFC43B]">
          <p className="font-[800] text-[#333333] pl-1">
            97% of the Fortune 500 use Kurtis
          </p>
        </div>
      </section>
      <section className="flex md:flex-col-reverse lg:flex-row-reverse items-center md:gap-4 lg:gap-0">
        <div className="flex flex-col gap-8 lg:w-1/2">
          <h2 className="text-6xl font-[800] tracking-tight text-[#2F281E] max-w-lg leading-relaxed">
            Ready for make learning fun!
          </h2>

          <button className="hover:opacity-90 transition ease-in w-3/5 md:w-2/5 bg-[#3A5AFF] text-white font-semibold text-center py-3 rounded">
            Sign up for free
          </button>
        </div>
        <div className="lg:w-1/2 my-auto hidden md:block">
          <img src={Hero} alt="" className="w-11/12" />
        </div>
      </section>
    </div>
  );
}
