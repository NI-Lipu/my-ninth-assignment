import { useContext } from 'react'
import { AuthContext } from '../../provider/AuthProvider'

const UpdateProfileModal = () => {
   const { handleProfile } = useContext(AuthContext)

   const handleSubmit = (e) => {
      e.preventDefault()
      const name = e.target.name.value
      const photo = e.target.photo.value
      // console.log(name, photo)
      handleProfile({ displayName: name, photoURL: photo })
         .then(() => {
            alert('Profile updated successfully!')
            const modal = document.getElementById('my_modal_6')
            modal.close()
            e.target.reset()
         })
         .catch((error) => {
            console.error('ERROR:', error)
            alert('Failed to update Profile.Please try again')
         })
   }

   return (
      <div>
         <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
               <div className="max-w-sm">
                  <form onSubmit={handleSubmit} className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Name</span>
                        </label>
                        <input
                           type="text"
                           name="name"
                           placeholder="name"
                           className="input input-bordered"
                           required
                        />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Photo URL</span>
                        </label>
                        <input
                           type="url"
                           name="photo"
                           placeholder="photo"
                           className="input input-bordered"
                           required
                        />
                     </div>
                     <div className="form-control mt-6">
                        <button className="btn btn-primary">Update</button>
                     </div>
                  </form>
               </div>
               <div className="modal-action">
                  <form method="dialog">
                     {/* if there is a button in form, it will close the modal */}
                     <button className="btn">Cancel</button>
                  </form>
               </div>
            </div>
         </dialog>
      </div>
   )
}

export default UpdateProfileModal
