import { Link, useLocation, useNavigate } from 'react-router-dom'
import loginImg from '../../assets/login.jpg'
import { useContext, useRef, useState } from 'react'
import { AuthContext } from '../../provider/AuthProvider'
import { toast } from 'react-toastify'
// import { useRef } from 'react'

const Login = () => {
   const {
      handleGoogleLogin,
      setUser,
      handleEmailPasswordLogin,
      handlePasswordReset,
   } = useContext(AuthContext)
   const [error, setError] = useState('')
   const location = useLocation()
   const navigate = useNavigate()
   const emailRef = useRef()

   // GoogleLogin
   const GoogleLogin = () => {
      handleGoogleLogin()
         .then((result) => {
            const user = result.user
            setUser(user)
            if (location.state) {
               navigate(location.state)
            } else {
               navigate('/')
            }
         })
         .catch((error) => {
            const errorMessage = error.errorMessage
            console.error(errorMessage)
         })
   }

   // handleEmailPasswordLogin
   const handleEmAndPassLogin = (e) => {
      e.preventDefault()
      setError('')
      const email = e.target.email.value
      const password = e.target.password.value

      handleEmailPasswordLogin(email, password)
         .then((result) => {
            const user = result.user
            setUser(user)
            if (location.state) {
               navigate('/location.state')
            } else {
               navigate('/')
            }
         })
         .catch((error) => {
            const message = error.message
            if (message) {
               setError('Your email or password is invalid.')
            }
         })
   }

   // handleForgotPassword
   const handleForgotPassword = () => {
      const email = emailRef.current.value
      if (!email) {
         return toast.error('Please Input email!')
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
         return toast.error('Please enter a valid email address!')
      }
      handlePasswordReset(email)
         .then(() => {
            toast.success('Reset link sent to your email!')
         })
         .catch((error) => {
            console.error(error)

            toast.error('Failed to send reset email!')
         })
   }
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
                  <form onSubmit={handleEmAndPassLogin} className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text text-black">Email</span>
                        </label>
                        <input
                           type="email"
                           ref={emailRef}
                           name="email"
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
                           name="password"
                           placeholder="password"
                           className="input input-bordered"
                           required
                        />
                        <label className="label">
                           <Link
                              onClick={handleForgotPassword}
                              className="label-text-alt text-black link link-hover"
                           >
                              Forgot password?
                           </Link>
                        </label>
                     </div>
                     {error && (
                        <p className="font-medium text-red-500 text-sm">
                           {error}
                        </p>
                     )}
                     <div className="form-control mt-6 pr-7">
                        <button className="btn text-white w-full bg-[#54407e]">
                           Login
                        </button>
                     </div>
                  </form>
                  <div className="ml-6 mr-14">
                     <button onClick={GoogleLogin} className="btn w-full">
                        Login with Google
                     </button>
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
