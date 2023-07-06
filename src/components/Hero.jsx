import AppStore from "../assets/badges/app-store.png";
import GooglePlay from "../assets/badges/google-play.png";
import Hero from "../assets/heros/hero.png";

export default function HeroSection() {
  return (
    <section className="flex flex-row items-center">
      <div className="flex flex-col gap-8 w-1/2">
        <h1 className="text-7xl font-[800] tracking-tight text-[#2F281E] max-w-lg">
          Make learning fun!
        </h1>
        <p className="text-[#544837] text-2xl tracking-wide">
          Any subject, in any language, on any device, for all ages!
        </p>
        <button className="w-2/5 bg-[#3A5AFF] text-white font-semibold text-center py-3 rounded">
          Sign up for free
        </button>
        <div className="flex flex-col gap-4">
          <p className="font-bold">Or download the app:</p>
          <div className="flex flex-row gap-2">
            <button>
              <img src={AppStore} alt="" srcset="" />
            </button>
            <button>
              <img src={GooglePlay} alt="" srcset="" />
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2 my-auto">
        <img src={Hero} alt="" className="w-11/12" />
      </div>
    </section>
  );
}
