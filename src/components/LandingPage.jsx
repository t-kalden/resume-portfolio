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
    // handleMobileResize()
    // return() => {
    //   window.removeEventListener("resize", handleMobileResize)
    // }
  }, []);

  // console.log(mobile, iconThemeLight)
  return (
    <div
      className="landing-page-wrapper md:bg-white md:h-screen w-screen relative md:flex grid-cols-2"
      id="landing-page"
    >
      {/* landing- main intro */}
      <div className="left w-full md:w-1/2 bg-black h-screen flex justify-center ">
        <div className="text-white  w-2/3 md:w-1/2 content-center flex flex-col justify-center h-2/3 md:h-full">
          <h3 className="text-2xl md:text-3xl font-zen">hi, i am</h3>
          <h1 className="text-6xl w-300 font-maven font-medium">
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

      {/* About me section */}
      <div className="right right-0 w-full h-full md:w-1/2 bg-black md:bg-white md:h-screen flex flex-col items-center justify-center">
        <div className="about-container w-4/5 ">
          <h3 className="text-2xl md:text-3xl text-white md:text-black font-zen">
            who am i...
          </h3>
          <p className="about-text font-inter text-white md:text-black text-lg py-2 pt-4 font-light">
            My foray into the world of Web Development was purely coincidental.
            I was asked to build a website for a friend's father to showcase
            their services, and decided I could tackle it. And thus, my journey
            started.
          </p>
          <p className="about-text font-inter text-white md:text-black text-lg py-2 font-light">
            With each new technology I learn, I find something else just as; if
            not more; intriguing. The constant desire to grow as a developer
            pushes me to expand past my comfort zone and look further into the
            constantly changing world of Web Development.
          </p>
        </div>

        <div className="icon-link-module flex flex-col w-3/5 lg:w-2/5 max-w-md content-center py-12">
          <IconLinkModule iconTheme={iconThemeLight} />
        </div>

      </div>
    </div>
  );
}

export default LandingPage;
