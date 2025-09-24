import React, { useState, useEffect, useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Hlogo from "./../../assets/UI/hlogo.png";
import { Link } from "react-router-dom";
import { FaUserGraduate, FaUniversity } from "react-icons/fa"; // Make sure to import these

const Navbar = ({ isContactPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    if (isProgramsOpen || isOnboardingOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isProgramsOpen, isOnboardingOpen]);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const handleDropdownEnter = (setter) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    
    if (setter === setIsProgramsOpen) {
      setIsOnboardingOpen(false);
    } else if (setter === setIsOnboardingOpen) {
      setIsProgramsOpen(false);
    }

    setter(true);
  };

  const handleDropdownLeave = (setter) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setter(false);
      closeTimeoutRef.current = null;
    }, 120);
  };

  const programs = {
    sparkLearn: [
      { title: "MERN", to: "/mern-fullstack" },
      { title: "MEAN", to: "/mern-fullstack" },
      { title: "AI", to: "/ai-fullstack" },
      { title: "Flutter", to: "/flutter-fullstack" },
      { title: "Java", to: "/java-fullstack" },
      { title: "Python", to: "/python-fullstack" },
      { title: "DevOps", to: "/devops" },
      { title: "Software Testing", to: "/software-testing" },
      { title: "UI/UX Design", to: "/ui-ux-design" },
      { title: "Digital Marketing", to: "/digital-marketing" },
    ],
    elevate: [
      { title: "MERN/ MEAN Full Stack Development", to: "/mern-fullstack" },
      { title: "AI Full Stack Development", to: "/ai-fullstack" },
      { title: "Flutter Full Stack Development", to: "/flutter-fullstack" },
      { title: "Java Full Stack Development", to: "/java-fullstack" },
      { title: "Python Full Stack Development", to: "/python-fullstack" },
      { title: "DevOps", to: "/devops" },
      { title: "Software Testing", to: "/software-testing" },
      { title: "UI/UX Design", to: "/ui-ux-design" },
      { title: "Digital Marketing", to: "/digital-marketing" },
    ],
    deployEdge: [
      { title: "MERN Full Stack Development", to: "/mern-fullstack" },
      { title: "MEAN Full Stack Development", to: "/mern-fullstack" },
      { title: "AI Full Stack Development", to: "/ai-fullstack" },
      { title: "Flutter Full Stack Development", to: "/flutter-fullstack" },
      { title: "Java Full Stack Development", to: "/java-fullstack" },
      { title: "Python Full Stack Development", to: "/python-fullstack" },
    ],
  };

  const onboardingLinks = [
    { title: "Colleges", to: "/college-onboarding", icon: <FaUniversity className="text-4xl text-yellow-500 mb-2" /> },
    { title: "Students", to: "/student-onboarding", icon: <FaUserGraduate className="text-4xl text-yellow-500 mb-2" /> },
  ];

  const handleToggle = (menu) => {
    setActiveSubMenu(activeSubMenu === menu ? null : menu);
  };

  return (
    <header className={`w-full flex justify-between items-center px-6 md:px-24 py-6 z-20 ${isContactPage ? 'bg-gray-800' : 'absolute'}`}>
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Link to="/">
          <img src={Hlogo} alt="Pixla Academy" className="h-14" />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-12 text-white text-md font-medium">
        {/* Programs Dropdown */}
        <div
          className="relative group cursor-pointer"
          onMouseEnter={() => handleDropdownEnter(setIsProgramsOpen)}
          onMouseLeave={() => handleDropdownLeave(setIsProgramsOpen)}
        >
          <span className="hover:underline">Programs ▾</span>
          <div
            className={`fixed top-[80px] left-0 w-full h-[calc(90vh-80px)]
              bg-white text-[#707070] font-poppins shadow-2xl z-30 overflow-y-auto
              transition-all duration-200
              ${isProgramsOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"}
            `}
          >
            <div className="max-w-7xl mx-auto px-12 py-12 grid grid-cols-3 gap-8 h-full">
              {/* 1. Pixla Spark & Learn */}
              <div>
                <h3 className="font-bold text-lg md:text-xl text-yellow-400 mb-4">
                  1. Pixla Spark & Pixla Learn
                </h3>
                <ul className="space-y-3 text-sm md:text-md ">
                  {programs.sparkLearn.map((item) => (
                    <li key={item.title} className="list-disc list-inside text-black">
                      <Link
                        to={item.to}
                        className="hover:text-yellow-500 text-black hover:underline"
                        onClick={() => setIsProgramsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 2. Pixla Elevate */}
              <div className="border-l border-gray-300 pl-8">
                <h3 className="font-bold text-lg md:text-xl text-yellow-400 mb-4">2. Pixla Elevate</h3>
                <ul className="space-y-3 text-sm">
                  {programs.elevate.map((item) => (
                    <li key={item.title} className="list-disc text-black list-inside">
                      <Link
                        to={item.to}
                        className="hover:text-yellow-500 text-black hover:underline"
                        onClick={() => setIsProgramsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3. Pixla Deploy & Edge */}
              <div className="border-l border-gray-300 pl-8">
                <h3 className="font-semibold text-lg md:text-xl text-yellow-400 mb-4">
                  3. Pixla Deploy & Pixla Edge
                </h3>
                <ul className="space-y-3 text-sm">
                  {programs.deployEdge.map((item) => (
                    <li key={item.title} className="list-disc text-black list-inside">
                      <Link
                        to={item.to}
                        className="hover:text-yellow-500 text-black hover:underline"
                        onClick={() => setIsProgramsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Onboarding Dropdown */}
        <div
          className="relative group cursor-pointer"
          onMouseEnter={() => handleDropdownEnter(setIsOnboardingOpen)}
          onMouseLeave={() => handleDropdownLeave(setIsOnboardingOpen)}
        >
          <span className="hover:underline">Onboarding ▾</span>
          <div
            className={`fixed top-[80px] left-0 w-full h-[calc(40vh-80px)]
              bg-white text-[#707070] font-poppins shadow-2xl z-30 overflow-y-auto
              transition-all duration-200
              ${isOnboardingOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"}
            `}
          >
            <div className="max-w-7xl mx-auto px-12 py-12 grid grid-cols-2 gap-8 h-full">
              <div>
                <h3 className="font-bold text-lg md:text-xl text-yellow-400 mb-4">
                  Onboarding
                </h3>
                <ul className="space-y-3 text-sm md:text-md">
                  {onboardingLinks.map((link) => (
                    <li key={link.title} className="list-disc list-inside text-black">
                      <Link
                        to={link.to}
                        className="hover:text-yellow-500 hover:underline"
                        onClick={() => setIsOnboardingOpen(false)}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Other links remain the same */}
        <Link to="/franchise" className="hover:underline">
          Franchise
        </Link>
        <Link to="/hireus" className="hover:underline">
          Hires from us
        </Link>
        <Link to="/about" className="hover:underline">
          About
        </Link>
      </nav>

      {/* CTA Button (Desktop) */}
      <Link to={"/contact"}>
      <button className="hidden md:block bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold shadow-md hover:bg-yellow-500 transition">
        Enroll Now
      </button></Link>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(true)}>
          <HiMenu className="text-3xl text-white" />
        </button>
      </div>

      {/* Mobile Menu Overlay (unchanged) */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-black/90 text-white p-6  md:hidden z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img src={Hlogo} alt="Pixla Academy" className="h-14" />
          </Link>
          <button onClick={() => setIsOpen(false)}>
            <HiX className="text-3xl" />
          </button>
        </div>

        {/* Main Mobile Menu */}
        {!activeSubMenu && (
          <ul className="flex flex-col space-y-6 text-xl font-medium">
            <li>
              <button
                onClick={() => handleToggle("programs")}
                className="w-full text-left hover:underline"
              >
                Programs ▾
              </button>
            </li>
            <li>
              <button
                onClick={() => handleToggle("onboarding")}
                className="w-full text-left hover:underline"
              >
                Onboarding ▾
              </button>
            </li>
            <li>
              <Link
                to="/franchise"
                className="hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Franchise
              </Link>
            </li>
            <li>
              <Link
                to="/hireus"
                className="hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Hires from us
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:underline"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <div className="mt-8">
           <Link to={"/contact"}>       
                     <button className="bg-yellow-400 text-black w-full px-4 py-3 rounded-full font-semibold hover:bg-yellow-500 transition">
                Enroll Now
              </button></Link>


            </div>
          </ul>
        )}

        {/* Programs Sub-Menu (Mobile) */}
        {activeSubMenu === "programs" && (
          <div className="flex flex-col h-full">
            <button
              onClick={() => setActiveSubMenu(null)}
              className="mb-4 text-sm text-yellow-400 flex items-center"
            >
              ← Back to Menu
            </button>

            {/* Scrollable container */}
            <div className="flex-1 overflow-y-auto pr-2">
              <div className="border-b border-gray-700 pb-4">
                <h3 className="font-bold text-lg mb-2 text-yellow-400">Pixla Learn</h3>
                <ul className="space-y-2 text-sm">
                  {programs.sparkLearn.map((program) => (
                    <li key={program.title}>
                      <Link
                        to={program.to}
                        onClick={() => setIsOpen(false)}
                        className="block p-2 rounded hover:bg-gray-800"
                      >
                        {program.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-b border-gray-700 pb-4 mt-4">
                <h3 className="font-bold text-lg mb-2 text-yellow-400">Pixla Elevate</h3>
                <ul className="space-y-2 text-sm">
                  {programs.elevate.map((program) => (
                    <li key={program.title}>
                      <Link
                        to={program.to}
                        onClick={() => setIsOpen(false)}
                        className="block p-2 rounded hover:bg-gray-800"
                      >
                        {program.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h3 className="font-bold text-lg mb-2 text-yellow-400">
                  Pixla Deploy & Edge
                </h3>
                <ul className="space-y-2 text-sm">
                  {programs.deployEdge.map((program) => (
                    <li key={program.title}>
                      <Link
                        to={program.to}
                        onClick={() => setIsOpen(false)}
                        className="block p-2 rounded hover:bg-gray-800"
                      >
                        {program.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Onboarding Sub-Menu */}
        {activeSubMenu === "onboarding" && (
          <div>
            <button
              onClick={() => setActiveSubMenu(null)}
              className="mb-4 text-sm text-yellow-400 flex items-center"
            >
              ← Back to Menu
            </button>
            <ul className="flex flex-col space-y-4 text-sm font-medium">
              {onboardingLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className="block p-2 rounded hover:bg-gray-800"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;