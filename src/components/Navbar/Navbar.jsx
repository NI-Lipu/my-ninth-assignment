import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../provider/AuthProvider'

import { toast } from 'react-toastify'

const Navbar = () => {
   const { user, logOut, setUser } = useContext(AuthContext)

   const handleLogout = () => {
      logOut()
         .then(() => {
            setUser(null)

            toast.success('Log-out successfully!')
         })
         .catch((error) => {
            console.error(error)

            toast.error('Failed to log out. Please try again.')
         })
   }
   const links = (
      <>
         <li>
            <NavLink to={'/'}>Home</NavLink>
         </li>
         <li>
            <NavLink to={'/learning'}>Start-Learning</NavLink>
         </li>
         <li>
            <NavLink to={'/tutorials'}>Tutorials</NavLink>
         </li>
         <li>
            <NavLink to={'/about'}>About-Us</NavLink>
         </li>
      </>
   )
   return (
      <div className="navbar py-5 pr-3  md:px-8 bg-blue-950 text-white">
         <div className="navbar-start">
            <div className="dropdown">
               <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                     />
                  </svg>
               </div>
               <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-blue-950 rounded-box z-[1] mt-3 w-52 p-2 shadow"
               >
                  {links}
               </ul>
            </div>
            <Link to={'/'} className="btn  btn-ghost text-xl">
               Lingo Bingo
            </Link>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
         </div>
         <div className="navbar-end">
            {user ? (
               <div className="flex items-center gap-2">
                  <p className="font-medium hidden md:block text-lg">
                     Hi, {user.displayName}
                  </p>
                  <div className="dropdown">
                     <div tabIndex={0} className="cursor-pointer">
                        <img
                           src={user.photoURL}
                           className="rounded-full w-16 h-16 border-2 border-white"
                           alt="Profile"
                        />
                     </div>
                     <div
                        tabIndex={0}
                        className="dropdown-content -left-40 bg-blue-950 rounded-box z-50 mt-3 p-4 shadow-lg w-64 text-white"
                     >
                        <div className="text-center">
                           <img
                              src={user?.photoURL}
                              className="w-40 h-48 rounded-lg mx-auto mb-2"
                           />
                           <h3 className="text-lg font-semibold">
                              {user?.displayName}
                           </h3>
                           <p className="text-sm">{user?.email}</p>
                           <hr className="my-2 border-gray-600" />
                           <button
                              onClick={() =>
                                 document
                                    .getElementById('my_modal_6')
                                    .showModal()
                              }
                              className="block mt-2 mx-auto text-blue-400 text-sm"
                           >
                              Update profile
                           </button>

                           <Link to={'/'}>
                              <button
                                 onClick={handleLogout}
                                 className="mt-3 bg-red-600 hover:bg-red-700 px-4 py-1 rounded text-white text-sm"
                              >
                                 Sign Out
                              </button>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            ) : (
               <Link to={'/login'} className="btn">
                  Login
               </Link>
            )}
         </div>
      </div>
   )
}

export default Navbar
