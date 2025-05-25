import { Link } from 'react-router-dom'

const Tutorials = () => {
   return (
      <div className="max-w-7xl mx-auto">
         <h2 className="text-center my-10 font-bold text-2xl underline">
            Tutorials
         </h2>
         <div className="grid mx-5 gap-5 md:gap-10 grid-cols-1 lg:grid-cols-2">
            <div className="">
               <iframe
                  className="w-full rounded-xl h-64 md:h-96"
                  src="https://www.youtube.com/embed/2qk4gCZuSjk?si=PgBPSJREArADuhE3"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowFullscreen
               ></iframe>
            </div>
            <div className="">
               <iframe
                  className="w-full rounded-xl h-64 md:h-96"
                  src="https://www.youtube.com/embed/N14Z7CLtWP8?si=N5USOPzJ_EayqghZ"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
               ></iframe>
            </div>
            <div className="">
               <iframe
                  className="w-full rounded-xl h-64 md:h-96"
                  src="https://www.youtube.com/embed/_NllTHSrlGE?si=T-HRZL84GP9AUYRB"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowFullscreen
               ></iframe>
            </div>
            <div className="">
               <iframe
                  className="w-full rounded-xl h-64 md:h-96"
                  src="https://www.youtube.com/embed/Sgsv2ZSmrao?si=fm1facpNHMj1kmC1"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowFullscreen
               ></iframe>
            </div>
            <div className="">
               <iframe
                  className="w-full rounded-xl h-64 md:h-96"
                  src="https://www.youtube.com/embed/Ve9i22spNMc?si=jpE7ENoW5XXZevV7"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowFullscreen
               ></iframe>
            </div>
            <div className="">
               <iframe
                  className="w-full rounded-xl h-64 md:h-96"
                  src="https://www.youtube.com/embed/uoEI1wtY-_E?si=LV919ZE6Wz4JSmyq"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowFullscreen
               ></iframe>
            </div>
            <div className="">
               <iframe
                  className="w-full rounded-xl h-64 md:h-96"
                  src="https://www.youtube.com/embed/6ITFQiO-a-w?si=jj7RrsX6vPn1GeYY"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowFullscreen
               ></iframe>
            </div>
            <div className="">
               <iframe
                  className="w-full rounded-xl h-64 md:h-96"
                  src="https://www.youtube.com/embed/tIkzQsB7P-E?si=0yDKbSCTD1Hg0Uz3"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowFullscreen
               ></iframe>
            </div>
         </div>
         <Link to={'/learning'}>
            <button className="btn btn-primary block mx-auto mt-10 mb-16">
               Learn Vocabularies
            </button>
         </Link>
      </div>
   )
}

export default Tutorials
