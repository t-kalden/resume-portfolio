import React, { useEffect, useState } from "react";
import IconLinkModule from "./IconLinkModule";

function LandingPage() {
  const [mobile, setMobile] = useState(window.innerWidth < 786);
  const [iconThemeLight, setIconThemeLight] = useState(window.innerWidth < 786);

  // const [ iconThemeColor, setIconThemeColor ] = useState('')

  const handleMobileResize = () => {
    if (window.innerWidth < 768) {
      setMobile(true);
      setIconThemeLight(true);
    } else {
      setMobile(false);
      setIconThemeLight(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleMobileResize);
  }, []);

  // console.log(mobile, iconThemeLight)
  return (
    <div
      className="landing-page-wrapper md:bg-white h-screen w-screen relative md:flex grid-cols-2"
      id="landing-page"
    >
      {/* landing- main intro */}
      <div className="left w-full md:w-1/2 bg-black-grey h-1/3 md:h-screen flex justify-center mt-28 md:mt-0">
        <div className="text-dark-white  md:w-1/2 content-center flex flex-col justify-center pt-10">
          <h3 className="text-2xl md:text-3xl font-zen">hi, i am</h3>
          <h1 className="text-5xl md:text-6xl w-300 font-maven font-medium">
            TENZIN
            <br />
            KALDEN
          </h1>
          <h3 className="text-2xl md:text-3xl font-zen">
            i am a{" "}
            <span style={{ whiteSpace: "nowrap" }}>Front End Developer</span>
          </h3>
        </div>
        
      </div>
        {
        (mobile) && 
          <div className="bg-black icon-link-module flex flex-col grid w-auto content-center py-12 justify-center ">
            <IconLinkModule iconTheme={iconThemeLight} />
          </div>
        }
      
      {/* About me section */}
      <div className="right right-0 w-full md:h-full md:w-1/2 bg-black-grey md:bg-dark-white md:h-screen flex flex-col items-center justify-center">
        <div className="about-container w-4/6 md:w-4/5 xl:w-3/5">
          <h3 className="text-4xl md:text-3xl text-white md:text-black font-zen">
            who i am...
          </h3>
          <p className="about-text text-md font-inter text-dark-white md:text-black-grey text-lg py-2 pt-4 font-light">
            My foray into the world of Web Development was purely coincidental.
            I was asked to build a website for a friend's father to showcase
            their services, and decided I could tackle it. And thus, my journey
            started.
          </p>
          <p className="about-text font-inter text-dark-white md:text-black-grey text-lg py-2 font-light">
            With each new technology I learn, I find something else just as; if
            not more; intriguing. The constant desire to grow as a developer
            pushes me to expand past my comfort zone and look further into the
            constantly changing world of Web Development.
          </p>
        </div>

        {
          (!mobile) &&
          <div className="icon-link-module flex flex-col w-autocontent-center py-10 md:py-8">
            <IconLinkModule iconTheme={iconThemeLight} />
          </div>
        }
        
        

      </div>
    </div>
  );
}

export default LandingPage;
