import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slide.css";

// Import images - adjust paths according to your project structure
import {
  default as image1,
  default as image2,
  default as image3,
  default as image4,
} from "../../assets/media/images/pexels-souvenirpixels-417074.jpg";

const Slider = () => {
  const slides = [
    {
      image: image1,
      title: "Explore Nature",
      text: "Discover the beauty of untouched wilderness",
      button: "Learn More",
    },
    {
      image: image2,
      title: "City Lights",
      text: "Experience vibrant urban life",
      button: "View Cities",
    },
    {
      image: image3,
      title: "Tech Innovation",
      text: "Stay ahead with latest technologies",
      button: "Explore Tech",
    },
    {
      image: image4,
      title: "Wildlife",
      text: "Meet amazing creatures",
      button: "Discover Animals",
    },
  ];

  return (
    <Swiper
      speed={1200}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
        waitForTransition: true,
      }}
      modules={[Autoplay]}
      loop={true}
      slidesPerView={1}
      className="!overflow-hidden"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="group relative h-[60vh] md:h-[80vh]">
            {/* Full-width Image with Overlay */}
            <div className="absolute inset-0 h-full w-full">
              <img
                src={slide.image}
                alt={slide.title}
                loading="lazy"
                className="h-full w-full scale-100 transform-gpu object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            </div>

            {/* Centered Content Container */}
            <div className="relative flex h-full items-center justify-center">
              <div className="mx-auto w-[80%] space-y-4 text-center text-white lg:space-y-6">
                <h3 className="text-3xl !leading-tight font-bold md:text-4xl lg:text-5xl">
                  {slide.title}
                </h3>
                <p className="mx-auto max-w-[600px] text-lg opacity-95 md:text-xl lg:max-w-[800px] lg:text-2xl">
                  {slide.text}
                </p>
                <button
                  className="mt-4 rounded-full bg-teal-500 px-8 py-3 text-lg text-white transition-all hover:bg-teal-600 md:mt-6 md:px-10 md:py-4 md:text-xl"
                  onClick={() => console.log(`Clicked ${slide.title}`)}
                >
                  {slide.button}
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
