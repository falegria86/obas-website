import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImageSlider = () => {
    const slides = [
        {
            bgImage: '/ciudad.jpg'
        },
        {
            bgImage: '/comodidad.jpg'
        },
        {
            bgImage: '/mako54/mako-hero.webp'
        },
        {
            bgImage: '/ciudad.jpg'
        },
        {
            bgImage: '/comodidad.jpg'
        },
        {
            bgImage: '/mako54/mako-hero.webp'
        },
        {
            bgImage: '/ciudad.jpg'
        },
        {
            bgImage: '/comodidad.jpg'
        },
        {
            bgImage: '/mako54/mako-hero.webp'
        },
        {
            bgImage: '/ciudad.jpg'
        },
        {
            bgImage: '/comodidad.jpg'
        },
        {
            bgImage: '/mako54/mako-hero.webp'
        },
        {
            bgImage: '/ciudad.jpg'
        },
        {
            bgImage: '/comodidad.jpg'
        },
        {
            bgImage: '/mako54/mako-hero.webp'
        },
        {
            bgImage: '/ciudad.jpg'
        },
        {
            bgImage: '/comodidad.jpg'
        },
        {
            bgImage: '/mako54/mako-hero.webp'
        },
        {
            bgImage: '/ciudad.jpg'
        },
        {
            bgImage: '/comodidad.jpg'
        },
        {
            bgImage: '/mako54/mako-hero.webp'
        },
        {
            bgImage: '/ciudad.jpg'
        },
        {
            bgImage: '/comodidad.jpg'
        },
        {
            bgImage: '/mako54/mako-hero.webp'
        },
        {
            bgImage: '/ciudad.jpg'
        },
        {
            bgImage: '/comodidad.jpg'
        },
        {
            bgImage: '/mako54/mako-hero.webp'
        },
        {
            bgImage: '/ciudad.jpg'
        },
        {
            bgImage: '/comodidad.jpg'
        },
        {
            bgImage: '/mako54/mako-hero.webp'
        },
    ];

    return (
        <div className="my-16">
            <Swiper
                slidesPerView={9}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                speed={5000}
                loop={true}
                modules={[Navigation, Autoplay]}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className={`w-72 h-40 bg-cover bg-center`} style={{ backgroundImage: `url(${slide.bgImage})` }}>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
export default ImageSlider