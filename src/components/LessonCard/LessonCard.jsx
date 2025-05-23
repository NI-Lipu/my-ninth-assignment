const LessonCard = ({ num }) => {
   console.log(num)
   return (
      <div className="bg-blue-900 p-5 text-white font-bold text-2xl text-center">
         Lesson:{num}
      </div>
   )
}

export default LessonCard
