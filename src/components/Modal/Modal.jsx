const Modal = ({ singleData }) => {
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

   return (
      <div>
         <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
               <p className="card-title mb-2 text-lg font-bold">Word: {word}</p>
               <p className="text-base mb-2">
                  <span className="font-medium text-base">Meaning:</span>{' '}
                  {meaning}
               </p>
               <p className="text-base mb-2">
                  <span className="font-medium text-base">When to say:</span>{' '}
                  {when_to_say}
               </p>
               <p className="text-base">
                  <span className="font-medium text-base">Example:</span>{' '}
                  {example}
               </p>
               <div className="modal-action">
                  <form method="dialog">
                     {/* if there is a button in form, it will close the modal */}
                     <button className="btn">Close</button>
                  </form>
               </div>
            </div>
         </dialog>
      </div>
   )
}

export default Modal
