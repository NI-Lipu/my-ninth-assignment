import { Link, useLoaderData } from 'react-router-dom'

const Learn = () => {
   const data = useLoaderData()
   const lesson = [...new Set(data.map((a) => a.lesson_no))].sort(
      (a, b) => a - b
   )
   console.log(data)
   console.log(lesson)

   return (
      <div className="max-w-7xl mx-auto mb-14">
         <h2 className="text-center font-bold text-2xl my-9">Let's Learn</h2>
         <div className="grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-4">
            {lesson.map((singleData, idx) => (
               <Link
                  key={idx}
                  to={`/lesson/${singleData}`}
                  data={singleData}
                  className="bg-blue-900 p-5 text-white font-bold text-2xl text-center"
               >
                  Lesson: {singleData}
               </Link>
            ))}
         </div>

         {/* Tutorial Section */}
         <div className="mt-16">
            <h3 className="text-center font-bold text-2xl my-9">
               Alphabet Tutorial
            </h3>
            <div className="">
               <iframe
                  className="w-full h-64 md:h-96"
                  src="https://www.youtube.com/embed/2qk4gCZuSjk?si=PgBPSJREArADuhE3"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
               ></iframe>
            </div>
         </div>

         <div className="flex justify-center mt-8">
            <Link className="btn btn-primary" to={'/tutorials'}>
               View more
            </Link>
         </div>
      </div>
   )
}

export default Learn
