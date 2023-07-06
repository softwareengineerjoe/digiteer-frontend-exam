import create from "../assets/heros/create.png";
import host from "../assets/heros/host.png";
import hero2 from "../assets/heros/hero-2.png";

export default function Features2() {
  return (
    <section className="flex flex-col gap-16 items-center">
      <h2 className="font-[700] text-[#333333] text-center w-full text-2xl">
        Still more?{" "}
        <a href="/" className="underline text-[#3A5AFF] font-[700]">
          Take a look to our featured games
        </a>
      </h2>
      <div className="relative flex items-center justify-center">
        <h2 className="font-[800] text-[#2F281E] text-3xl z-20">
          How does Kurtis work?
        </h2>
        <div className="border-b-8 w-24 absolute top-8 border-[#3A5AFF] z-10"></div>
      </div>

      <section className="flex flex-row-reverse">
        <div className="flex flex-col gap-8 w-1/2">
          <div className="flex flex-col gap-2">
            <h2 className="font-[800] text-[#2F281E] text-2xl">Create</h2>
            <p className="font-[500] text-[#544837] w-4/5 text-xl">
              It only takes minutes to create a learning game or trivia quiz on
              any topic, in any language.
            </p>
          </div>
        </div>
        <div className="w-1/2 my-auto">
          <img src={create} alt="" className="h-[400px]" />
        </div>
      </section>

      <section className="flex flex-row">
        <div className="flex flex-col gap-8 w-1/2">
          <div className="flex flex-col gap-2">
            <h2 className="font-[800] text-[#2F281E] text-2xl">
              Host or Share
            </h2>
            <p className="font-[500] text-[#544837] w-4/5 text-xl">
              It only takes minutes to create a learning game or trivia quiz on
              any topic, in any language.
            </p>
          </div>
        </div>
        <div className="w-1/2 my-auto">
          <img src={host} alt="" className="h-[400px]" />
        </div>
      </section>

      <section className="flex flex-row-reverse">
        <div className="flex flex-col gap-8 w-1/2">
          <div className="flex flex-col gap-2">
            <h2 className="font-[800] text-[#2F281E] text-2xl">Play</h2>
            <p className="font-[500] text-[#544837] w-4/5 text-xl">
              It only takes minutes to create a learning game or trivia quiz on
              any topic, in any language.
            </p>
          </div>
        </div>
        <div className="w-1/2 my-auto">
          <img src={hero2} alt="" className="h-[400px]" />
        </div>
      </section>
    </section>
  );
}
