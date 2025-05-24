import { Link } from 'react-router-dom'
import registerImg from '../../assets/3783954-ezgif.com-webp-to-jpg-converter.jpg'

const Register = () => {
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
                  <form className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text text-black">Name</span>
                        </label>
                        <input
                           type="text"
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
                     <button className="btn w-full ">
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
