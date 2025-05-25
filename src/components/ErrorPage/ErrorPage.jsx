import { Link } from 'react-router-dom'

const ErrorPage = () => {
   return (
      <div className="flex flex-col justify-center items-center mt-20">
         <h2 className="font-bold text-red-500 text-4xl mb-2">404 Error</h2>
         <p className="text-red-500 text-lg">oops, Not found the page</p>
         <Link to={'/'}>
            <button className="btn bg-red-500 text-white mt-2">
               Back to home
            </button>
         </Link>
      </div>
   )
}

export default ErrorPage
