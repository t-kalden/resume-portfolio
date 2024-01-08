import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
function Navbar() {
  const [ isMobile, setIsMobile ] = useState(window.innerWidth < 768)
  const [ color, setColor ] = useState('')

  const [ nav, setNav ] = useState(false);
  const [ showLink, setShowLink ] = useState(window.innerWidth < 768);

  const handleMobileResize = () => {
    if(window.innerWidth < 768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  };

  let iconColor = (isMobile) ? 'white' : 'black'

  const iconColorScheme = () => {
    setColor(prev => prev = iconColor)
  }

  useEffect(() => {
    window.addEventListener("resize", handleMobileResize);
    iconColorScheme()
  }, [isMobile]);

  const links = [
    { id: 1, link: "home", show: true },
    { id: 1, link: "about", show: true },
    { id: 1, link: "portfolio", show: true },
    { id: 1, link: "skills", show: true },
    { id: 1, link: "contact", show: true },
  ];

  return (
   <>
    <button size={32} className="absolute text-black-grey right-12 top-8 z-10 border-2 
    border-zinc-900 px-5 py-1 rounded-full font-maven hover:bg-black-grey hover:text-dark-white"> 
      MENU
    </button>
   </>
  );
}

export default Navbar;
