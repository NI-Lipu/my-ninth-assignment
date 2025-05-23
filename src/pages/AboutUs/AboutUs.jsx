import { Link, useLocation } from 'react-router-dom'
import about1 from '../../assets/about1.jpg'
import about2 from '../../assets/about2.jpg'
import about3 from '../../assets/about3.jpeg'
const AboutUs = () => {
   const { pathname } = useLocation()

   return (
      <div className="2xl:max-w-7xl mx-auto my-10">
         {/* About Us */}
         <div className="hero p-5 bg-slate-100">
            <div className="hero-content md:gap-10 flex-col lg:flex-row">
               <img src={about1} className="md:max-w-lg rounded-lg " />
               <div>
                  <h1 className="text-5xl font-bold">About Us</h1>
                  <p className="py-6">
                     We are dedicated to making Japanese vocabulary learning
                     fun, simple, and effective by providing an easy-to-use
                     platform that helps learners build confidence and improve
                     their language skills every day.
                  </p>

                  <Link
                     className={`${pathname === '/about' && 'hidden'}`}
                     to={'/about'}
                  >
                     <button className="btn btn-primary">More About us</button>
                  </Link>
               </div>
            </div>
         </div>

         <div className={`${pathname === '/' && 'hidden'}`}>
            {/* Our Mission */}
            <div className="hero my-10">
               <div className="hero-content md:gap-10 flex-col lg:flex-row-reverse">
                  <img src={about2} className=" rounded-lg md:max-w-lg" />
                  <div>
                     <h1 className="text-3xl font-bold">
                        Our Mission: Helping Millions of Peoples Grow Better
                     </h1>
                     <p className="py-6">
                        Our mission is to make Japanese vocabulary learning
                        accessible and enjoyable for everyone. We aim to
                        simplify the learning process through interactive tools,
                        engaging content, and a user-friendly experience. By
                        focusing on daily practice and meaningful progress, we
                        help learners build confidence and improve their
                        communication skills in Japanese.
                     </p>
                  </div>
               </div>
            </div>
            {/* Our Story */}
            <div className="hero p-5 bg-slate-100">
               <div className="hero-content md:gap-10 flex-col lg:flex-row">
                  <img src={about3} className="md:max-w-lg rounded-lg " />
                  <div>
                     <h1 className="text-3xl font-bold">Our Story</h1>
                     <p className="py-6">
                        In 2025, inspired by the challenges language learners
                        face, we set out to make vocabulary learning easier and
                        more enjoyable. Many learners struggled with
                        memorization and engagement, especially when learning
                        Japanese. That’s when we created our platform — a
                        simple, interactive solution to make mastering
                        vocabulary effortless and fun. Built with a focus on
                        user experience and powered by Firebase for secure
                        access, our app allows learners to start learning with
                        just one click. As we grow, our mission remains the
                        same: to help users build strong language skills and
                        grow better every day through consistent, joyful
                        learning.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default AboutUs
