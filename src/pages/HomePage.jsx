import SEO from '../components/SEO'
import Hero from '../components/home/Hero'
import LetterTypes from '../components/home/LetterTypes'
import HowItWorks from '../components/home/HowItWorks'
import WhyChooseUs from '../components/home/WhyChooseUs'
import OurStory from '../components/home/OurStory'
import CTA from '../components/home/CTA'

const HomePage = () => {
  return (
    <>
      <SEO />
      <Hero />
      <LetterTypes />
      <HowItWorks />
      <WhyChooseUs />
      <OurStory />
      <CTA />
    </>
  )
}

export default HomePage
