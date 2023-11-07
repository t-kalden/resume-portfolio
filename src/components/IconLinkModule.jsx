import React, { useEffect, useState } from 'react'

function IconLinkModule(iconThemeLight) {   
    const [ iconTheme , setIconTheme ] = useState('')
  
    const themeChecker = () => {
        // update iconTheme based on iconThemeLight
        setIconTheme(prev => prev = (iconThemeLight) ? 'white' : 'black')
        console.log(iconThemeLight);
    }

    useEffect(() => {
        themeChecker()
    }, [iconThemeLight])

    useEffect(() => {
    }, [iconTheme])

  return (
    <div>
        {/* top row */}
        <div className="top flex justify-evenly">
            <a href="#">
              <img className="h-10 md:h-12" 
              src={require('../imgs/portfolio-black.png')} alt="Portfolio Link" />
            </a>
            <a href="#">
              <img className="h-10 md:h-12" 
              src={require('../imgs/github-black.png')} alt="Github Link" />
            </a>
            <a href="#">
              <img className="h-10 md:h-12" 
              src={require('../imgs/resume-black.png')} alt="Resume Link" />
            </a>
          </div>

        {/* bottom row */}
          <div className="bottom flex justify-evenly">
          <a href="#">
              <img className="h-10 md:h-12" 
              src={require('../imgs/linkedin-black.png')} alt="LinkedIn Link" />
            </a>
            <a href="#">
              <img className="h-10 md:h-12" 
              src={require('../imgs/contact-black.png')} alt="Contact Link" />
            </a>
          </div>
    </div>
  )
}

export default IconLinkModule