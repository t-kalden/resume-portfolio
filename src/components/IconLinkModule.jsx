import React, { useEffect, useState } from 'react'

function IconLinkModule(prop) {   
    const [ iconThemeColor , setIconThemeColor ] = useState('')

    let theme = (prop.iconTheme) ? 'white' : 'black'

    const themeChecker = () => {
      setIconThemeColor(prev => prev = theme)
    }

    useEffect(() => {
      themeChecker()
    }, [prop])

  return (
    <div className='flex flex-col justify-center w-72 py-2 md:py-8'>
        {/* top row */}
        <div className="top flex justify-evenly w-72 py-2 ">
            <a href="#">
              <img className="h-14 w-14 md:h-16 md:w-16" 
              src={require(`../imgs/portfolio-${theme}.png`)} alt="Portfolio Link" />
            </a>
            <a href="#">
              <img className="h-14 w-14 md:h-16 md:w-16" 
              src={require(`../imgs/github-${theme}.png`)} alt="Github Link" />
            </a>
            <a href="#">
              <img className="h-14 w-14 md:h-16 md:w-16" 
              src={require(`../imgs/resume-${theme}.png`)} alt="Resume Link" />
            </a>
          </div>

        {/* bottom row */}
          <div className="bottom flex justify-evenly w-72 py-2">
          <a href="#"> 
              <img className="h-14 w-14 md:h-16 md:w-16" 
              src={require(`../imgs/linkedin-${theme}.png`)} alt="LinkedIn Link" />
            </a>
            <a href="#">
              <img className="h-14 w-14 md:h-16 md:w-16" 
              src={require(`../imgs/contact-${theme}.png`)} alt="Contact Link" />
            </a>
          </div>
    </div>
  )
}

export default IconLinkModule