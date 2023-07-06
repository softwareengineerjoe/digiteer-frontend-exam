import logo from "../assets/logo-white.png";
import arrow from "../assets/arrow.png";

export default function CTA() {
  return (
    <section className="flex justify-center flex-col gap-12 md:gap-16 items-center">
      <img src={logo} alt=""/>
      <form className="flex flex-col gap-4">
        <div className="relative">
          <input
            type="text"
            className="rounded-full py-1 md:py-3 px-3 md:px-5 font-[700]"
            placeholder="Write the Code here"
          />
          <button>
            <img src={arrow} alt="" className="absolute right-3 top-2 md:right-5 md:top-3 w-4 md:w-6" />
          </button>
        </div>
        <p className="font-[400] text-[#979797] text-center">
          or try with 1234
        </p>
      </form>
    </section>
  );
}
