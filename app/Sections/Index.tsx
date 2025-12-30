import React from 'react'
import Hero from './Hero/page'
import Feature from './Feature/page';
import About from './About/page';
import Services from './Services/page';
import Banner from './Banner/page';
import Projects from './Projects/page';
import Testimonial from './Testimonial/page';

const Index = () => {
  return (
   <>
    <Hero />
    <Feature />
    <About />
    <Services />
    <Banner />
    <Projects />
    <Testimonial />
   </>
  )
}

export default Index