import { Link } from 'react-router-dom'
import Modal from '../Modal/Modal'

const LessonCard = ({ singleData }) => {
   const {
      difficulty,
      example,
      id,
      lesson_no,
      meaning,
      part_of_speech,
      pronunciation,
      when_to_say,
      word,
   } = singleData
   // console.log(Array.isArray(allData))
   return (
      <div
         className={`${
            difficulty === 'easy'
               ? 'bg-green-200'
               : difficulty === 'medium'
               ? 'bg-orange-200'
               : 'bg-red-300'
         } card `}
      >
         <div className="card-body">
            <p className="card-title text-lg font-bold">Word: {word}</p>
            <p className="text-base">
               <span className="font-medium text-base">Meaning:</span> {meaning}
            </p>
            <p className="text-base">
               <span className="font-medium text-base">Pronunciation:</span>{' '}
               {pronunciation}
            </p>
            <p className="text-base">
               <span className="font-medium">part_of_speech:</span>{' '}
               {part_of_speech}
            </p>
            <div className="card-actions">
               <Link
                  to={''}
                  onClick={() =>
                     document.getElementById('my_modal_5').showModal()
                  }
                  className="btn"
               >
                  When to say
               </Link>
            </div>
         </div>
         <Modal></Modal>
      </div>
   )
}

export default LessonCard
