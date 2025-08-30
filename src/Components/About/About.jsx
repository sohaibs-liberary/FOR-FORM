import React from 'react'
import Aboutus from './Section/Aboutus'
import Whatchooseus from './Section/Whatchooseus'
import Email from '../Home/sections/Email'


const About = () => {
  return (
    <>
    <div className="About">
        <Aboutus />
        <Whatchooseus/>
        <Email/>
      
    </div>
    </>
  )
}

export default About