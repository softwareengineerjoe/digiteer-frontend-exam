import logo from "../assets/logo-white.png";
// badges
import appStore from "../assets/badges/app-store.png";
import appGallery from "../assets/badges/app-gallery.png";
import googlePlay from "../assets/badges/google-play.png";
// socmeds
import facebook from "../assets/socmeds/facebook.png";
import twitter from "../assets/socmeds/twitter.png";
import linkedin from "../assets/socmeds/linkedin.png";
import tiktok from "../assets/socmeds/tiktok.png";

export default function Footer() {
  return (
    <div className="max-w-7xl mx-auto">
      <section className="flex justify-center flex-col-reverse lg:flex-row lg:gap-16 items-center text-white relative">
        <div className="flex flex-col gap-8">
          <img src={logo} alt="" className="h-auto" />

          <div className="flex gap-2 flex-col">
            <p className="font-[700] text-xs">Get the app:</p>
            <div className="grid grid-cols-3 lg:grid-cols-2 gap-1">
              <a href="">
                <img src={appStore} alt="" className="h-10" />
              </a>
              <a href="">
                <img src={appGallery} alt="" className="h-10" />
              </a>
              <a href="">
                <img src={googlePlay} alt="" className="h-10" />
              </a>
            </div>
          </div>

          <div className="flex gap-2 flex-col">
            <p className="font-[700] text-xs">Follow us:</p>
            <div className="grid grid-cols-7 md:grid-cols-9 lg:grid-cols-5 gap-4 md:gap-7">
              <a
                href=""
                className="rounded-full p-2 bg-white flex items-center justify-center"
              >
                <img src={linkedin} alt="" className="h-4" />
              </a>
              <a
                href=""
                className="rounded-full p-2 bg-white flex items-center justify-center"
              >
                <img src={facebook} alt="" className="h-4" />
              </a>
              <a
                href=""
                className="rounded-full p-2 bg-white flex items-center justify-center"
              >
                <img src={twitter} alt="" className="h-4" />
              </a>
              <a
                href=""
                className="rounded-full p-2 bg-white flex items-center justify-center"
              >
                <img src={tiktok} alt="" className="h-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 md:gap-8 lg:grid-cols-4 auto-cols-min pb-10 md:pb-14">
          <div className="flex flex-col gap-8">
            <h2 className="font-[700] text-sm">About</h2>
            <ul className="flex flex-col gap-4 text-sm">
              <li>
                <a href="">Company</a>
              </li>
              <li>
                <a href="">Leadership</a>
              </li>
              <li>
                <a href="">Jobs - HIRING</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">Press</a>
              </li>
              <li>
                <a href="">Investors</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="font-[700] text-sm">Solutions</h2>
            <ul className="flex flex-col gap-4 text-sm">
              <li>
                <a href="">At School</a>
              </li>
              <li>
                <a href="">At Work</a>
              </li>
              <li>
                <a href="">At Home</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="font-[700] text-sm">Resources</h2>
            <ul className="flex flex-col gap-4 text-sm">
              <li>
                <a href="">Study with Kurtis</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Kurtis Certified</a>
              </li>
              <li>
                <a href="">Help Center</a>
              </li>
              <li>
                <a href="">Library</a>
              </li>
              <li>
                <a href="">Shop</a>
              </li>
              <li>
                <a href="">Safety Center</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="font-[700] text-sm">Terms and Conditions</h2>
            <ul className="flex flex-col gap-4 text-sm">
              <li>
                <a href="">Terms and Conditions</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">US Privacy Laws</a>
              </li>
              <li>
                <a href="">Children's Privacy Policy</a>
              </li>
              <li>
                <a href="">Inclusion and Accessibility Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="absolute -bottom-8 lg:-bottom-4 lg:left-0 text-sm">
          Copyright @2020, Kurtis All rights reserved.
        </p>
      </section>
    </div>
  );
}
