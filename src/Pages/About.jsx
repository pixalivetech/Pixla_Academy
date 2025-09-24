import React from 'react'
import Hero from '../Components/About/Hero'
import Card from '../Components/About/Cards'
import HowWeWork from '../Components/About/Howwework'
import Talentnetwork from '../Components/About/Talentnetwork'
import TrustedPartners from '../Components/About/Partners'
import Mainhero from '../Components/About/MainHero'
import Trainers from '../Components/About/Trainers'
import Faq from '../Components/About/Faq'

const About = () => {
  return (
    <div>
      <Mainhero/>
      <Hero/>
      <Card/>
      <HowWeWork/>
      <Talentnetwork/>
      <TrustedPartners/>
      <Trainers/>
      <Faq/>
    </div>
  )
}

export default About
