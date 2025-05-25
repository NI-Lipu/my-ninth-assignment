import CountUp from 'react-countup'

const Success = () => {
   return (
      <div className="mb-20 mt-20 max-w-7xl mx-auto ">
         <h2 className="font-bold text-3xl text-center mb-7 underline">
            Success
         </h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px]">
            <div className="stat bg-blue-900 place-items-center text-white">
               <div className="text-white stat-title font-medium text-lg">
                  Total Users
               </div>
               <div className="text-white stat-value">
                  <CountUp end={31000} duration={4} separator="," />
               </div>
            </div>

            <div className="stat bg-blue-900 place-items-center">
               <div className="stat-title font-medium text-lg text-[#f43098]">
                  Lesson
               </div>
               <div className="stat-value text-secondary">
                  <CountUp end={10} duration={4} separator="," />
               </div>
            </div>

            <div className="stat bg-blue-900 place-items-center text-white">
               <div className="text-white stat-title font-medium text-lg">
                  Vocabulary
               </div>
               <div className="text-white stat-value">
                  <CountUp end={300} duration={4} separator="," />
               </div>
            </div>

            <div className="stat bg-blue-900 place-items-center">
               <div className="stat-title font-medium text-lg text-[#f43098]">
                  Tutorials
               </div>
               <div className="stat-value text-secondary">
                  <CountUp end={300} duration={4} separator="," />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Success
