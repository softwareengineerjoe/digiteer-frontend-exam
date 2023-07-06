import AppStore from "../assets/badges/app-store.png";
import GooglePlay from "../assets/badges/google-play.png";
import Hero from "../assets/heros/hero.png";

export default function Stats() {
  return (
    <div className="flex flex-col gap-24">
      <section className="flex flex-row gap-6 justify-center items-center">
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
      <section className="flex flex-row-reverse items-center">
        <div className="flex flex-col gap-8 w-1/2">
          <h2 className="text-6xl font-[800] tracking-tight text-[#2F281E] max-w-lg leading-relaxed">
            Ready for make learning fun!
          </h2>

          <button className="w-2/5 bg-[#3A5AFF] text-white font-semibold text-center py-3 rounded">
            Sign up for free
          </button>
        </div>
        <div className="w-1/2 my-auto">
          <img src={Hero} alt="" className="w-11/12" />
        </div>
      </section>
    </div>
  );
}
