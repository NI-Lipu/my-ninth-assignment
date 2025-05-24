import { Link } from 'react-router-dom'
import loginImg from '../../assets/login.jpg'
const Login = () => {
   return (
      <>
         <div className="hero max-w-7xl mx-auto my-10">
            <div className="hero-content border-2 border-[#a78cdd] flex-col md:flex-row-reverse">
               <div className="text-center lg:text-left">
                  <img className="md:max-w-96" src={loginImg} alt="" />
               </div>
               <div className="card w-full">
                  <div className="pl-6">
                     <h2 className="font-bold text-2xl">Welcome Back</h2>
                     <p className="text-sm mt-1 text-gray-400">
                        Please enter your details
                     </p>
                  </div>
                  <form className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text text-black">Email</span>
                        </label>
                        <input
                           type="email"
                           placeholder="email"
                           className="input input-bordered"
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
                           className="input input-bordered"
                           required
                        />
                        <label className="label">
                           <a
                              href="#"
                              className="label-text-alt text-black link link-hover"
                           >
                              Forgot password?
                           </a>
                        </label>
                     </div>
                     <div className="form-control mt-6 pr-7">
                        <button className="btn text-white w-full bg-[#54407e]">
                           Login
                        </button>
                     </div>
                  </form>
                  <div className="ml-6 mr-14">
                     <button className="btn w-full">Login with Google</button>
                     <Link to={'/register'} className="text-center block mt-4">
                        Don't have an account?
                        <span className="text-[#7c60b9] underline font-medium ml-1">
                           Register.
                        </span>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Login
