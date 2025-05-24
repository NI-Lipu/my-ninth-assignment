import { createContext, useEffect, useState } from 'react'
import {
   getAuth,
   GoogleAuthProvider,
   onAuthStateChanged,
   signInWithPopup,
   signOut,
} from 'firebase/auth'
import app from '../firebase/firebase.config'

export const AuthContext = createContext()
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null)
   const [loading, setLoading] = useState(false)

   console.log(user)

   // Google Login
   const handleGoogleLogin = () => {
      return signInWithPopup(auth, provider)
   }

   // Log Out
   const logOut = () => {
      return signOut(auth)
   }

   const authInfo = { user, setUser, loading, handleGoogleLogin, logOut }

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser)
         setLoading(false)
      })
      return () => {
         unsubscribe()
      }
   }, [])
   return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
   )
}

export default AuthProvider
