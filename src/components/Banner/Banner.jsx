import slide1 from '../../assets/slide-1.jpg'
import slide2 from '../../assets/slide-2.jpg'
import slide3 from '../../assets/slide-3.jpg'

const Banner = () => {
   return (
      <div className="carousel flex max-w-7xl mx-auto">
         <div id="slide1" className="carousel-item relative w-full">
            <img src={slide2} className="w-full max-h-[500px]" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
               <a href="#slide3" className="btn btn-circle">
                  ❮
               </a>
               <a href="#slide2" className="btn btn-circle">
                  ❯
               </a>
            </div>
         </div>
         <div id="slide2" className="carousel-item relative w-full">
            <img src={slide3} className="w-full max-h-[500px]" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
               <a href="#slide1" className="btn btn-circle">
                  ❮
               </a>
               <a href="#slide3" className="btn btn-circle">
                  ❯
               </a>
            </div>
         </div>
         <div id="slide3" className="carousel-item relative w-full">
            <img src={slide1} className="w-full max-h-[500px]" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
               <a href="#slide2" className="btn btn-circle">
                  ❮
               </a>
               <a href="#slide1" className="btn btn-circle">
                  ❯
               </a>
            </div>
         </div>
      </div>
   )
}

export default Banner
