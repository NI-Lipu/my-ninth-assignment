import { useEffect, useState } from 'react'
import Banner from '../../components/Banner/Banner'
import Success from '../../components/Success/Success'
import UpdateProfileModal from '../../components/UpdateProfileModal/UpdateProfileModal'
import AboutUs from '../AboutUs/AboutUs'
import Feedback from '../../components/Feedback/Feedback'
import Marquee from 'react-fast-marquee'

const Home = () => {
   const [feedback, setFeedback] = useState([])
   useEffect(() => {
      fetch('feedback.json')
         .then((res) => res.json())
         .then((data) => setFeedback(data))
         .catch((err) => console.error(err))
   }, [])
   return (
      <div>
         <Banner></Banner>
         <AboutUs></AboutUs>
         <Success></Success>
         <div className="mb-10 max-w-7xl mx-auto">
            <h2 className="font-bold text-center text-3xl mb-8 underline">
               Feedback
            </h2>
            <Marquee pauseOnHover="true">
               {feedback.map((singleFeedback) => (
                  <Feedback feedback={singleFeedback}></Feedback>
               ))}
            </Marquee>
         </div>

         <UpdateProfileModal></UpdateProfileModal>
      </div>
   )
}

export default Home
