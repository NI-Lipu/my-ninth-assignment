import { HiSpeakerWave } from 'react-icons/hi2'
import Modal from '../Modal/Modal'

const LessonCard = ({ singleData }) => {
   // const params = useParams()
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
   // console.log(params)

   const handlePronunciation = () => {
      const utterance = new SpeechSynthesisUtterance(word)
      utterance.lang = 'ja-JP'
      speechSynthesis.speak(utterance)
   }
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
            <div className="flex items-center">
               {' '}
               <p className="card-title text-lg font-bold">Word: {word}</p>
               <HiSpeakerWave
                  onClick={handlePronunciation}
                  className="cursor-pointer"
                  size={30}
               />
            </div>

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
               <button
                  // to={`/lesson/${lesson_no}/${id}`}
                  onClick={() =>
                     document.getElementById('my_modal_5').showModal()
                  }
                  className="btn"
               >
                  When to say
               </button>
            </div>
         </div>
         <Modal singleData={singleData}></Modal>
      </div>
   )
}

export default LessonCard
