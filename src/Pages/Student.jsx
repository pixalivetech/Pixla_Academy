import React from 'react'
import HeroSection from '../Components/Students Onboarding/Hero'
import PartnersSection from '../Components/Students Onboarding/Partner'
import Benefits from './../Components/Students Onboarding/Benefits'
import Placement from './../Components/Students Onboarding/Placement'
import Internship from './../Components/Students Onboarding/Internship'
import Contacts from "../Components/Landing/contact"
import { Contact } from 'lucide-react'

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
