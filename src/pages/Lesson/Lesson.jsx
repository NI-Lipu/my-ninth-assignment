import { Link, useLoaderData, useLocation } from 'react-router-dom'
import LessonCard from '../../components/LessonCard/LessonCard'
import Modal from '../../components/Modal/Modal'

const Lesson = () => {
   const data = useLoaderData()
   const { pathname } = useLocation()
   const lesson = Number(pathname.slice(8, 10))
   // console.log(data, pathname, lesson)
   return (
      <>
         <h2 className="mt-8 font-bold text-3xl text-center underline">
            Lesson-{lesson}
         </h2>
         <div className="grid gap-10 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {data.map((singleData) => (
               <LessonCard singleData={singleData}></LessonCard>
            ))}
         </div>
         <Link to={'/learning'}>
            <button className="btn text-white block bg-blue-900 mx-auto mb-10 mt-14">
               Back to Lesson
            </button>
         </Link>
      </>
   )
}

export default Lesson
