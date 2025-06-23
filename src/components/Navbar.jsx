import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, github, leetcode, linkedin, gfg_logo } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-start items-center max-w-7xl mx-auto gap-10'>
        <Link
          to='https://github.com/aryasoni28'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={github} alt='logo' className='w-9 h-9 object-contain' />
          
        </Link>
        <Link
          to='https://www.geeksforgeeks.org/user/aryarsoz37p/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={gfg_logo} alt='logo' className='w-9 h-9 object-contain' />
          
        </Link>
        <Link
          to='https://leetcode.com/u/De-leetcode/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={leetcode} alt='leetcode' className='w-9 h-9 object-contain' />
          
        </Link>
        <Link
          to='https://www.linkedin.com/in/arya-soni-8728252b7/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={linkedin} alt='logo' className='w-9 h-9 object-contain' />
          
        </Link>
        <a
    href="/Arya_Soni_Resume.pdf" // Path to your resume file in the public folder
    download="Arya_Soni_Resume.pdf"
    className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
  >
    <FaDownload size={16} className="inline" />
    <span className="inline"> Resume</span>
  </a>
      </div>
      

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      
    </nav>
  );
};

export default Navbar;
