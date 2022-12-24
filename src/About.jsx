import React ,{useEffect} from 'react'
import HeroSection from './Components/HeroSection'
import { useGlobalContext } from './context'
// const data = {
//     name:"Saphal",
//     image: "./images/about1.svg"
// };

const About = () => {
  const {updateAboutPage} = useGlobalContext();

  useEffect(() =>updateAboutPage(), [])
  
  return (
    <HeroSection />
  )
}

export default About