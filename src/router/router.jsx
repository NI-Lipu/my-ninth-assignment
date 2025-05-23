import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home/Home'
import AboutUs from '../pages/AboutUs/AboutUs'
import Learn from '../pages/Learn/Learn'

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
         {
            path: 'learning',
            element: <Learn></Learn>,
            loader: () => fetch('/words.json'),
         },
      ],
   },
])

export default router
