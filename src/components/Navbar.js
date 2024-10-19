import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";

const navLinks = [
  { nav: "home", link: "#hero" },
  { nav: "about", link: "#about" },
  { nav: "services", link: "#services" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex-1 md:ml-96">
      <ul className="hidden space-x-10 font-semibold md:flex lg:space-x-24">
        {navLinks.map((link, i) => (
          <li
            key={i}
            className="hover:text-lightSlate uppercase hover:underline"
          >
            <a href={link.link}>{link.nav}</a>
          </li>
        ))}
      </ul>

      {/* mobile responsiveness  */}
      <button
        className="bg-lightSlate text-darkSlate absolute right-2 top-3 z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <IoIosClose className="bg-white size-5 rounded-lg" />
        ) : (
          <IoMenuOutline className="bg-white size-5 rounded-lg" />
        )}
      </button>

      {isOpen ? (
        <ul className="bg-lightSlate absolute left-0 top-0 flex h-80 max-h-screen w-full flex-col items-center justify-center space-y-10 md:hidden">
          {navLinks.map((link, i) => (
            <li
              key={i}
              className="text-darkSlate hover:text-slateBlue z-50 uppercase hover:underline"
              onClick={() => setIsOpen(!isOpen)}
            >
              <a href={link.link}>{link.nav}</a>
            </li>
          ))}
        </ul>
      ) : null}
    </nav>
  );
}
