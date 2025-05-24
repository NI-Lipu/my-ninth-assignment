import { Link } from 'react-router-dom'
import registerImg from '../../assets/3783954-ezgif.com-webp-to-jpg-converter.jpg'
import { useContext } from 'react'
import { AuthContext } from '../../provider/AuthProvider'

const Register = () => {
   const { handleGoogleLogin, setUser, handleRegister, handleProfile } =
      useContext(AuthContext)

   // Google Login
   const GoogleLogin = () => {
      handleGoogleLogin()
         .then((result) => {
            const user = result.user
            setUser(user)
         })
         .catch((error) => {
            const errorMessage = error.errorMessage
            console.log(errorMessage)
         })
   }

   // Register
   const handleRegisterForm = (e) => {
      e.preventDefault()
      const name = e.target.name.value
      const email = e.target.email.value
      const photo = e.target.photo.value
      const password = e.target.password.value
      // console.log(name, email, photo, password)

      handleRegister(email, password)
         .then((result) => {
            const user = result.user
            setUser(user)
            handleProfile({ displayName: name, photoURL: photo })
            // console.log(user)
         })
         .catch((error) => {
            const errorMessage = error.errorMessage
            console.log(errorMessage)
         })
   }
   return (
      <>
         <div className="hero max-w-7xl mx-auto my-10">
            <div className="hero-content border-2 border-[#a78cdd] flex-col md:flex-row-reverse">
               <div className="text-center lg:text-left">
                  <img
                     className="md:max-w-96 md:h-[520px]"
                     src={registerImg}
                     alt=""
                  />
               </div>
               <div className="card w-full">
                  <div className="pl-6">
                     <h2 className="font-bold text-2xl">Create an Account</h2>
                     <p className="text-sm mt-1 text-gray-400">
                        Please enter your details
                     </p>
                  </div>
                  <form onSubmit={handleRegisterForm} className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text text-black">Name</span>
                        </label>
                        <input
                           type="text"
                           name="name"
                           placeholder="name"
                           className="input w-full input-bordered"
                           required
                        />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text text-black">Email</span>
                        </label>
                        <input
                           type="email"
                           name="email"
                           placeholder="email"
                           className="input w-full input-bordered"
                           required
                        />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text text-black">
                              Photo URL
                           </span>
                        </label>
                        <input
                           type="url"
                           name="photo"
                           placeholder="photo"
                           className="input w-full input-bordered"
                           required
                        />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text text-black">
                              Password
                           </span>
                        </label>
                        <input
                           type="password"
                           name="password"
                           placeholder="password"
                           className="input w-full input-bordered"
                           required
                        />
                     </div>
                     <div className="form-control mt-6">
                        <button className="btn text-white w-full bg-[#54407e]">
                           Register
                        </button>
                     </div>
                  </form>
                  <div className="ml-6 flex pr-7 flex-col">
                     <button onClick={GoogleLogin} className="btn w-full ">
                        Register with Google
                     </button>
                     <Link to={'/login'} className="text-center mt-2">
                        have an account?
                        <span className="text-[#7c60b9] underline font-medium ml-1">
                           Login
                        </span>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Register
