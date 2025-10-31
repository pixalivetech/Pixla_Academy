import React from 'react'
import HeroSection from '../Components/College Onboarding/Hero'
import PartnersSection from '../Components/College Onboarding/Partner'
import Benefits from './../Components/College Onboarding/Benefits'
import Placement from './../Components/College Onboarding/Placement'
import Internship from './../Components/College Onboarding/Internship'
import Contacts from "../Components/Landing/contact"

const College = () => {
  return (
    <div>
      <HeroSection/>
      <PartnersSection/>
      <Benefits/>
      <Placement/>
      <Internship/>
      <Contacts/>
    </div>
  )
}

export default College
