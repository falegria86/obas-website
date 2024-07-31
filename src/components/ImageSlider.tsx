import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImageSlider = () => {
    const slides = [
        {
            bgImage: '/mako54/mako-01.jpg'
        },
        {
            bgImage: '/mako54/mako-02.jpg'
        },
        {
            bgImage: '/mako54/mako-03.jpg'
        },
        {
            bgImage: '/mako54/mako-04.jpg'
        },
        {
            bgImage: '/mako54/mako-05.jpg'
        },
        {
            bgImage: '/mako54/mako-06.jpg'
        },
        {
            bgImage: '/mako54/mako-07.jpg'
        },
        {
            bgImage: '/mako54/mako-08.jpg'
        },
        {
            bgImage: '/mako54/mako-09.jpg'
        },
        {
            bgImage: '/mako54/mako-10.jpg'
        },
        {
            bgImage: '/mako54/mako-11.jpg'
        },
        {
            bgImage: '/mako54/mako-12.jpg'
        },
        {
            bgImage: '/mako54/mako-13.jpg'
        },
        {
            bgImage: '/mako54/mako-14.jpg'
        },
        {
            bgImage: '/mako54/mako-15.jpg'
        },
        {
            bgImage: '/mako54/mako-16.jpg'
        },
        {
            bgImage: '/mako54/mako-17.jpg'
        },
        {
            bgImage: '/mako54/mako-18.jpg'
        },
        {
            bgImage: '/mako54/mako-19.jpg'
        },
        {
            bgImage: '/revu519/revu-01.jpg'
        },
        {
            bgImage: '/revu519/revu-02.jpg'
        },
        {
            bgImage: '/revu519/revu-03.jpg'
        },
        {
            bgImage: '/revu519/revu-04.jpg'
        },
        {
            bgImage: '/revu519/revu-05.jpg'
        },
        {
            bgImage: '/revu519/revu-06.jpg'
        },
        {
            bgImage: '/revu519/revu-07.jpg'
        },
        {
            bgImage: '/revu519/revu-08.jpg'
        },
        {
            bgImage: '/revu519/revu-09.jpg'
        },
        {
            bgImage: '/revu519/revu-10.jpg'
        },
        {
            bgImage: '/revu519/revu-11.jpg'
        },
        {
            bgImage: '/revu519/revu-12.jpg'
        },
        {
            bgImage: '/revu519/revu-13.jpg'
        },
        {
            bgImage: '/revu519/revu-14.jpg'
        },
        {
            bgImage: '/revu519/revu-15.jpg'
        },
        {
            bgImage: '/revu519/revu-16.jpg'
        },
        {
            bgImage: '/revu519/revu-17.jpg'
        },
        {
            bgImage: '/revu519/revu-18.jpg'
        },
        {
            bgImage: '/revu519/revu-19.jpg'
        },
    ];

    return (
        <div className="my-16">
            <Swiper
                breakpoints={{
                    240: {
                        slidesPerView: 2,
                    },
                    640: {
                        slidesPerView: 4,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    1024: {
                        slidesPerView: 6,
                    },
                    1280: {
                        slidesPerView: 8,
                    },
                    1536: {
                        slidesPerView: 10,
                    },
                }}
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