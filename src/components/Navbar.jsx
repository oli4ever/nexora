import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

import Button from "./Button";

const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

const NavBar = () => {
  // State for toggling audio, menu, and visual indicator
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Refs for audio and navigation container
  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle audio and visual indicator
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Manage audio playback
  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current?.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current?.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current?.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          {/* Logo and Product button */}
          <div className="flex items-center gap-7">
            <img
              src="/img/logo.png"
              alt="logo"
              className="object-contain"
              style={{ width: "60px", height: "60px" }}
            />

            <Button
              id="product-button"
              title="Explore Products"
              rightIcon={<TiLocationArrow className="text-teal-700" />}
              containerClass="flex items-center justify-center gap-1 bg-teal-400 hover:bg-teal-100 text-teal-700 px-4 py-2 rounded-full transition-colors duration-200 font-medium border border-teal-500/20"
            />
          </div>

          {/* Navigation Links, Audio Button, and Hamburger */}
          <div className="flex h-full items-center gap-6">
            {/* Desktop Navigation Links */}
            <div className="hidden lg:block">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="relative mx-4 font-medium text-teal-100/90 hover:text-teal-300 transition-colors duration-200 group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-300 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Audio Button - Always visible */}
            <button
              onClick={toggleAudioIndicator}
              className="ml-10 flex items-center space-x-0.5"
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={clsx("h-3 w-0.5 bg-teal-200", {
                    "animate-pulse": isIndicatorActive,
                  })}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}
                />
              ))}
            </button>
            {/* Mobile Hamburger Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-0.5 w-6 bg-gray-200 transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-gray-200 transition-all duration-300 mt-1 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-gray-200 transition-all duration-300 mt-1 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </header>
      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-[60px] left-0 w-full bg-black/90 backdrop-blur-lg border-t border-gray-700 z-40 shadow-2xl">
          <div className="flex flex-col py-4 mx-4">
            {navItems.map((item) => (
              <div
                key={item}
                className="flex items-center justify-center px-4 py-3 border-b border-gray-700/30 last:border-b-0"
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-lg cursor-pointer text-gray-300 hover:text-teal-300 transition-all duration-200 flex-1 text-center"
                >
                  {item}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30 top-[76px]"
          onClick={closeMenu}
        />
      )}
    </div>
  );
};

export default NavBar;
