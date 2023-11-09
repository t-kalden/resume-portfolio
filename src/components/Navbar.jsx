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
    <FaBars color={iconColor} size={32} className="absolute right-8 top-6 z-10"/>
   </>
  );
}

export default Navbar;
