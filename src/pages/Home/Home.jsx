import Banner from '../../components/Banner/Banner'
import Success from '../../components/Success/Success'
import UpdateProfileModal from '../../components/UpdateProfileModal/UpdateProfileModal'
import AboutUs from '../AboutUs/AboutUs'

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <AboutUs></AboutUs>
         <Success></Success>

         <UpdateProfileModal></UpdateProfileModal>
      </div>
   )
}

export default Home
