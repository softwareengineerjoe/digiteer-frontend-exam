import logo from "../assets/logo-white.png";
import arrow from "../assets/arrow.png";

export default function CTA() {
  return (
    <section className="flex justify-center flex-col gap-16 items-center">
      <img src={logo} alt="" />
      <form className="flex flex-col gap-4">
        <div className="relative">
          <input
            type="text"
            className="rounded-full py-3 px-5 font-[700]"
            placeholder="Write the Code here"
          />
          <button>
            <img src={arrow} alt="" className="absolute right-5 top-3 w-6" />
          </button>
        </div>
        <p className="font-[400] text-[#979797] text-center">
          or try with 1234
        </p>
      </form>
    </section>
  );
}
