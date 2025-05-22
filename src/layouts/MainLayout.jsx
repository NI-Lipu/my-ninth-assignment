import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/navbar/Navbar'
import WelcomeMessage from '../components/WelcomeMessage/WelcomeMessage'

const MainLayout = () => {
   return (
      <div>
         <header>
            {/* Top welcome message */}
            {/* <WelcomeMessage></WelcomeMessage> */}
            {/* Navbar */}
            <Navbar></Navbar>
         </header>
         <main className="min-h-[calc(100vh-373px)]">
            <Outlet></Outlet>
         </main>
         <footer>
            <Footer></Footer>
         </footer>
      </div>
   )
}

export default MainLayout
