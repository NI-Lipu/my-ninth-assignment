import { createContext, useEffect, useState } from 'react'
import {
   createUserWithEmailAndPassword,
   getAuth,
   GoogleAuthProvider,
   onAuthStateChanged,
   sendPasswordResetEmail,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
   updateProfile,
} from 'firebase/auth'
import app from '../firebase/firebase.config'

export const AuthContext = createContext()
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null)
   const [loading, setLoading] = useState(true)

   // console.log(user)

   // Google Login
   const handleGoogleLogin = () => {
      return signInWithPopup(auth, provider)
   }

   // Handle Register
   const handleRegister = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password)
   }

   // Handle Login
   const handleEmailPasswordLogin = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
   }

   // Update Profile
   const handleProfile = (obj) => {
      return updateProfile(auth.currentUser, obj).then(() => {
         setUser({ ...auth.currentUser })
      })
   }

   // Password Reset
   const handlePasswordReset = (email) => {
      return sendPasswordResetEmail(auth, email)
   }

   // Log Out
   const logOut = () => {
      return signOut(auth)
   }

   const authInfo = {
      user,
      setUser,
      loading,
      handleGoogleLogin,
      logOut,
      handleRegister,
      handleProfile,
      handleEmailPasswordLogin,
      handlePasswordReset,
   }

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
