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
            ? "-translate-y-0 transition-transform ease-in shadow bg-white"
            : "-translate-y-full transition-transform ease-in"
        }`}
      >
        <div className="flex w-full lg:justify-normal justify-center">
          <button onClick={() => goToPage("/")}>
            <img src={logo} alt="" className="h-10 my-6 lg:my-0" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-center md:justify-end items-center w-full gap-4">
          <button
            onClick={() => goToPage("../sign-up")}
            className="hover:opacity-90 transition ease-in rounded py-1.5 font-semibold text-white bg-[#3A5AFF] border-b-4 border-black w-full lg:w-24"
          >
            Sign up
          </button>
          <button
            onClick={() => goToPage("../log-in")}
            className="hover:opacity-90 transition ease-in text-gray-400 border-gray-400 font-semibold py-1.5 border-2 rounded w-full lg:w-24"
          >
            Log In
          </button>
        </div>
      </nav>
      <button
        className={`${
          isOpen ? "" : "hidden"
        } fixed top-0 left-0 z-10 w-full h-full text-black bg-transparent`}
        onClick={() => {
          setIsOpen(false);
        }}
      ></button>
    </>
  );
}

const navbar =
  "md:flex flex-col lg:flex-row justify-between w-full lg:mt-24 fixed lg:relative top-0 lg:max-w-7xl mx-auto items-center px-8 py-4 md:pt-0 lg:px-20 gap-6 z-20";
const navControl = "w-auto absolute top-4 left-4 lg:hidden";
