import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home/Home'
import AboutUs from '../pages/AboutUs/AboutUs'

const router = createBrowserRouter([
   {
      path: '/',
      element: <MainLayout></MainLayout>,
      children: [
         {
            path: '/',
            element: <Home></Home>,
         },
         {
            path: '/about',
            element: <AboutUs></AboutUs>,
         },
      ],
   },
])

export default router
