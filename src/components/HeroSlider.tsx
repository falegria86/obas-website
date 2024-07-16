import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Autoplay } from "swiper/modules";

const HeroSlider = () => {
    const slides = [
        {
            bgImage: '/mako-hero.webp',
            logo: '/obas-logo-white.svg',
            mainLogo: '/mako-logo-white.svg',
            description: 'El lugar ideal para pasar tus días de descanso en relajación y comodidad total. Disfruta de la mejor vista en Puerto Vallarta.',
            innerBgImage: '/mako-hero-2.webp',
        },
        {
            bgImage: '/revu-01.jpg',
            logo: '/obas-logo-white.svg',
            mainLogo: '/revu-logo-white.svg',
            description: 'Departamentos tipo loft amueblados y equipados para tus necesidades. Con una excelente ubicación en la ciudad de Tepic, Nayarit.',
            innerBgImage: '/revu-02.jpg',
        }
    ];

    return (
        <>
            <Swiper
                slidesPerView={1}
                navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
                autoplay={{ delay: 5000 }}
                loop={true}
                modules={[Navigation, Autoplay]}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-full flex gap-16">
                            <div
                                className="w-1/2 rounded-3xl bg-cover"
                                style={{ backgroundImage: `url(${slide.bgImage})` }}
                            ></div>
                            <div className="w-1/2 flex flex-col justify-between">
                                <img src={slide.logo} alt="Obas Logo" className="w-28" />
                                <img src={slide.mainLogo} alt="Main Logo" className="h-1/2 mx-auto" />
                                <div className="w-full flex justify-between">
                                    <div className="w-1/3">
                                        <p className="text-white mb-5">
                                            {slide.description}
                                        </p>
                                        <button className='border border-white rounded-full py-3 px-8 text-white hover:text-neutral-900 hover:bg-white transition-all'>
                                            Conoce más
                                        </button>
                                    </div>
                                    <div
                                        className="bg-green-500 w-1/3 h-96 max-h-96 rounded-3xl bg-cover"
                                        style={{ backgroundImage: `url(${slide.innerBgImage})` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className="arrow-left absolute bg-white z-30 top-1/2 rounded-full p-2 ml-4">
                <IoIosArrowBack size={40} />
            </button>
            <button className="arrow-right absolute bg-white z-30 top-1/2 rounded-full p-2 right-4">
                <IoIosArrowForward size={40} />
            </button>
        </>
    )
}
export default HeroSlider