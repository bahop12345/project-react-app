import React from 'react'
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServiceSection from '../components/ServiceSection'
import Products from '../components/Products'
import TestimonialsSection from '../components/TestimonialsSection';
import ContactBanner from '../components/ContactBanner';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      <ServiceSection/>
      <Products/>
      <TestimonialsSection/>
      <ContactBanner/>
    </div>
  )
}

export default Home
