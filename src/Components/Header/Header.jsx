import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { FaUserGraduate, FaUniversity } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import Hlogo from "./../../assets/UI/hlogo.png";

const Navbar = ({ isContactPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);
  const closeTimeoutRef = useRef(null);
  const location = useLocation();

  // Unlock scroll on route change and close menus
  useEffect(() => {
    document.body.classList.remove("overflow-hidden");
    setIsOpen(false);
    setActiveSubMenu(null);
    setIsProgramsOpen(false);
    setIsOnboardingOpen(false);
  }, [location]);

  // Lock body scroll when dropdown open (desktop)
  useEffect(() => {
    if (isProgramsOpen || isOnboardingOpen || isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isProgramsOpen, isOnboardingOpen, isOpen]);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const handleDropdownEnter = (setter) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    if (setter === setIsProgramsOpen) setIsOnboardingOpen(false);
    if (setter === setIsOnboardingOpen) setIsProgramsOpen(false);
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
    { title: "Colleges", to: "/college-onboarding", icon: <FaUniversity className="text-3xl text-yellow-500 mr-2" /> },
    { title: "Students", to: "/student-onboarding", icon: <FaUserGraduate className="text-3xl text-yellow-500 mr-2" /> },
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

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center space-x-12 text-white text-md font-medium">
        {/* Programs Dropdown */}
        <div
          className="relative group cursor-pointer"
          onMouseEnter={() => handleDropdownEnter(setIsProgramsOpen)}
          onMouseLeave={() => handleDropdownLeave(setIsProgramsOpen)}
        >
          <span className="hover:underline">Programs ▾</span>
          <div
            className={`absolute top-full left-0 w-96 bg-white text-gray-700 font-poppins shadow-2xl z-30 overflow-y-auto max-h-[70vh] transition-all duration-200
              ${isProgramsOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"}`}
          >
            <div className="px-6 py-6 grid grid-cols-1 gap-4">
              {Object.entries(programs).map(([key, list], i) => (
                <div key={i}>
                  <h3 className="font-bold text-yellow-400 mb-2">{key}</h3>
                  <ul className="space-y-2">
                    {list.map((item) => (
                      <li key={item.title}>
                        <Link to={item.to} className="hover:text-yellow-500 hover:underline" onClick={() => setIsProgramsOpen(false)}>
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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
            className={`absolute top-full left-0 w-64 bg-white text-gray-700 font-poppins shadow-2xl z-30 overflow-y-auto max-h-[40vh] transition-all duration-200
              ${isOnboardingOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"}`}
          >
            <ul className="p-4 space-y-2">
              {onboardingLinks.map((link) => (
                <li key={link.title}>
                  <Link to={link.to} className="flex items-center space-x-2 hover:text-yellow-500 hover:underline" onClick={() => setIsOnboardingOpen(false)}>
                    {link.icon} <span>{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Other links */}
        <Link to="/franchise" className="hover:underline">Franchise</Link>
        <Link to="/hireus" className="hover:underline">Hires from us</Link>
        <Link to="/about" className="hover:underline">About</Link>
      </nav>

      {/* CTA Desktop */}
      <Link to="/contact">
        <button className="hidden md:block bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold shadow-md hover:bg-yellow-500 transition">
          Enroll Now
        </button>
      </Link>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(true)}>
          <HiMenu className="text-3xl text-white" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full max-w-sm bg-black/95 text-white p-6 z-50"
          >
            <div className="flex justify-between items-center mb-6">
              <button onClick={() => setIsOpen(false)}>
                <HiX className="text-3xl" />
              </button>
            </div>

            {/* Main Mobile Menu */}
            {!activeSubMenu && (
              <ul className="flex flex-col space-y-6 text-xl font-medium">
                <li>
                  <button onClick={() => handleToggle("programs")} className="w-full text-left hover:underline">
                    Programs ▾
                  </button>
                </li>
                <li>
                  <button onClick={() => handleToggle("onboarding")} className="w-full text-left hover:underline">
                    Onboarding ▾
                  </button>
                </li>
                <li>
                  <Link to="/franchise" onClick={() => setIsOpen(false)} className="hover:underline">Franchise</Link>
                </li>
                <li>
                  <Link to="/hireus" onClick={() => setIsOpen(false)} className="hover:underline">Hires from us</Link>
                </li>
                <li>
                  <Link to="/about" onClick={() => setIsOpen(false)} className="hover:underline">About</Link>
                </li>
                <li className="mt-6">
                  <Link to="/contact">
                    <button className="bg-yellow-400 text-black w-full px-4 py-3 rounded-full font-semibold hover:bg-yellow-500 transition">
                      Enroll Now
                    </button>
                  </Link>
                </li>
              </ul>
            )}

            {/* Submenus (scrollable) */}
            {activeSubMenu === "programs" && (
              <div className="flex flex-col h-full">
                <button onClick={() => setActiveSubMenu(null)} className="mb-4 text-yellow-400 font-semibold">← Back</button>
                <div className="flex-1 overflow-y-auto max-h-[80vh] pr-2">
                  {Object.entries(programs).map(([key, list]) => (
                    <div key={key} className="mb-4">
                      <h3 className="font-bold text-yellow-400 mb-2">{key}</h3>
                      <ul className="space-y-2">
                        {list.map((item) => (
                          <li key={item.title}>
                            <Link to={item.to} onClick={() => setIsOpen(false)} className="block p-2 rounded hover:bg-gray-800">
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSubMenu === "onboarding" && (
              <div className="flex flex-col h-full">
                <button onClick={() => setActiveSubMenu(null)} className="mb-4 text-yellow-400 font-semibold">← Back</button>
                <div className="flex-1 overflow-y-auto max-h-[80vh] pr-2">
                  <ul className="flex flex-col space-y-4">
                    {onboardingLinks.map((link) => (
                      <li key={link.title}>
                        <Link to={link.to} onClick={() => setIsOpen(false)} className="flex items-center space-x-2 p-2 rounded hover:bg-gray-800">
                          {link.icon} <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
