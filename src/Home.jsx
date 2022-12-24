import React ,{useEffect}  from 'react'
import HeroSection from './Components/HeroSection'
import Contact from './Contact';
import { useGlobalContext } from './context'
import Service from './Service';

// const data = {
//     name:"Thapa",
//     image:"./images/hero.svg"
// }


const Home = () => {
  const {updateHomePage} = useGlobalContext();
  useEffect(() =>updateHomePage(), [])
  
   return (
    <>
   <HeroSection  />
   <Service />
   <Contact />
    </>
  )
}

export default Home