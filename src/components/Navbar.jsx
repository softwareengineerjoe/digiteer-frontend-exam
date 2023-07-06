import { useNavigate } from "react-router-dom";
import { LeftOutlined, MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const navigate = useNavigate();

  const goToPage = (path) => {
    navigate(path);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Controls */}
      <button className={navControl} onClick={toggleNavbar}>
        <MenuOutlined style={{ fontSize: "1.5rem" }} />
      </button>
      <nav
        className={`${navbar} ${
          isOpen
            ? "-translate-y-0 transition-transform ease-in"
            : "-translate-y-full transition-transform ease-in"
        }`}
      >
        <button onClick={() => goToPage("/")} className="flex-1">
          <img src={logo} alt="" className="h-10" />
          <span className="md:hidden">Home</span>
        </button>
        <div className="flex gap-4">
          <button
            onClick={() => goToPage("../sign-up")}
            className="rounded py-1.5 font-semibold text-white bg-[#3A5AFF] border-b-4 border-black w-24"
          >
            Sign up
          </button>
          <button
            onClick={() => goToPage("../log-in")}
            className="text-gray-400 border-gray-400 font-semibold py-1.5 border-2 rounded w-24"
          >
            Log In
          </button>
        </div>
      </nav>
      <button
        className={`${
          isOpen ? "" : "hidden"
        } absolute top-0 left-0 z-10 w-full h-full text-black bg-transparent`}
        onClick={() => {
          setIsOpen(false);
        }}
      ></button>
    </>
  );
}

const navbar =
  "lg:flex flex-col lg:flex-row justify-between w-full lg:mt-16 fixed lg:relative top-0 lg:max-w-7xl mx-auto items-center px-8 lg:px-20 gap-2 z-20";
const navControl = "w-auto absolute top-4 left-4 lg:hidden";
