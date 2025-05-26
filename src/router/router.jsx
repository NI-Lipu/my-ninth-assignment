import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home/Home'
import AboutUs from '../pages/AboutUs/AboutUs'
import Learn from '../pages/Learn/Learn'
import Lesson from '../pages/Lesson/Lesson'

import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import PrivetRoute from './PrivetRoute'
import Tutorials from '../pages/Tutorials/Tutorials'
import ErrorPage from '../components/ErrorPage/ErrorPage'

const router = createBrowserRouter([
   {
      path: '/',
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
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
            path: '/learning',
            element: <Learn></Learn>,
            loader: () => fetch('/words.json'),
         },
         {
            path: '/lesson/:id',
            element: (
               <PrivetRoute>
                  <Lesson></Lesson>
               </PrivetRoute>
            ),
            loader: async ({ params }) => {
               const allVocab = await fetch('/words.json')
               const allVocabData = await allVocab.json()

               const lessonData = allVocabData.filter(
                  (data) => data.lesson_no == params.id
               )
               return lessonData
            },
         },
         {
            path: '/login',
            element: <Login></Login>,
         },
         {
            path: '/register',
            element: <Register></Register>,
         },
         {
            path: '/tutorials',
            element: (
               <PrivetRoute>
                  <Tutorials></Tutorials>
               </PrivetRoute>
            ),
         },
      ],
   },
])

export default router
