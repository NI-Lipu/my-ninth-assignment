import { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

const PrivetRoute = ({ children }) => {
   const { user, loading } = useContext(AuthContext)
   const location = useLocation()
   //
   if (loading) {
      return <p className="font-bold text-2xl text-center mt-20">Loading...</p>
   }
   if (user?.email) {
      return children
   }
   return <Navigate state={location.pathname} to={'/login'}></Navigate>
}

export default PrivetRoute
