import book from "../assets/minis/book.png";
import paint from "../assets/minis/paint.png";
import phone from "../assets/minis/phone.png";
import sofa from "../assets/minis/sofa.png";

export default function Features() {
  return (
    <section className="flex flex-col items-center gap-16 relative">
      <h2 className="font-[800] text-[#2F281E] text-2xl md:text-3xl z-20">Who is Kurtis for?</h2>
      <div className="border-b-8 w-24 absolute top-8 border-[#3A5AFF] z-10"></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="max-w-xs flex flex-col gap-4">
          <div className="bg-[#3A5AFF] w-fit p-3 rounded-2xl">
            <img src={book} alt="" className="w-6" />
          </div>
          <p className="font-[600] text-[#2F281E]">At School</p>
          <p className="text-[#544837] w-56 font-[500] h-20">
            Engaging group and distance learning for teachers and students.
          </p>
          <p className="font-[600] text-[#544837]">Learn more</p>
        </div>

        <div className="max-w-xs flex flex-col gap-4">
          <div className="bg-[#FFC43B] w-fit p-3 rounded-2xl">
            <img src={paint} alt="" className="w-6" />
          </div>
          <p className="font-[600] text-[#2F281E]">At Work</p>
          <p className="text-[#544837] w-56 font-[500] h-20">
            For training, e-learning, interactive presentations and more.
          </p>
          <p className="font-[600] text-[#544837]">Learn more</p>
        </div>

        <div className="max-w-xs flex flex-col gap-4">
          <div className="bg-[#3CC5FF] w-fit p-3 rounded-2xl">
            <img src={sofa} alt="" className="w-6" />
          </div>
          <p className="font-[600] text-[#2F281E]">At Home</p>
          <p className="text-[#544837] w-56 font-[500] h-20">
            Apps and games for family fun or home study.
          </p>
          <p className="font-[600] text-[#544837]">Learn more</p>
        </div>

        <div className="max-w-xs flex flex-col gap-4">
          <div className="bg-[#FF3B53] w-fit p-3 rounded-2xl">
            <img src={phone} alt="" className="w-6" />
          </div>
          <p className="font-[600] text-[#2F281E]">Learning Apps</p>
          <p className="text-[#544837] w-56 font-[500] h-20">
            Engage kids with the Kahoot! Family of learning apps.
          </p>
          <p className="font-[600] text-[#544837]">Learn more</p>
        </div>
      </div>
      <button className="w-40 md:w-48 text-sm md:text-base uppercase border-b-4 border-black bg-[#3A5AFF] text-white font-semibold text-center py-3 rounded">
        sign up now
      </button>
    </section>
  );
}
