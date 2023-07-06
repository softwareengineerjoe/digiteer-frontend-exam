import create from "../assets/heros/create.png";
import host from "../assets/heros/host.png";
import hero2 from "../assets/heros/hero-2.png";

export default function Features2() {
  return (
    <section className="flex flex-col gap-16 items-center">
      <h2 className="font-[700] text-[#333333] text-center w-full text-xl md:text-2xl">
        Still more?{" "}
        <a href="/" className="hover:opacity-90 transition ease-in underline text-[#3A5AFF] font-[700]">
          Take a look to our featured games
        </a>
      </h2>
      <div className="relative flex items-center justify-center">
        <h2 className="font-[800] text-[#2F281E] text-2xl md:text-3xl z-20">
          How does Kurtis work?
        </h2>
        <div className="border-b-8 w-24 absolute top-8 border-[#3A5AFF] z-10"></div>
      </div>

      <section className="flex flex-col-reverse gap-8 lg:gap-0 lg:flex-row-reverse">
        <div className="flex flex-col gap-8 lg:w-1/2">
          <div className="flex flex-col gap-2">
            <h2 className="font-[800] text-[#2F281E] text-xl md:text-2xl">Create</h2>
            <p className="font-[500] text-[#544837] indent-4 lg:indent-0 lg:w-4/5 text-lg md:text-xl text-justify lg:text-left">
              It only takes minutes to create a learning game or trivia quiz on
              any topic, in any language.
            </p>
          </div>
        </div>
        <div className="self-center lg:self-start lg:w-1/2">
          <img src={create} alt="" className="h-[400px]" />
        </div>
      </section>

      <section className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-0">
        <div className="flex flex-col gap-8 lg:w-1/2">
          <div className="flex flex-col gap-2">
            <h2 className="font-[800] text-[#2F281E] text-xl md:text-2xl">
              Host or Share
            </h2>
            <p className="font-[500] text-[#544837] indent-4 lg:indent-0 lg:w-4/5 text-lg md:text-xl text-justify lg:text-left">
              It only takes minutes to create a learning game or trivia quiz on
              any topic, in any language.
            </p>
          </div>
        </div>
        <div className="self-center lg:self-start lg:w-1/2">
          <img src={host} alt="" className="h-[400px]" />
        </div>
      </section>

      <section className="flex flex-col-reverse gap-8 lg:gap-0 lg:flex-row-reverse">
        <div className="flex flex-col gap-8 lg:w-1/2">
          <div className="flex flex-col gap-2">
            <h2 className="font-[800] text-[#2F281E] text-xl md:text-2xl">Play</h2>
            <p className="font-[500] text-[#544837] indent-4 lg:indent-0 lg:w-4/5 text-lg md:text-xl text-justify lg:text-left">
              It only takes minutes to create a learning game or trivia quiz on
              any topic, in any language.
            </p>
          </div>
        </div>
        <div className="self-center lg:self-start lg:w-1/2">
          <img src={hero2} alt="" className="h-[400px]" />
        </div>
      </section>
    </section>
  );
}
