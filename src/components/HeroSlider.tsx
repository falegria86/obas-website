import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const HeroSlider = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        {
            bgImage: '/mako54/mako-hero.webp',
            logo: '/obas-logo-white.svg',
            mainLogo: '/mako54/mako-logo-white.svg',
            description: 'El lugar ideal para pasar tus días de descanso en relajación y comodidad total. Disfruta de la mejor vista en Puerto Vallarta.',
            innerBgImage: '/mako54/mako-hero-2.webp',
        },
        {
            bgImage: '/revu519/revu-01.jpg',
            logo: '/obas-logo-white.svg',
            mainLogo: '/revu519/revu-logo-white.svg',
            description: 'Departamentos tipo loft amueblados y equipados para tus necesidades. Con una excelente ubicación en la ciudad de Tepic, Nayarit.',
            innerBgImage: '/revu519/revu-02.jpg',
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
                onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="h-fit xl:h-full flex flex-col xl:flex-row-reverse gap-8 xl:gap-16">
                            <div className="w-full xl:w-1/2 flex flex-col justify-between">
                                <motion.img
                                    key={`${activeSlide}-logo`}
                                    src={slide.logo}
                                    alt="Obas Logo"
                                    className="w-28"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                />
                                <motion.img
                                    key={`${activeSlide}-mainLogo`}
                                    src={slide.mainLogo}
                                    alt="Main Logo"
                                    className="h-72 xl:h-1/2 mx-auto"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                />
                                <div className="w-full flex flex-col items-center xl:flex-row justify-between">
                                    <motion.div
                                        key={`${activeSlide}-description`}
                                        className="w-full xl:w-1/3 flex flex-col items-center xl:items-start"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                    >
                                        <p className="text-white mb-5 xl:text-left text-center">
                                            {slide.description}
                                        </p>
                                        <button
                                            className='border border-white rounded-full py-3 px-8 text-white hover:text-neutral-900 hover:bg-white transition-all'
                                        >
                                            Conoce más
                                        </button>
                                    </motion.div>
                                    <motion.div
                                        key={`${activeSlide}-innerBgImage`}
                                        className="xl:block hidden w-1/3 h-96 rounded-3xl bg-center bg-cover"
                                        style={{ backgroundImage: `url(${slide.innerBgImage})` }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1, delay: 1.5 }}
                                    ></motion.div>
                                </div>
                            </div>
                            <motion.div
                                key={`${activeSlide}-bgImage`}
                                className="w-full h-96 xl:h-full xl:w-1/2 rounded-3xl bg-center bg-cover"
                                style={{ backgroundImage: `url(${slide.bgImage})` }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                            ></motion.div>
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

export default HeroSlider;
