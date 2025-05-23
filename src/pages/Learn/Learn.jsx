import { useLoaderData } from 'react-router-dom'
import LessonCard from '../../components/LessonCard/LessonCard'

const Learn = () => {
   const data = useLoaderData()
   const lesson = [...new Set(data.map((a) => a.lesson_no))].sort(
      (a, b) => a - b
   )
   // console.log(lesson)

   return (
      <div className="max-w-7xl mx-auto mb-14">
         <h2 className="text-center font-bold text-2xl my-9">Let's Learn</h2>
         <div className="grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-4">
            {lesson.map((num, idx) => (
               <LessonCard key={idx} num={num}></LessonCard>
            ))}
         </div>
      </div>
   )
}

export default Learn
